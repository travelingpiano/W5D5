
function MovingObject(pos,vel,radius,color){
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0],this.pos[1],this.radius,0,Math.PI*2,true);
  ctx.strokeStyle = "red";
  ctx.stroke();

};

MovingObject.prototype.move = function(){
  this.pos += this.vel;
};

module.exports = MovingObject;
