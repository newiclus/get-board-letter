'use strict';

const DIRECTION_LEFT = "Left";
const DIRECTION_RIGHT = "Right";

module.exports = Object.freeze({
    Direction: Object.freeze({
        LEFT: DIRECTION_LEFT,
        RIGHT: DIRECTION_RIGHT,
        VALID_DIRECTIONS: [DIRECTION_LEFT, DIRECTION_RIGHT]
    }),
    EMPTY_LETTER: '0'        
});
