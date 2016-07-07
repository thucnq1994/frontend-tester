/* eslint-env mocha */
var assert = require('chai').assert
var solution = require('../../solutions/program-structure/switch.js')

// var solution = {
//   ageOn: function (ageInSeconds, planet) {
//     switch (planet) {
//       case 'earth':
//         return Math.round(ageInSeconds / 31557600)
//       case 'mercury':
//         return Math.round(ageInSeconds / 31557600 / 0.2408467)
//       case 'venus':
//         return Math.round(ageInSeconds / 31557600 / 0.61519726)
//     }
//   }
// }

describe('Switch', function () {
  describe('Space Age', function () {
    it('age in earth years', function () {
      assert.equal(solution.ageOn(1000000000, 'earth'), 32)
    })

    it('age in mercury years', function () {
      assert.equal(solution.ageOn(2134835688, 'mercury'), 281)
    })

    it('age in venus years', function () {
      assert.equal(solution.ageOn(189839836, 'venus'), 10)
    })
  })
})
