const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine;
var box1,box2,box3,box4;
var ground;
var pig1,pig2;
var log1,log2;
var bird1



function setup() {
  createCanvas(1200,400);
  engine=Engine.create(); //by default a world is created
  world=engine.world;
  
  ground= new Ground(600,400,1200,10) ;
  box1=new Box(800,300,50,50);
  box2=new Box(1000,300,50,50);
  pig1=new Pig(900,300)
  log1=new Log(900,250,280,PI/2)

  box3=new Box(800,200,50,50);
  box4=new Box(1000,200,50,50);
  pig2=new Pig(900,200)
  log2=new Log(900,150,280,PI/2)

  log3=new Log(850,50,115,PI/7)
  log4=new Log(950,50,115,-PI/7)

  bird1=new Bird(50,40)

  box5=new Box(900,100,50,50);
}

function draw() {
  background(0); 
  Engine.update(engine) ;

  box1.display();
  box2.display();
  ground.display();
  log1.display();
bird1.display();
  pig2.display();
  box3.display();
  box4.display();
  box5.display();
  log2.display();
  log3.display();
  log4.display();
  pig1.display();
}