var garden,rabbit, apple, orangeLeaf;
var gardenImg,rabbitImg, appleImg, orangeLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  orangeLeafImg = loadImage("orangeleaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.addImage(rabbitImg);
rabbit.scale =0.09;
}


function draw() {
  background(180);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApples();
  spawnOrangeLeaf();

  rabbit.x = mouseX;

  drawSprites();
}


function createApples()
{
  // write your code here 
  apple=createSprite(random(50,150),40,10,10);
  appleImg = loadImage(apple.png);
  apple.scale=0.4;
  apple.velocity.Y= 4; 

}

function createOrangeLeaf()
{
  // write your code here 
  orangeLeaf=createSprite(random(50,150),40,10,10);
  orangeLeaf = loadImage(orangeleaf.png);
  orangeLeaf.scale=0.4;
  orangeLeaf.velocity.Y= 4; 
}

var select_sprites=math.round(random(1,2));

if(frameCount%80 === 0)
{
  if(select_sprites == 1)
  {
    createApples()
  }
  if(select_sprites == 2)
  {
    createOrangeLeaf()
  }
}