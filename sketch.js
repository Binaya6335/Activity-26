const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball;
var ball1;
var ball2;
var ball3;
var ball4;
var con;

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true		
	}

	var ball_options = {
		restitution: 0.95,
	  }

	roof = Bodies.rectangle(600,50,1200,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(450,300,20,ball_options);
	World.add(world,ball);
	ball1 = Bodies.circle(490,300,20,ball_options);
	World.add(world,ball1);
	ball2 = Bodies.circle(530,300,20,ball_options);
	World.add(world,ball2);
	ball3 = Bodies.circle(570,300,20,ball_options);
	World.add(world,ball3);
	ball4 = Bodies.circle(610,300,20,ball_options);
	World.add(world,ball4);

	con=Matter.Constraint.create({
		pointA : {x:450,y:50},
		bodyB : ball,
		pointB: {x:0,y:0},
		length:200,
		stifness:0.01
	 })
	 World.add(world,con);

	 con1=Matter.Constraint.create({
		pointA : {x:490,y:50},
		bodyB : ball1,
		pointB: {x:0,y:0},
		length:200,
		stifness:0.01
	 })
	 World.add(world,con1);

	 con2=Matter.Constraint.create({
		pointA : {x:530,y:50},
		bodyB : ball2,
		pointB: {x:0,y:0},
		length:200,
		stifness:0.01
	 })
	 World.add(world,con2);

	 con3=Matter.Constraint.create({
		pointA : {x:570,y:50},
		bodyB : ball3,
		pointB: {x:0,y:0},
		length:200,
		stifness:0.01
	 })
	 World.add(world,con3);

	 con4=Matter.Constraint.create({
		pointA : {x:610,y:50},
		bodyB : ball4,
		pointB: {x:0,y:0},
		length:200,
		stifness:0.01
	 })
	 World.add(world,con4);

  }

function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	background("turquoise");
	Engine.update(engine);
   rect(roof.position.x,roof.position.y,400,20)
   ellipse(ball.position.x,ball.position.y,20);
   ellipse(ball1.position.x,ball1.position.y,20);
   ellipse(ball2.position.x,ball2.position.y,20);
   ellipse(ball3.position.x,ball3.position.y,20);
   ellipse(ball4.position.x,ball4.position.y,20);

   strokeWeight(2);
   stroke(255);
   line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
   line(con1.pointA.x,con.pointA.y,ball1.position.x,ball1.position.y);
   line(con2.pointA.x,con.pointA.y,ball2.position.x,ball2.position.y);
   line(con3.pointA.x,con.pointA.y,ball3.position.x,ball3.position.y);
   line(con4.pointA.x,con.pointA.y,ball4.position.x,ball4.position.y);
  }

  function keyPressed() {
  if(keyCode==UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0});
  }
}