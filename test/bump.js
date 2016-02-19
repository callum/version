const fs = require('fs')
const path = require('path')
const test = require('tape')
const bump = require('../bump')

test('bump', function (t) {
  t.plan(1)
  fs.writeFileSync(p('foobar.tmp'), 'bar')
  bump(p('foobar.tmp'))
  const d = fs.readFileSync(p('foobar_v001.tmp'), 'utf8')
  fs.unlinkSync(p('foobar.tmp'))
  fs.unlinkSync(p('foobar_v001.tmp'))
  t.equal(d, 'bar')
})

test('non-linear', function (t) {
  t.plan(2)
  fs.writeFileSync(p('foobar_v001.tmp'))
  bump(p('foobar.tmp'))
  bump(p('foobar_v001.tmp'))
  const v2 = fs.existsSync(p('foobar_v002.tmp'))
  const v3 = fs.existsSync(p('foobar_v003.tmp'))
  fs.unlinkSync(p('foobar_v001.tmp'))
  fs.unlinkSync(p('foobar_v002.tmp'))
  fs.unlinkSync(p('foobar_v003.tmp'))
  t.ok(v2)
  t.ok(v3)
})

function p (f) {
  return path.join(__dirname, f)
}
