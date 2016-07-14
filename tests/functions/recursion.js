/* eslint-env mocha */
var assert = require('chai').assert
var sinon = require('sinon')
var solution = require('../../solutions/functions/recursion.js')

// var solution = {
//   feed: function (arr) {
//     if(arr.length > 0) {
//       console.log(arr[0] + ' was fed');
//       arr.splice(0,1);
//       this.feed(arr);
//     } else {
//       return;
//     }
//   }
// }

describe('Recursion', function () {
  describe('Feed the dogs', function () {
    sinon.spy(console, 'log')
    sinon.spy(solution, 'feed')
    solution.feed(['a', 'B', 'c']);

    it('Feed all dogs', function () {
      assert.equal(solution.feed.callCount, 4)
      assert.equal(console.log.getCall(0).calledWithExactly('a was fed'), true)
      assert.equal(console.log.getCall(1).calledWithExactly('B was fed'), true)
      assert.equal(console.log.getCall(2).calledWithExactly('c was fed'), true)
    })

  })
})
