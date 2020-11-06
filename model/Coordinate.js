class Coordinate {
  constructor(row, col) {
    this.maxCoordinatePoint = 50;
    if (row >= this.maxCoordinatePoint || col >= this.maxCoordinatePoint) {
      throw new Error('Do not exceed maximum planet dimensions');
    }
    if (row < 0 || col < 0) {
      throw new Error('Coordinate point must be positive');
    }
    this.row = row;
    this.col = col;
    this.scent = false;
  }
}

module.exports = {
  Coordinate: Coordinate,
};
