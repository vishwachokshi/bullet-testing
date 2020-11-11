var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,25,15);
  bullet.velocityX = speed;
  bullet.shapeColor = color ("white");
  wall = createSprite(1200,200,thickness,height/2);
  
}

function draw() {
  background(0);  
 if ( hasColided(bullet,wall))
 {
  
   bullet.velocityX=0;
   var deformatio=0.5 * weight * speed * speed/thickness * thickness * thickness;
   if(deformation < 10)
   {
     wall.shapeColor = color (255,0,0);
   }
   if(deformation > 10)
   {
     wall.shapeColor = color (0,255,0);
   }
   
 }
 wall.shapeColor = (80,80,80);
 wall = static;
  drawSprites();
}

function hasColided (bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge = wallLeftEdge ){
    return true;
  }
  return false;
}