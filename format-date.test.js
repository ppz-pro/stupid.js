const target = require('./format-date')

test('date1', () => {
  expect(
    target(new Date('2022-9-19 22:1'))
  ).toBe('2022-09-19 22:01:00')
})

test('date2', () => {
  expect(
    target(new Date('2022-9-19 22:1'), true)
  ).toBe('2022-09-19 22:01:00.000')
})

test('date3', () => {
  expect(
    target(new Date('0000-00-00 00:00:00'))
  ).toBe('0000-00-00 00:00:00')
})

test('date4', () => {
  expect(
    target(new Date('0000-00-00 00:00:00'), true)
  ).toBe('0000-00-00 00:00:00.000')
})
