'use strict';

const Direction = require('./constants').Direction;
const Move = require('./types').Move;

module.exports = {
  /* 
    * For the board given (an array of strings each representing a letter) and a
    * desired word (a string) returns an array of Move instances.
    */
  solveLetterBoard: function(board, word) {
    let newBoard = [...board];
    let currentSide = null;
    const expected = [];
    const letters = word.split('');

    const removeLetter = (index) => {
      const sliceOne = newBoard.slice(index+1);
      const sliceTwo = newBoard.slice(0, index);

      newBoard = [...sliceOne, ...sliceTwo];
    }
    
    letters.forEach(letter => {
      let position;
      let start = 0;
      let end = 0;

      if (!currentSide) {
        position = newBoard.indexOf(letter);
        currentSide = position < (board.length / 2) ? Direction.RIGHT : Direction.LEFT;
      }
      
      if (currentSide === Direction.RIGHT) {
        currentSide = Direction.LEFT;
        position = newBoard.indexOf(letter);
        start = 0;
        end = position;
      }
      else {
        currentSide = Direction.RIGHT;
        position = newBoard.lastIndexOf(letter);
        start = position;
        end = newBoard.length-1;
      }
      
      
      for (let i = start; i < end; i++ ) {
        expected.push(new Move(currentSide));
      }

      expected.push(new Move(currentSide, letter));

      removeLetter(position);
    });
    
    return expected;
}
}
