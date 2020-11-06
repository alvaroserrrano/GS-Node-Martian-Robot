let fs = require('fs');
const { runInContext } = require('vm');
let { Planet } = require('./model/Planet');
let { Directive } = require('./model/Directive');
let inputsDir = './data/';
let inputfile = `${inputsDir}input.txt`;

run();

function run() {
  fs.readFile(inputfile, function (err, data) {
    if (err) {
      console.error(
        'Error: ' + err.code + '\n' + err.name + ': ' + err.message
      );
    }
    main(data.toString().replace('\r\n', '\n'));
  });
}

function main(input) {
  let lines = input.split('\n');
  let planet_size = lines.shift().split(' ');
  if (planet_size.length != 2) {
    console.error('Invalid boundary');
  }
  let width = parseInt(planet_size[0]) + 1;
  let height = parseInt(planet_size[1]) + 1;
  let mars = new Planet(height, width);
  try {
    let directivesList = [];
    for (let i = 0; i < lines.length - 1; i = i + 2) {
      let initialPosition = lines[i].trim();
      let directives = lines[i + 1];
      let directive = new Directive(initialPosition, directives);
      directivesList.push(directive);
    }
    for (let i = 0; i < directivesList.length; i++) {
      let result = directivesList[i].executeInstruction(mars);
      console.log(result);
    }
  } catch (err) {
    console.log(err);
  }
}
