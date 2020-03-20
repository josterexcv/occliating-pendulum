const Engine = Matter.Engine;
const World = Matter.world;
const bodies = Matter.bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder , ball , ground;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic = true
  }
  var holder_options={
    isStatic = true
  }
  ground = Bodies.rectangle(200,330,400,20,ground_opyions)
  world.add(world,ground);

  holder = Bodies.rectangle(200,100,100,10,holder_options);
  world.add(world,holder);

  var ball_options = {
    restitution : 1.1 , 
    density : 1.1
  }
  ball = Bodies.circle(220,200,40,ball_options);
  world.add (world,ball)

  var options = {
    bodyA : ball,
    bodyB : holder,
    stiffness : 0.004,
    length : 100
  }
  var string = Constraint.create(options);
  world.add(world,string);

  fill (255)

}

function draw() {
  background(0); 
  Engine.update (engine);


  text ("press space (32) to ocillate the pendulum to left and right direction with mouse",10,20);
  text("press the enter key to stop the pendullum from ocllating",100,50);

  fill ("blue");
  rectMode(CENTER);
  rect(holder.position.x,holder.position.y,200,20);

  fill(0)
  rectMode(CENTER);
  rect(ground.position.x.ground.position.y,400,20);

  fill("green");
  ellipseMode(RADIUS);
  ellipseMode(ball.position.x.ball.position.y,40);


  strokeweight (9);
  stroke("yellow");

  line(ball.position.x,holder.position.x,holder.position.y)



  if(keyCode === 32){
    ball.positon.y = mouuseY;
    ball.position.x = mouseX;
  }
  else if (keyCode === ENTER){
    ball.position.x = 200;

  }
  ball.display();
  holder.display();
  ground.display();
  string.display();
}