class obsAir{
	constructor(){
		this.size = 50
		this.x = width;
		this.y = 230 - this.size;
		this.breakable = false;
		this.c = color(100,100,160);
	}
	move(){
		this.x -= 10;
	}
	setBreakable(){
		this.breakable = true;
	}
	show(){
		if (this.breakable){
			this.c = color(180,30,100);
			this.size = 75;
			this.y = 300 - this.size;
		}
	fill(this.c);
	rect(this.x,this.y,this.size,this.size);
	}
}