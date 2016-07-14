/* eslint-env mocha */
var assert = require('chai').assert
var sinon = require('sinon')
var solution = require('../../solutions/functions/optional-arguments.js')

// var solution = {
//   car_simulator: function (yourName, yourFriendName) {
//     var str = "Hello, " + yourName;
//     if(yourFriendName !== undefined){
//       str += " and " + yourFriendName;
//     }
//     console.log(str);
//   }
// }

describe('Optional Arguments', function () {
  describe('Sport car', function () {
    sinon.spy(console, 'log')

    it('Car say hello with just one passenger', function () {
      solution.car_simulator('Tim')
      assert.equal(console.log.calledWithExactly('Hello, Tim'), true)
    })

    it('Car say hello with two passengers', function () {
      solution.car_simulator('Tim', 'Alex')
      assert.equal(console.log.calledWithExactly('Hello, Tim and Alex'), true)
    })
  })
})
