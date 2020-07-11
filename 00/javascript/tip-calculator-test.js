var expect = require('chai').expect;
var TipCalculator = require('./tip-calculator.js');

describe('TipCalculator', function() {
  describe('#tip()', function() {
    it('calculates the tip', function() {
      var tipCalculator = new TipCalculator(100, 15);

      expect(tipCalculator.tip()).to.equal(15);
    });
  });

  describe('#total()', function() {
    it('calculates the total including tip', function() {
      var tipCalculator = new TipCalculator(100, 15);

      expect(tipCalculator.total()).to.equal(115);
    });
  });
});
