/* eslint-env mocha */
var assert = require('chai').assert
var solution = require('../../solutions/values-types-and-operators/unary-operators.js')

describe('Unary Operators', function () {
  describe('Type of', function () {
    it('gets the right type of parameter', function () {
      assert.equal(solution.typeOf(123), 'Type of 123 is number')
      assert.equal(solution.typeOf('hello'), 'Type of hello is string')
      assert.equal(solution.typeOf(true), 'Type of true is boolean')
    })
  })
})
