/**
 * 批量修复图片路径
 * 旧笔记中有些图片引用没有 images/ 前缀（如 ![alt](xxx.png)），
 * 但实际文件在 images/ 子目录下。
 * 这个脚本扫描所有 .md 文件，修复这类引用。
 */
const fs = require('fs')
const path = require('path')

const rootDir = process.cwd()

// 需要排除的目录
const excludeDirs = new Set([
  '.obsidian', '.trae', '.claude', '.vscode', '.git',
  'node_modules', '.vitepress', 'resources', 'attachments',
])

function walk(dir) {
  let results = []
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return results
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (excludeDirs.has(entry.name)) continue
      results = results.concat(walk(full))
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(full)
    }
  }
  return results
}

const mdFiles = walk(rootDir)
console.log(`Scanning ${mdFiles.length} markdown files...`)

let fixedCount = 0
let brokenCount = 0

for (const filePath of mdFiles) {
  const dir = path.dirname(filePath)
  const content = fs.readFileSync(filePath, 'utf8')

  // 匹配图片引用 ![alt](path)
  const imgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g
  let modified = false
  let newContent = content

  newContent = newContent.replace(imgRegex, (match, alt, imgPath) => {
    // 跳过外部链接和绝对路径
    if (imgPath.startsWith('http://') || imgPath.startsWith('https://') || imgPath.startsWith('/')) {
      return match
    }

    // 去掉查询参数和锚点
    const cleanPath = imgPath.split('?')[0].split('#')[0]
    const fullPath = path.join(dir, cleanPath)

    if (fs.existsSync(fullPath)) {
      // 文件存在，不需要修复
      return match
    }

    // 文件不存在，检查是否在 images/ 子目录
    const fileName = path.basename(cleanPath)
    const imagesPath = path.join(dir, 'images', fileName)

    if (fs.existsSync(imagesPath)) {
      // 在 images/ 子目录下找到了，修复路径
      fixedCount++
      modified = true
      const newImgPath = 'images/' + fileName
      return `![${alt}](${newImgPath})`
    }

    // 真的找不到，统计一下
    brokenCount++
    console.log(`  Broken: ${path.relative(rootDir, filePath)} -> ${imgPath}`)
    return match
  })

  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf8')
  }
}

console.log(`\nDone! Fixed ${fixedCount} image paths, ${brokenCount} truly broken.`)
