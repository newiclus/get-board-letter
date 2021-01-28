const letterboard = require('../lib/letterboard');
const Direction = require('../lib/constants').Direction;
const Move = require('../lib/types').Move;

const fixture = require('@deemai/test-fixture');
const assert = require('assert');

describe('Tests', function() {
  it('TestLetterBoardUsingCat', function() {
    var testBoard = ['a', 'z', 'c', 't', 'v', 'a'];
    var moves = letterboard.solveLetterBoard(testBoard, 'cat');

    var expected = [
      /* c */ new Move(Direction.LEFT), new Move(Direction.LEFT), new Move(Direction.LEFT, 'c'),
      /* a */ new Move(Direction.RIGHT), new Move(Direction.RIGHT, 'a'),
      /* t */ new Move(Direction.LEFT), new Move(Direction.LEFT, 't')
    ];

    assert.deepEqual(expected, moves);
  });

  it('TestLetterBoardUsingTV', function() {
    var testBoard = ['a', 'z', 'c', 't', 'v', 'a'];
    var moves = letterboard.solveLetterBoard(testBoard, 'tv');

    var expected = [
      /* t */ new Move(Direction.RIGHT), new Move(Direction.RIGHT), new Move(Direction.RIGHT, 't'),
      /* v */ new Move(Direction.LEFT, 'v')
    ];

    assert.deepEqual(expected, moves);
  });

  fixture.baseTest();
});
