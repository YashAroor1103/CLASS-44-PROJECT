var gameState = 0;
var playButton;


function setup() {
  createCanvas(displayWidth , displayHeight);

  playButton = new Button();

}

function draw() {
  background("red");  
  if(gameState === 0){
    playButton.display();
    fill("black");
    textSize(40);
    text("1 V 1 FOOTBALL GAME", 600 , 55);

    fill("yellow");
    textSize(25);
    text("> THE RULES OF THE GAME ARE GIVEN BELOW",100,120);
    text("> THIS GAME CONSISTS OF TWO PLAYER",100,150);
    text("> PLAYER TO YOUR LEFT IS YOU (I.E. THE PLAYER)",100,180);
    text("> THE PLAYER TO YOUR RIGHT IS YOUR OPPONENT",100,210);
    text("> YOU CAN MOVE THE PLAYERS WITH THE HELP OF THE 4 ARROW KEYS",100,240);
    text("> THE PLAYER TO SCORE THE FIRST 5 GOALS WINS !!!!",100,270);
  }

  if(gameState === 1){
    background("red");
    drawSprites();
  }
 
}