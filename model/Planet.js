let { Coordinate } = require('./Coordinate');

class Planet {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.surface = [];
    this.init();
  }
  init = () => {
    let row, col;
    for (row = 0; row < this.rows; row++) {
      let rows = [];
      for (col = 0; col < this.cols; col++) {
        rows.push(new Coordinate(row, col));
      }
      this.surface.push(rows);
    }
  };
  isValidCoordinate(row, col) {
    if (row < 0 || row >= this.rows || col < 0 || col > this.cols) {
      return false;
    }
    return true;
  }
  getPosition(row, col) {
    return this.surface[row][col];
  }
  createScent(row, col) {
    this.getPosition(row, col).scent = true;
  }
  hasScent(row, col) {
    return this.getPosition(row, col).scent;
  }
  showFootprints(horizontalMove, verticalMove, orientation, instruction) {
    let path = '';
  }
}
module.exports = {
  Planet: Planet,
};
