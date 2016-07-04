/* eslint-env mocha */
var assert = require('chai').assert
var solution = require('../../solutions/values-types-and-operators/numbers.js')

describe('Numbers', function () {
  it('should have type of number', function () {
    assert.equal(typeof solution.annualLeave, 'number')
    assert.equal(typeof solution.sickLeave, 'number')
    assert.equal(typeof solution.traningLeave, 'number')
  })

  describe('Arithmetic', function () {
    it('should do something', function () {
      assert.equal(solution.sum, solution.annualLeave + solution.sickLeave + solution.traningLeave)
    })
  })

  describe('Special numbers', function () {
    it('should do something', function () {
      assert.equal(1, +'1')
    })
  })
})
