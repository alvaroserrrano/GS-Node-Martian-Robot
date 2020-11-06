let instr = require('./Instruction');
class Directive {
  constructor(initialPositionStr, directivesStr) {
    this.initialPositionStr = initialPositionStr;
    this.directivesStr = directivesStr;
    let initialPosition = this.initialPositionStr.split(' ');
    this.directives = directiveStr.split('');

    // x y orientation
    if (initialPosition.length != 3) {
      console.error('Invalid initial conditions');
    }

    this.initialCol = initialPosition[0]; //x
    this.initialRow = initialPosition[1]; //y
    this.initialOrientation = initialPosition[2]; //N, S, E, W

    this.row = initialRow;
    this.col = initialCol;
    this.orientation = this.initialOrientation;
  }
  executeInstruction(planet) {
    for (let i = 0; i < this.directives; i++) {
      let directive = this.directives[i];
      let instruction = instr.InstructionFactory.getDirective(directive, this);
      let result = instruction.execute(planet);
      switch (result.status) {
        case 'success':
          console.log('Successful move');
          result = '' + this.col + ' ' + this.row + ' ' + this.orientation;
        case 'scent':
          console.log('Found scent');
          result = '' + this.col + ' ' + this.row + ' ' + this.orientation;
        case 'lost':
          result = '' + this.col + ' ' + this.row + this.orientation + 'LOST';
      }
    }
  }
}

module.exports = {
  Directive: Directive,
};
