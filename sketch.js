const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var ground1

function setup() {
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
}

function draw() {
  background(0); 
  ground.display();
}