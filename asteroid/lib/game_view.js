let Game = require("./game.js");

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function () {
  setInterval(this.game.moveObjects(), 20);
  setInterval(this.game.draw(), 20);
};
