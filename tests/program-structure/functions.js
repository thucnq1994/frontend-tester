/* eslint-env mocha */
var assert = require('chai').assert
var solution = require('../../solutions/program-structure/functions.js')

// var solution = {
//   ageOnVenus: function (ageInSeconds) {
//     return Math.round(ageInSeconds / 31557600 / 0.61519726)
//   }
// }

describe('Functions', function () {
  describe('Venus Age', function () {
    it('age in venus years', function () {
      assert.equal(solution.ageOnVenus(189839836), 10)
    })
  })
})
