const start_money = 100;


class Domain {
  constructor(name) {
    this.name = name;
    this.tiles = [];
    this.money = start_money;
    this.taxEff = 1;
  }
  pickStart(board) {
    thist.tiles.push(board.getCityTile());
  }
  turnPhase(board) {
    for (let tile of this.tiles) {
      this.money += this.taxEff * tile.collectTaxes();
    }
  }

}

this.exports = Domain;
