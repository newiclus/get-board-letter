'use strict';

const constants = require('./constants')
const Direction = constants.Direction;

module.exports = Object.freeze({
    /*
     * Direction is either Direction.LEFT or Direction.RIGHT.
     * For the move that doesn't capture a letter, use the constants.EMPTY_LETTER as a letter.
    */
    Move: function(direction, letter = constants.EMPTY_LETTER) {
        if (Direction.VALID_DIRECTIONS.indexOf(direction) == -1) {
            throw Error(`Invalid direction: ${direction}`);
        }
        return Object.freeze({
            direction,
            letter
        })
    }
});
