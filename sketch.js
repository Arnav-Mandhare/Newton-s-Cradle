
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;
var chain1;
var chain2;
var chain3;
var chain4;
var chain5;




function preload()
{
	
}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper1=new Paper(500,450,70);
	paper2=new Paper(570,450,70);
	paper3=new Paper(640,450,70);
	paper4=new Paper(710,450,70);
	paper5=new Paper(780,450,70);
	groundObject=new Ground(630,180,340,20);
	
	chain1 = new Chain(paper1.body,groundObject.body)
	chain2 = new Chain(paper2.body,groundObject.body)
	chain3 = new Chain(paper3.body,groundObject.body)
    chain4 = new Chain(paper4.body,groundObject.body)
	chain5 = new Chain(paper5.body,groundObject.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display(); 
  groundObject.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
}




