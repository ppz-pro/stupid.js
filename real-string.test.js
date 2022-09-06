const isRealString = require('./real-string')

test("'123' is a real string", () => {
  expect(isRealString('123')).toBe(true)
})

test("123 is not a real string", () => {
  expect(isRealString(123)).toBe(false)
})

test("new String('123') is not a real string", () => {
  expect(isRealString(new String('123'))).toBe(false)
})

test("'' is not a real string", () => {
  expect(isRealString('')).toBe(false)
})
