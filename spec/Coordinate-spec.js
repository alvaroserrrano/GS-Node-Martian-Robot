let { Coordinate } = require('../model/Coordinate.js');

describe('Planet height cannot be greater', function () {
  it('Do not exceed maximum planet dimensions', function () {
    expect(function () {
      new Coordinate(4, 80);
    }).toThrow(new Error('Do not exceed maximum planet dimensions'));
  });
  it('Planet width cannot be greater than 50', function () {
    expect(function () {
      new Coordinate(71, 1);
    }).toThrow(new Error('Do not exceed maximum planet dimensions'));
  });
  it('x-point must be positive', function () {
    expect(function () {
      new Coordinate(-3, 1);
    }).toThrow(new Error('Coordinate point must be positive'));
  });
  it('y-point must be positive', function () {
    expect(function () {
      new Coordinate(1, -3);
    }).toThrow(new Error('Coordinate point must be positive'));
  });
});
