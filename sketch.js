
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var dustbin,ground,paper,paperImg,dustbinImg,box1;	
var box2,box3;
var world;

function preload(){
	paperImg=loadImage("paper.png");
	dustbinImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	box1 = new Dustbin(1100,495,150,15);
	box2 = new Dustbin(1185,420,15,170);
	box3 = new Dustbin(1015,420,15,170);
	ground = new Ground(00,550,1400,30);
	paper = new Paper(200,300,40);
	
	Engine.run(engine);
  
}


function draw() {
  background("grey");
  image(dustbinImg,1000,330,200,200);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  
  
}
function keyPressed(){
	if(keyCode===32){
 Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-110});
	}
}
