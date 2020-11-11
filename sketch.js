const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var balls;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var log1,log2,log3;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  
  log1 = new Log(110,400,15,100);
  log2 = new Log(205,400,200,15);
  log3 = new Log(305,400,15,100);

  block1 = new Block(100,100);
  block2 = new Block(300,100);
  block3 = new Block(50,150);
  block3 = new Block(200,150);
  block4 = new Block(350,150);
  block5 = new Block(100,200);
  block6 = new Block(300,200);
  block7 = new Block(50,250);
  block8 = new Block(200,250);
  block9 = new Block(350,250);
  block10 = new Block(200,200);
  



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  balls.display();

  log1.display();
  log2.display();
  log3.display();

  drawSprites();
 
}



