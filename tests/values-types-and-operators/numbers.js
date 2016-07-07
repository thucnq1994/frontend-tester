/* eslint-env mocha */
var assert = require('chai').assert
var solution = require('../../solutions/values-types-and-operators/numbers.js')

describe('Numbers', function () {
  it('should have type of number', function () {
    assert.equal(typeof solution.average, 'number')
  })

  describe('Leave Report', function () {
    it('should return the right value', function () {
      assert.equal(solution.average, (solution.annualLeave - solution.BobRemainingDays + solution.annualLeave - solution.AliceRemainingDays + solution.annualLeave - solution.TomRemainingDays) / 3)
    })
  })
})
