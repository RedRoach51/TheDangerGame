let character;
let charImg;
// backImg is up to intepretation, thinking about "dungeon" or "castle" to fit with obstacles
// obsImg# will be each obstacle's image

function preload(){
	charImg = loadImage('Character.png');
}
function setup() {
  createCanvas(800, 400);
  character = new Character();
}

function keyPressed(){
	if (key == ' '){
		character.jump();
	}
}

function draw() {
  background(220);
  character.show();
  character.fall();
}