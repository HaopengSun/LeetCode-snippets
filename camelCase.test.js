const camelcase = require('./camelCase')

test('test camelcase function', () => {
  expect(camelcase("Hello World!")).toBe("helloWorld")
})