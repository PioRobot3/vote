var ship,ship_moving;
var sea,seaImage;



function preload(){
  seaImage = loadImage("sea.png");
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400)
  sea=createSprite(200,180,400,20);
  sea.addImage(seaImage); 
  sea.velocityX = -4;
  sea.scale=0.3;
  ship = createSprite(140,230,20,50);
  ship.addAnimation("animation", ship_moving);
  ship.scale=0.3;


  
}
 
function draw() {
  background("white");
    if (sea.x < 0){
    sea.x = sea.width/8;
  }
  drawSprites();
}