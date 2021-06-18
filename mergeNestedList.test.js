const flatten = require('./mergeNestedList');

test('test flatten function to nested array', () => {
  expect(flatten([1, 2, [2, 5]])).toStrictEqual([1, 2, 2, 5])
  expect(flatten([1, 2, [2, 5, [7]]])).toEqual([1, 2, 2, 5, 7])
})