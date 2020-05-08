class obsGround{
	constructor(){
		this.size = 50
		this.x = width;
		this.y = height - this.size;
		this.breakable = false;
		this.c = color(140,140,140);
	}
	move(){
		this.x -= 10;
	}
	setBreakable(){
		this.breakable = true;
	}
	show(){
		if (this.breakable){
			this.c = color(180,30,30);
			this.size = 75;
			this.y = height - this.size;
		}
	fill(this.c);
	rect(this.x,this.y,this.size,this.size);
	}
}