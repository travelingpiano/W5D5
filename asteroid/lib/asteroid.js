let Util = require("./util.js");
let MovingObject = require("./moving_object.js");
function Asteroid(pos) {
  this.COLOR = "grey";
  this.RADIUS = "25";
  this.vel = randomVec(20);
  this.pos = pos;
  MovingObject.call(this.pos,this.vel,this.RADIUS, this.COLOR);
}
Util.inherits(Asteroid,MovingObject);
// Return a randomly oriented vector with the given length.
let randomVec = function(length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
};

let ast1 = new Asteroid([0,1]);
ast1.move();
