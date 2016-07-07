/* eslint-env mocha */
var assert = require('chai').assert
var sinon = require('sinon')
var solution = require('../../solutions/program-structure/while-and-do-loops.js')

// var solution = {
//   chessBoard: function () {
//     var count = 0
//     while (count < 8) {
//       if (count % 2 === 0) {
//         console.log(' # # # #')
//       } else {
//         console.log('# # # # ')
//       }
//       count++
//     }
//   }
// }

describe('While and Do Loops', function () {
  describe('Chess Board', function () {
    sinon.spy(console, 'log')
    solution.chessBoard()

    it('prints the chess board', function () {
      assert.equal(console.log.getCall(0).calledWithExactly(' # # # #'), true)
      assert.equal(console.log.getCall(1).calledWithExactly('# # # # '), true)
    })
  })
})
