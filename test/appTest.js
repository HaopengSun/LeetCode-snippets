const assert = require('chai').assert;
const app = require('../app');

describe('App', function() {
  it ('test mocha and chai and the app should return hello', function() {
    assert.equal(app(), 'hello');
  })
})