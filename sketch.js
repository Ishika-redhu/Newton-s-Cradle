const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball,ball1,ball3,ball4
var roof;
var string1,string2,string3,string4,string5
//Create multiple bobs, mulitple ropes varibale here




function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  

	var roof_options={
		isStatic:true			
	}
	
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
    
	var ball_options = {
		isStatic: false,
		'restitution': 1,
		"friction":1.0,
		'density':1.0
	   }
		
	
	ball = Bodies.circle(400,210,20,ball_options);
	  World.add(world,ball);
	  string1 = Constraint.create({
	  pointA:{x:400,y:110},
	  pointB:{x:0,y:0},
	  bodyB:ball ,
	  length:150,
	  stiffness:0.1
	  
	  })
	  var ball_options1 = {
		isStatic: false,
		'restitution': 1,
		"friction":1.0,
		'density':1.0
	   }
		
	
	ball1 = Bodies.circle(380,210,20,ball_options1);
	  World.add(world,ball1);
	  string2 = Constraint.create({
	  pointA:{x:360,y:110},
	  pointB:{x:0,y:0},
	  bodyB:ball1 ,
	  length:150,
	  stiffness:0.1
	  
	  })
	  var ball_options2 = {
		isStatic: false,
		'restitution': 1,
		"friction":1.0,
		'density':1.0
	   }
		
	
	ball2 = Bodies.circle(360,210,20,ball_options2);
	  World.add(world,ball2);
	  string3 = Constraint.create({
	  pointA:{x:320,y:110},
	  pointB:{x:0,y:0},
	  bodyB:ball2 ,
	  length:150,
	  stiffness:0.1
	  
	  })
	  var ball_options3 = {
		isStatic: false,
		'restitution': 1,
		"friction":1.0,
		'density':1.0
	   }
		
	
	ball3 = Bodies.circle(425,210,20,ball_options3);
	  World.add(world,ball3);
	  string4 = Constraint.create({
	  pointA:{x:440,y:110},
	  pointB:{x:0,y:0},
	  bodyB:ball3 ,
	  length:150,
	  stiffness:0.1
	  
	  })
	  var ball_options4 = {
		isStatic: false,
		'restitution': 1,
		"friction":1.0,
		'density':1.0
	   }
		
	
	ball4 = Bodies.circle(450,210,20,ball_options4);
	  World.add(world,ball4);
	  string5 = Constraint.create({
	  pointA:{x:480,y:110},
	  pointB:{x:0,y:0},
	  bodyB:ball4 ,
	  length:150,
	  stiffness:0.1
	  
	  })
	  World.add(world,string1)
	  World.add(world,string2)
	  World.add(world,string3)
	  World.add(world,string4)
	  World.add(world,string5)
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call  display() to show ropes here
 
  line(string1.pointA.x,string1.pointA.y,ball.position.x,ball.position.y)
  ellipse(ball.position.x,ball.position.y,20);
 
  line(string2.pointA.x,string2.pointA.y,ball1.position.x,ball1.position.y)
  ellipse(ball1.position.x,ball1.position.y,20);
 
  line(string3.pointA.x,string3.pointA.y,ball2.position.x,ball2.position.y)
  ellipse(ball2.position.x,ball2.position.y,20);
 
  line(string4.pointA.x,string4.pointA.y,ball3.position.x,ball3.position.y)
  ellipse(ball3.position.x,ball3.position.y,20);
 
  line(string5.pointA.x,string5.pointA.y,ball4.position.x,ball4.position.y)
  ellipse(ball4.position.x,ball4.position.y,20);
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function vForce()
{
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:-30,y:155});
}
  
 