
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var ground;

function setup()
{
  createCanvas(400,400);
 engine=Engine.create();
 world= engine.world;
 var ballOption= {
   restitution:2,
   frictionAir:0.01
 }
 ball= Bodies.circle(100,10,20,ballOption);
 World.add(world,ball)
 var groundOption= {
   isStatic:false
 }
ground = Bodies.rectangle(200,390,400,20,groundOption);
 World.add(world,ground)
}

function draw() 
{
  background(51);
  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,20);
  push()
  rectMode(CENTER)
  fill("green")
  rect(ground.position.x,ground.position.y,400,20)
  pop()
}

