const isNil = require('./is-nil')

test('0 is not nil', () => {
  expect(isNil(0)).toBe(false)
})

test('"" is not nil', () => {
  expect(isNil('')).toBe(false)
})

test('NaN is not nil', () => {
  expect(isNil(NaN)).toBe(false)
})

test('undefined is nil', () => {
  expect(isNil(undefined)).toBe(true)
})

test('void 0 is nil', () => {
  expect(isNil(void 0)).toBe(true)
})

test(' is nil', () => {
  expect(isNil()).toBe(true)
})

test('null is nil', () => {
  expect(isNil(null)).toBe(true)
})