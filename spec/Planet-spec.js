const { Planet } = require('../model/Planet');
const { Coordinate } = require('../model/Coordinate');

describe('Deteermine whether surface is valid for the planet', function () {
  it('Given some initial conditions determine if the surface fits the size of the planet', function () {
    let mars = new Planet();
    let rows = [];
    mars.rows = 5;
    mars.cols = 7;
    let row, col;
    for (row = 0; row < mars.rows; row++) {
      let rows = [];
      for (col = 0; col < mars.cols; col++) {
        rows.push(new Coordinate(row, col));
      }
      mars.surface.push(rows);
    }
    mars.createScent(4, 3);
    expect(mars.isValidCoordinate(7, 8)).toBeFalse;
    expect(mars.isValidCoordinate(4, 3)).toBeTrue;
    expect(mars.getPosition(3, 4)).toEqual(mars.surface[3][4]);
    expect(mars.hasScent(2, 4)).toBeFalse;
    expect(mars.hasScent(4, 3)).toBeTrue;
  });
});
