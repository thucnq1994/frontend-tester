/* eslint-env mocha */
var assert = require('chai').assert
var solution = require('../../solutions/values-types-and-operators/string.js')

describe('Strings', function () {
  describe('Hello World', function () {
    it('says hello world with no name', function () {
      assert.equal(solution.hello(''), 'Hello, World!')
    })

    it('says hello to bob', function () {
      assert.equal(solution.hello('Bob'), 'Hello, Bob!')
    })

    it('says hello to sally', function () {
      assert.equal(solution.hello('Sally'), 'Hello, Sally!')
    })
  })
})
