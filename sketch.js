const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var c_engine, c_world;
var ob1,ball;
function setup() {
  createCanvas(400,400);

  c_engine = Engine.create();
  c_world = c_engine.world;

  var options ={
    isStatic : true
  }
  var balloptions ={
    restitution:3
  }
  
  ob1 = Bodies.rectangle(200,390,400,10, options);
  World.add(c_world, ob1);
  console.log(ob1);
  console.log(ob1.position.x);

  ball = Bodies.circle(150,200,15,balloptions);
  World.add(c_world, ball);

}

function draw() {
  background("black");  

  Engine.update(c_engine);

  rectMode(CENTER);
  rect(ob1.position.x, ob1.position.y , 400 ,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15);
}