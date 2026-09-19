const fs = require('fs')
const src = fs.readFileSync('Frontend/Vue/Vue-Router.md', 'utf8')
const lines = src.split('\n')
for (let i = 563; i <= 567; i++) {
  const line = lines[i]
  const bt = (line.match(/`/g) || []).length
  console.log(`Line ${i+1} bt=${bt}: ${JSON.stringify(line)}`)
}
