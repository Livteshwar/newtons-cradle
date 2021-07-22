const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob_op
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(320,100,230,20,roof_options);
    World.add(world,roof);

	bob_op={
		restituition:0.8
	}

	bob3 = Bodies.circle(400,200,20,bob_op);
    World.add(world,bob3);

	bob2 = Bodies.circle(360,200,20,bob_op);
    World.add(world,bob2);

	bob1 = Bodies.circle(320,200,20,bob_op);
    World.add(world,bob1);

	bob4 = Bodies.circle(280,200,20,bob_op);
    World.add(world,bob4);

	bob5 = Bodies.circle(240,200,20,bob_op);
    World.add(world,bob5);
    
    rope3 = Constraint.create({
        pointA:{x:400,y:100},
        bodyB:bob3,
        pointB:{x:0,y:0},
        length:200,
        stiffness:0.1
      });
	  World.add(world,rope3);

	rope2 = Constraint.create({
        pointA:{x:360,y:100},
        bodyB:bob2,
        pointB:{x:0,y:0},
        length:200,
        stiffness:0.1
      });
	  World.add(world,rope2);

	rope1 = Constraint.create({
        pointA:{x:320,y:100},
        bodyB:bob1,
        pointB:{x:0,y:0},
        length:200,
        stiffness:0.1
      });
	  World.add(world,rope1);

	rope4 = Constraint.create({
        pointA:{x:280,y:100},
        bodyB:bob4,
        pointB:{x:0,y:0},
        length:200,
        stiffness:0.1
      });
	  World.add(world,rope4);

	rope5 = Constraint.create({
        pointA:{x:240,y:100},
        bodyB:bob5,
        pointB:{x:0,y:0},
        length:200,
        stiffness:0.1
      });
	  World.add(world,rope5);

	Engine.run(engine);
	
    rectMode(CENTER);
    ellipseMode(RADIUS);
}

function draw() {
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  push();
  strokeWeight(2);
  stroke(255);
  line(rope3.pointA.x,rope3.pointA.y,bob3.position.x,bob3.position.y);
  line(rope2.pointA.x,rope2.pointA.y,bob2.position.x,bob2.position.y);
  line(rope1.pointA.x,rope1.pointA.y,bob1.position.x,bob1.position.y);
  line(rope4.pointA.x,rope4.pointA.y,bob4.position.x,bob4.position.y);
  line(rope5.pointA.x,rope5.pointA.y,bob5.position.x,bob5.position.y);
  pop();
  
  //create ellipse shape for multiple bobs here
  ellipse(bob3.position.x,bob3.position.y,20,20);
  ellipse(bob2.position.x,bob2.position.y,20,20);
  ellipse(bob1.position.x,bob1.position.y,20,20);
  ellipse(bob4.position.x,bob4.position.y,20,20);
  ellipse(bob5.position.x,bob5.position.y,20,20);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==LEFT_ARROW)
    {
      Matter.Body.applyForce(bob5,{x:0,y:0},{x:-0.08,y:0});
    }
}