const fs = require('fs')
const MarkdownIt = require('markdown-it')

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

const src = fs.readFileSync('Frontend/Vue/Vue-Router.md', 'utf8')
const html = md.render(src)

// Output the first 100 lines of rendered HTML
const lines = html.split('\n')
console.log(`Total lines: ${lines.length}`)
for (let i = 0; i < Math.min(100, lines.length); i++) {
  console.log(`${i+1}: ${lines[i].substring(0, 120)}`)
}
