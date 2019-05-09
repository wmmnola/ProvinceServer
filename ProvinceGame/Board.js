class Board {
  /**
   * Creates a board object
   * @param {number} tileCnt number of tiles of the sidelength of board
   *
   */
  constructor(tileCnt) {
      let taxMean = 10;
      let taxSTD = 3;
      let popMean = 15;
      let popSTD = 5;
      this.players = [];
      this.humanPlayers = [];
      this.tileCnt = tileCnt;
      this.gameBoard = [...Array(this.tileCnt)].map(e => Array(this.tileCnt));
      for (let x = 0; x < this.tileCnt; x++) {
        for (let y = 0; y < this.tileCnt; y++) {
          this.gameBoard[x][y] = new Cell(x, y, popMean, popSTD, taxMean,
            taxSTD);
        }
      }
    }
    /**
     *
     * Recursive Algorithim which finds a tile with a city.
     * Worst Case is O(n^2), where n is the length of the board
     *
     * @param {number} count how many times this function has been called
     * @return {Tile} tile with a city
     */
  getCityTile(count) {
      let max = this.titleCnt * this.titleCnt;
      let x = Math.floor(Math.random() * board.tileCnt);
      let y = Math.floor(Math.random() * board.tileCnt);
      if (this.getTile(x, y).isCity) return this.getTile(x, y);
      else if (this.count > max) return this.getTile(x, y);
      else return this.getCityTile(count += 1);
    }
    /**
     * Returns a tile from a given x,y in the gameBoard
     *
     * @param {Integer} x
     * @param {Integer} y
     */
  getTile(x, y) {
    return this.gameBoard[x][y]
  }

}

module.exports = Board;
