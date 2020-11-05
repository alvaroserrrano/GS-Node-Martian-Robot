//Object implementation of enum
const orientations = {
  NORTH: 'north',
  WEST: 'west',
  EAST: 'east',
  SOUTH: 'south',
};

const MAX_COORDINATE = 50;

//Easier to track orientation when moving the robots
const rightMoves = ['N', 'E', 'S', 'W'];
const leftMoves = ['N', 'W', 'S', 'E'];

module.exports = {
  orientations: orientations,
  rightMoves: rightMoves,
  leftMoves: leftMoves,
};
