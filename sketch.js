var wall1,wall2,wall3,wall4,wall5,wall6,wall7,player,goal
 
function setup() {
  createCanvas(600,400);
  wall1 = createSprite(85, 1, 25, 200);
  wall2 = createSprite(185,95,200,25);
  wall3 = createSprite(185,200,200,25);
  wall4 = createSprite(280,260,25,100);
  wall5 = createSprite(88,300,25,200);
  wall6 = createSprite(185,95,200,25);
  
  player=createSprite(28,25,25,25);
  
  goal=createSprite(230,240,25,25);
  
  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}
 
function draw() {
  background(0,0,0);  
  if (keyDown("UP_ARROW")) {
    player.velocityX=0;
    player.velocityY=-4;
  }
  if (keyDown("DOWN_ARROW")) {
    player.velocityX=0;
    player.velocityY=4;
  }
    if (keyDown("RIGHT_ARROW")) {
    player.velocityX=4;
    player.velocityY=0;
  }
  if (keyDown("LEFT_ARROW")) {
    player.velocityX=-4;
    player.velocityY=0;

  }
  if (player.isTouching(goal)) {
    player.collide(goal);    
    text("YOU WON!!!", 174, 324);
  }
  player.bounceOff(wall1);
  player.bounceOff(wall2);
   player.bounceOff(wall3);
    player.bounceOff(wall4);
     player.bounceOff(wall5);
      player.bounceOff(wall6);
  drawSprites();
  }
