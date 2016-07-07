/* eslint-env mocha */
var assert = require('chai').assert
var solution = require('../../solutions/values-types-and-operators/boolean-values.js')

describe('Boolean Values', function () {
  describe('Ranking', function () {
    it('returns excellent if grade >= 90', function () {
      assert.equal(solution.rank(99), 'Excellent')
    })

    it('returns good if grade >= 60 and grade < 90', function () {
      assert.equal(solution.rank(80), 'Good')
    })

    it('returns average if grade < 60', function () {
      assert.equal(solution.rank(50), 'Average')
    })
  })
})
