const start_money = 100;


class Domain {
  /**
   * Constructs a new domain object. Intial tax eff is 1, intial money is 500
   *
   * @param {String} name the name of the Domain
   */
  constructor(name) {
      this.name = name;
      this.tiles = [];
      this.money = start_money;
      this.taxEff = 1;
    }
    /**
     * Picks a starting tile with a city
     *
     * @param {Board} board the game board
     */
  pickStart(board) {
      thist.tiles.push(board.getCityTile());
    }
    /**
     * Updates all the dynamic variables for each turn
     *
     * @param {Board} board the game board
     */
  turnPhase(board) {
    for (let tile of this.tiles) {
      this.money += this.taxEff * tile.collectTaxes();
    }
  }

}

this.exports = Domain;
