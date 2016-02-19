const fs = require('fs')
const path = require('path')
const version = require('version-filename')

module.exports = bump

function bump (p) {
  const n = path.join(path.dirname(p), version(p))
  if (fs.existsSync(n)) return bump(n)
  if (fs.existsSync(p)) fs.writeFileSync(n, fs.readFileSync(p))
}
