class Character{
  constructor(){
  	this.size = 50;
    this.x = this.size;
    this.y = height - this.size - 49;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.xGravity = 2.0;
    this.yGravity = 1.0;
    this.c = (255,255,255);
  }
  show(){
  if (this.xVelocity > 0){
    this.c = color(235,235,180);
  }
  else{
    this.c = color(255,255,255);
  }
  fill(this.c);
	rect(this.x,this.y,this.size,this.size);
  }
  jump(){
  	if (this.y == height - this.size){
  		this.yVelocity = -18;
  	}
  }
  fall(){
  	this.yVelocity = 20;
  }
  dash(){
    if (this.x == this.size){
      this.xVelocity = 15;
    }
  }
  move(){
  	this.y += this.yVelocity;
    this.x += this.xVelocity;
  	this.yVelocity += this.yGravity;
    this.xVelocity -= this.xGravity;
    this.x = constrain(this.x, this.size, width);
  	this.y = constrain(this.y, 0, height - this.size)
  }
  colorize(){
    let c = color(0,0,0);
    fill(c);
  }
  hit(obstacle){
    return collideRectRect(this.x,this.y,this.size,this.size,obstacle.x,obstacle.y,obstacle.size,obstacle.size);
  }
}