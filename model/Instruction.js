//Design Pattern -> Factory pattern

//Instruction Factory
class InstructionFactory {
  constructor() {}
  static getDirective(directive, parentDirective) {
    if (directive == null || directive == undefined) {
      throw 'Invalid directive';
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
    this.parentDirective.orientation = this.rightMoves[
      (this.rightMoves.indexOf(this.parentDirective) + 1) % 4
    ];
    response = {
      status: 'success',
    };
    return response;
  }
}

class MoveLeftInstruction extends Instruction {
  constructor(directive, parentDirective) {
    super(directive, parentDirective);
    this.leftMoves = ['N', 'W', 'S', 'E'];
  }
  execute(planet) {
    this.parentDirective.orientation = this.leftMoves[
      (this.leftMoves.indexOf(this.parentDirective) + 1) % 4
    ];
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
    if (isValidMove) {
      this.moveForward(this.parentDirective.orientation);
      return { status: 'sucess' };
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
    switch (orientation) {
      case 'N':
        this.parentDirective.row = this.parentDirective.row + 1;
      case 'S':
        this.parentDirective.row = this.parentDirective.row - 1;
      case 'W':
        this.parentDirective.col = this.parentDirective.col - 1;
      case 'E':
        this.parentDirective.col = this.parentDirective.col + 1;
    }
  }
  isValidMove(orientation, planet) {
    let flag;
    switch (orientation) {
      case 'N':
        flag = planet.isValidCoordinate(
          this.parentDirective.row + 1,
          this.parentDirective.col
        );
      case 'S':
        flag = planet.isValidCoordinate(
          this.parentDirective.row - 1,
          this.parentDirective.col
        );
      case 'W':
        flag = planet.isValidCoordinate(
          this.parentDirective.row,
          this.parentDirective.col - 1
        );
      case 'E':
        flag = planet.isValidCoordinate(this.parentDirective.row, this.col + 1);
    }
    return flag;
  }
}

module.exports = {
  InstructionFactory: InstructionFactory,
  Instruction: Instruction,
  MoveRightInstruction: MoveRightInstruction,
  MoveLeftInstruction: MoveLeftInstruction,
  MoveForwardInstruction: MoveForwardInstruction,
};
