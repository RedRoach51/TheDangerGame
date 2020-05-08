let character;
let groundObstacles;
let airObstacles;
let obstacle;
//let charImg;
// backImg is up to intepretation, thinking about "dungeon" or "castle" to fit with obstacles
// obsImg# will be each obstacle's image

//function preload(){
//	charImg = loadImage('Character.png');
//}
function setup() {
  createCanvas(800, 400);
  character = new Character();
  groundObstacles = new Array();
  airObstacles = new Array();
  counter = 0;
  score = 0;
  wait = false;
  time = 0;
  textSize(16);
  textAlign(CENTER,CENTER);



}

function keyPressed(){
	if (key == ' '){
		character.jump();
	}
	if (key == "s"){
		character.fall();
	}
	if (key == "d"){
		character.dash();
	}

}

function dieMessage(){
	textSize(32);
	fill(0,0,0);
	text("You Died", width / 2, 50);
}

function die(){
	
	groundObstacles = new Array();
	airObstacles = new Array();
	character = new Character();
	textSize(16);
	counter = 30;	
	wait = true;

}

/*function obstacle(obstacles){
	for (let o of obstacles){
		o.move();
		o.show();
		if character.hit(o){
			if (o.breakable && character.xVelocity > 0){
				obstacles.shift();
			}
		}
	}
} */

function draw() {
	if (wait){
		time = millis();
		while (millis() < time + 3000){

		}
		score = 0;
		wait = false;
	}

  background(220);
  character.move();
  character.show();

  
  if (random(1) < .05 && counter == 0) {
  	obstacle = new obsGround();
  	if (random(1) < .30){
  		obstacle.setBreakable();
  	}
  	groundObstacles.push(obstacle);
  	counter = 20;
  }

  if (random(1) < .05 && counter == 0) {
  	obstacle = new obsAir();
  	if (random(1) < .30){
  		obstacle.setBreakable();
  	}
  	airObstacles.push(obstacle);
  	counter = 20;
  }

  if (counter > 0){
  	counter -= 1;
  }
  console.log("Hello");
  for (let o of groundObstacles){
		o.move();
		o.show();
//		character.colorize();
		if (o.x < 0-o.size){
			groundObstacles.shift();
			score +=1;
		}
		if (character.hit(o)){
			if (o.breakable && character.xVelocity > 0){
				groundObstacles.shift();
				score += 1;
			}
			else{
				dieMessage();
				die();
			}
		}
	}

	for (let o of airObstacles){
		o.move();
		o.show();
//		character.colorize();
		if (o.x < 0-o.size){
			airObstacles.shift();
			score += 1;
		}
		if (character.hit(o)){
			if (o.breakable && character.xVelocity > 0){
				airObstacles.shift();
				score +=1;
			}
			else{
				dieMessage();
				die();
			}
		}
	}

  fill(0,0,0);
  text('score: ' + score, width - 40, 20);


 // obstacle(groundObstacles);
}