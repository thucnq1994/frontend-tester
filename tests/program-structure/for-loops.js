/* eslint-env mocha */
var assert = require('chai').assert
var sinon = require('sinon')
var solution = require('../../solutions/program-structure/for-loops.js')

// var solution = {
//   fizzBuzz: function () {
//     for (var i = 0; i < 100; i++) {
//       if (i % 3 === 0) {
//         console.log('Fizz')
//       } else if (i % 5 === 0) {
//         console.log('Buzz')
//       } else {
//         console.log(i)
//       }
//     }
//   }
// }

describe('For Loops', function () {
  describe('FizzBuzz', function () {
    sinon.spy(console, 'log')
    solution.fizzBuzz()

    it('print "Fizz" for numbers devisible by 3', function () {
      assert.equal(console.log.getCall(3).calledWithExactly('Fizz'), true)
      assert.equal(console.log.getCall(36).calledWithExactly('Fizz'), true)
      assert.equal(console.log.getCall(15).calledWithExactly('Fizz'), true)
      assert.equal(console.log.getCall(1).calledWithExactly(1), true)
    })

    it('print "Buzz" for numbers devisible by 5 and not 3', function () {
      assert.equal(console.log.getCall(15).calledWithExactly('Fizz'), true)
      assert.equal(console.log.getCall(45).calledWithExactly('Fizz'), true)
      assert.equal(console.log.getCall(25).calledWithExactly('Buzz'), true)
      assert.equal(console.log.getCall(50).calledWithExactly('Buzz'), true)
    })
  })
})
