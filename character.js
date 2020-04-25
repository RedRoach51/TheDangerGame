class Character{
  constructor(){
  	this.size = 50;
    this.x = this.size;
    this.y = height - this.size;
    this.yVelocity = 0;
    this.yGravity = 1.8;
  }
  show(){
	rect(this.x,this.y,this.size,this.size);
  }
  jump(){
  	this.yVelocity = -20;
  }
  fall(){
  	this.y += this.yVelocity;
  	this.yVelocity += this.yGravity;
  	this.y = constrain(this.y, 0, height - this.size)
  }
}