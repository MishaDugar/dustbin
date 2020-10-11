
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var   ball ;
var   bucket1;
var   bucket2;
var   bucket3;
var   ground ;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ball = new Ball(100,200,50,50);
	bucket1 = new Bucket(100,200,50,50);
	bucket2 = new Bucket(100,200,50,50);
	bucket3 = new Bucket(100,200,50,50);
	ground  = new Ground(100,200,50,50);

}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();   
  bucket1.display();
  bucket2.display();
  bucket3.display();
  ground.display();

  drawSprites();
 
}



