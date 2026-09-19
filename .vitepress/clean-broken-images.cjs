/**
 * 清理失效图片引用
 * 扫描所有 .md 文件，把指向不存在文件的图片引用替换为占位文本。
 */
const fs = require('fs')
const path = require('path')

const rootDir = process.cwd()

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

let cleanedCount = 0

for (const filePath of mdFiles) {
  const dir = path.dirname(filePath)
  const content = fs.readFileSync(filePath, 'utf8')

  const imgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g
  let modified = false
  let newContent = content

  newContent = newContent.replace(imgRegex, (match, alt, imgPath) => {
    if (imgPath.startsWith('http://') || imgPath.startsWith('https://') || imgPath.startsWith('/')) {
      return match
    }

    const cleanPath = imgPath.split('?')[0].split('#')[0]
    const fullPath = path.join(dir, cleanPath)

    if (fs.existsSync(fullPath)) {
      return match
    }

    // 文件不存在，替换为占位文本
    cleanedCount++
    modified = true
    const fileName = path.basename(cleanPath)
    return `*[图片已失效：${fileName}]*`
  })

  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf8')
    console.log(`  Cleaned: ${path.relative(rootDir, filePath)}`)
  }
}

console.log(`\nDone! Cleaned ${cleanedCount} broken image references.`)
