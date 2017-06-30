let Asteroid = require ("./asteroid.js");

function Game() {
  const DIM_X = 1000;
  const DIM_Y = 1000;
  const NUM_ASTEROIDS = 5;
  this.asteroids = this.addAsteroids();
}

Game.prototype.randomPosition = function(){
  let positionX = Math.floor(Math.random() * (Game.DIM_X));
  let positionY = Math.floor(Math.random() * (Game.DIM_Y));
  return [positionX, positionY];
};

Game.prototype.addAsteroids = function(){
  this.asteroids = [];

  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid(this.randomPosition()));
  }

  return this.asteroids;
};

Game.prototype.draw = function(ctx){
  ctx.clearRect();
  this.asteroids.forEach ((asteroid) => {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach ((asteroid) => {
    asteroid.move();
  });
};
