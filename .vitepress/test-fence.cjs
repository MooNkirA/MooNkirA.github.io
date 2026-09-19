const fs = require('fs')
const src = fs.readFileSync('Frontend/Vue/Vue-Router.md', 'utf8')
const lines = src.split('\n')

// Check lines 560-570 (0-indexed)
for (let i = 559; i <= 569; i++) {
  const line = lines[i]
  const bt = (line.match(/`/g) || []).length
  const trimmed = line.trimStart()
  const startsWithFence = /^(```|~~~)/.test(trimmed)
  console.log(`Line ${i+1}: bt=${bt}, fence=${startsWithFence}, content=${JSON.stringify(line)}`)
}
