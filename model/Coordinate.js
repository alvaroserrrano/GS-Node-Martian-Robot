class Coordinate {
  constructor(row, col) {
    this.maxCoordinatePoint = 50;
    if (row >= this.maxCoordinatePoint || col >= this.maxCoordinatePoint) {
      console.error('Invalid point in planet surface');
    }
    this.row = row;
    this.col = col;
    this.scent = false;
  }
}

module.exports = {
  Coordinate: Coordinate,
};
