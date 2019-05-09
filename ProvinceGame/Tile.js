const gauss = require("guassian")
const normalRandom = require("random-normal")
const cityBonus = .2;

class Tile {
  /**
   * Creates a new Tile object
   *
   * @param {Integer} x the x position in the game board
   * @param {Integer} y the y position in the game board
   * @param {Float} popMean the population mean of a normal random variable for population
   * @param {Float} popDev the S.T. deviation of a normal random variable for population
   * @param {Float} taxMean the population mean of a normal random variable for baseTax
   * @param {Float} taxDev the S.T. deviation of a normal random variable for baseTax
   */
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
    /**
     * Calculates and returns the tax paid per turn. This is calculated by multiplying
     * basetax by population and a localTaxEff, which is proportional to the inverse
     * of size. Cities have an added bonus of 20%
     */
  collectTaxes() {
      return this.localTaxEff * this.population * this.baseTax;
    }
    /**
     * Determins if the Tiles population is in the 80th percentile. If it is
     * this tile becomes a city. Which has an added city tax bonus
     */
  isCity() {
    let dist = gaussian(this.popMean, this.popVar);
    if (dist.cdf(this.population) > .8) {
      this.isCity = true;
    }
    this.isCity = false;
  }

}


module.exports = Tile;
