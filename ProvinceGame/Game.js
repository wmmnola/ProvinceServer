class Game {
  /**
   * Creates a new Game object
   *
   * @param {Integer} size the sidelength of the game board
   */
  constructor(size) {
      this.players = [];
      this.humanPlayers = [];
      this.gameSize = size;
      this.gameBoard = new Board(this.gameSize);
    }
    /**
     * Adds a new AI player to the game
     *
     * @param {AiPlayer} player Ai to be added to the board
     */
  addAiPlayer(player) {
    this.players.push(player);
  }
}
