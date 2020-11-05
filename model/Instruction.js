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
  execute() {}
}

class MoveRightInstruction extends Instruction {
  constructor(directive, parentDirective) {
    super(directive, parentDirective);
  }
}

module.exports = {
  InstructionFactory: InstructionFactory,
  Instruction: Instruction,
  MoveRightInstruction: MoveRightInstruction,
  MoveLeftInstruction: MoveLeftInstruction,
  MoveForwardInstruction: MoveForwardInstruction,
};
