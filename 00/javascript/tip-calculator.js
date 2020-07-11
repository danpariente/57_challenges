class TipCalculator {
  constructor(billAmount, tipRate) {
    this.billAmount = billAmount;
    this.tipRate = tipRate;
  }

  total() {
    return this.billAmount + this.tip();
  }

  tip() {
    return this.billAmount * (this.tipRate / 100);
  }
}

module.exports = TipCalculator;
