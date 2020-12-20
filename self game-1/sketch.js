var leprechaunImage , leprechaun , soilImage , soil , bgImage , bg;

function setup() {
  createCanvas(displayWidth,displayHeight);
  leprechaun = createSprite(displayWidth-1450,displayHeight-200, 50, 50);
  leprechaun.addImage(leprechaunImage);
  leprechaun.scale = 0.3;
}

function preload(){
 bgImage = loadImage("images/bgImage.png");
 leprechaunImage = loadImage("images/player.png");
 soilImage = loadImage("images/ground/sprite_0.png");
}

function draw() {
  background(bgImage);  
  drawSprites();
}