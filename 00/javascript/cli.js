var inquirer = require('inquirer');
var TipCalculator = require('./tip-calculator.js');

class Cli {
  run() {
    inquirer.prompt(this.questions()).then((answers) => {
      var tipCalculator = new TipCalculator(Number(answers.billAmount), Number(answers.tipRate))
      console.log(`Tip: $${tipCalculator.tip()} Total: $${tipCalculator.total()}`)
    });
  }

  questions() {
    return [
      {
        type: 'input',
        name: 'billAmount',
        message: 'What is the bill amount?'
      },
      {
        type: 'input',
        name: 'tipRate',
        message: 'What is the tip rate?'
      }
    ];
  }
}

new Cli().run();
