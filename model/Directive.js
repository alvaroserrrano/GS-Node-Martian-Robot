let instr = require('./Instruction');
class Directive {
  constructor(initialPositionStr, directivesStr) {
    this.initialPositionStr = initialPositionStr;
    this.directivesStr = directivesStr;
    let initialPosition = this.initialPositionStr.split(' ');
    this.directives = directivesStr.split('');

    // x y orientation
    if (initialPosition.length != 3) {
      console.error('Invalid initial conditions');
    }

    this.initialCol = parseInt(initialPosition[0]); //x
    this.initialRow = parseInt(initialPosition[1]); //y
    this.initialOrientation = initialPosition[2]; //N, S, E, W

    this.row = this.initialRow;
    this.col = this.initialCol;
    this.orientation = this.initialOrientation;
  }
  executeInstruction(planet) {
    for (let i = 0; i < this.directives.length; i++) {
      let directive = this.directives[i];
      let instruction = instr.InstructionFactory.getDirective(directive, this);
      let result = instruction.execute(planet);
      if (result.status === 'lost') {
        return '' + this.col + ' ' + this.row + '' + this.orientation + 'LOST';
      }
    }
    return '' + this.col + ' ' + this.row + '' + this.orientation;
  }
}

module.exports = {
  Directive: Directive,
};
