class Game {
  constructor(size) {
    this.players = [];
    this.humanPlayers = [];
    this.gameSize = size;
    this.gameBoard = new Board(this.gameSize);
  }
  addAiPlayer(player) {
    this.players.push(player);
  }
}
