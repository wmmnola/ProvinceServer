class AiPlayer extends Player {
  constructor(id) {
    this.id = id;
    super("AI_" + this.id.toString());
  }
}
