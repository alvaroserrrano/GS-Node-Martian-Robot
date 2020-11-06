let fs = require('fs');
let planet = require('./model/Planet');
let directive = require('./model/Directive');
const { runInContext } = require('vm');
const Planet = require('./model/Planet');
const Directive = require('./model/Directive');
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
    main(data.replace('\r\n', '\n'));
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
    let directives = [];
    for (let i = 0; i < lines.length; i = i + 2) {
      let initialPosition = lines[i].trim();
      let directives = lines[i + 1].trim();
      let directive = new Directive(initialPosition, directives);
      directives.push(directive);
    }
    for (let i = 0; i < directives.length; i++) {
      let result = directives[i].executeInstruction(mars);
      console.log(result);
    }
  } catch (err) {
    console.log(err);
  }
}
