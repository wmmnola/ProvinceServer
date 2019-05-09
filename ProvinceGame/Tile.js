const gauss = require("guassian")
const normalRandom = require("random-normal")
const cityBonus = .2;

class Tile {
  constructor(x, y, popMean, popDev, taxMean, taxDev) {
    this.colonized = false;
    // Tiles location in board
    this.x = x;
    this.y = y;
    // Mean and STD for normal random variable representing population
    this.popMean = popMean;
    this.popDev = popDev;
    this.popVar = this.popDev * this.popDev;
    // Mean and STD for normal random variable representing baseTax
    this.taxMean = taxMean;
    this.taxDev = taxDev;

    // Generation of baseTax and population as Normal random variables
    this.baseTax = randomNormal({
      mean: this.taxMean,
      dev: this.taxDev
    });
    this.population = randomNormal({
      mean: this.popMean,
      dev: this.popDev
    });
    // Various inital calculations
    if (this.baseTax > 0) this.baseTax = 1;
    this.isCity();
    this.localTaxEff = this.baseTax / this.taxMean;
    if (this.isCity) this.localTaxEff += this.localTaxEff * cityBonus;

  }
  collectTaxes() {
    return this.localTaxEff * this.population * this.baseTax;
  }
  isCity() {
    let dist = gaussian(this.popMean, this.popVar);
    if (dist.cdf(this.population) > .8) {
      this.isCity = true;
    }
    this.isCity = false;
  }

}


module.exports = Tile;
