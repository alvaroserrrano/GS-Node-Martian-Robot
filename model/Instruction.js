//Design Pattern -> Factory pattern

//Instruction Factory
class InstructionFactory {
  constructor() {}
  static getDirective(directive, parentDirective) {
    if (directive == undefined) {
      console.error('Invalid directive');
    }
    switch (directive) {
      case 'R':
        return new MoveRightInstruction(directive, parentDirective);
      case 'L':
        return new MoveLeftInstruction(directive, parentDirective);
      case 'F':
        return new MoveForwardInstruction(directive, parentDirective);
      default:
        return undefined;
    }
  }
}

class Instruction {
  constructor(directive, parentDirective) {
    this.directive = directive;
    this.parentDirective = parentDirective;
  }
  execute(planet) {
    console.error('Execution not specified');
  }
}

class MoveRightInstruction extends Instruction {
  constructor(directive, parentDirective) {
    super(directive, parentDirective);
    this.rightMoves = ['N', 'E', 'S', 'W'];
  }
  execute(planet) {
    if (this.parentDirective.orientation === 'N') {
      this.parentDirective.orientation = 'E';
    } else if (this.parentDirective.orientation === 'E') {
      this.parentDirective.orientation = 'S';
    } else if (this.parentDirective.orientation === 'S') {
      this.parentDirective.orientation = 'W';
    } else if (this.parentDirective.orientation === 'W') {
      this.parentDirective.orientation = 'N';
    } else {
      console.error('Invalid orientation');
    }
    return { status: 'success' };
  }
}

class MoveLeftInstruction extends Instruction {
  constructor(directive, parentDirective) {
    super(directive, parentDirective);
    this.leftMoves = ['N', 'W', 'S', 'E'];
  }
  execute(planet) {
    if (this.parentDirective.orientation === 'N') {
      this.parentDirective.orientation = 'W';
    } else if (this.parentDirective.orientation === 'W') {
      this.parentDirective.orientation = 'S';
    } else if (this.parentDirective.orientation === 'S') {
      this.parentDirective.orientation = 'E';
    } else if (this.parentDirective.orientation === 'E') {
      this.parentDirective.orientation = 'N';
    } else {
      console.error('Invalid orientation');
    }

    return { status: 'success' };
  }
}

class MoveForwardInstruction extends Instruction {
  constructor(directive, parentDirective) {
    super(directive, parentDirective);
  }
  execute(planet) {
    let isValidMove = this.isValidMove(
      this.parentDirective.orientation,
      planet
    );
    if (isValidMove == true) {
      this.moveForward(this.parentDirective.orientation);
      return { status: 'success' };
    } else {
      if (
        planet.getPosition(this.parentDirective.row, this.parentDirective.col)
          .scent === true
      ) {
        return {
          status: 'scent',
        };
      } else {
        planet.createScent(this.parentDirective.row, this.parentDirective.col);
        return { status: 'lost' };
      }
    }
  }
  moveForward(orientation) {
    if (orientation === 'N') {
      this.parentDirective.row = this.parentDirective.row + 1;
    } else if (orientation === 'W') {
      this.parentDirective.col = this.parentDirective.col - 1;
    } else if (orientation === 'S') {
      this.parentDirective.row = this.parentDirective.row - 1;
    } else if (orientation === 'E') {
      this.parentDirective.col = this.parentDirective.col + 1;
    }
  }
  isValidMove(orientation, planet) {
    switch (orientation) {
      case 'N':
        return planet.isValidCoordinate(
          this.parentDirective.row + 1,
          this.parentDirective.col
        );
      case 'S':
        return planet.isValidCoordinate(
          this.parentDirective.row - 1,
          this.parentDirective.col
        );
      case 'W':
        return planet.isValidCoordinate(
          this.parentDirective.row,
          this.parentDirective.col - 1
        );
      case 'E':
        return planet.isValidCoordinate(this.parentDirective.row, this.col + 1);
    }
  }
}

module.exports = {
  InstructionFactory: InstructionFactory,
  Instruction: Instruction,
  MoveRightInstruction: MoveRightInstruction,
  MoveLeftInstruction: MoveLeftInstruction,
  MoveForwardInstruction: MoveForwardInstruction,
};
