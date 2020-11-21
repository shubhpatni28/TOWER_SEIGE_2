const Engine = Matter.Engine;
const World = Matter.World;
 //const world = Matter.world;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;

function preload(){

  this.back=loadImage("back.jpg");
}


function setup() {
  createCanvas(1200, 600);
  


	engine = Engine.create();
	world = engine.world;
  ball=new Ball(100,100,40);

  bg=new Ground(800,450,300,10);

  //ROW1
  block1=new bl(710,410,30,40);
  block2=new bl(740,410,30,40);
  block3=new bl (770,410,30,40);
  block4=new bl (800,410,30,40);
  block5=new bl(830,410,30,40);
  block6=new bl(865,410,30,40);

  //ROW2
  block7=new pink(735,377,30,40);
  block8=new pink(765,377,30,40);
  block9=new pink(795,377,30,40);
  block10=new pink(825,377,30,40);
  block11=new pink(855,377,30,40);

  //ROW3
  block12=new blue(760,350,30,40);
  block13=new blue(790,350,30,40);
  block14=new blue(820,350,30,40);


  block16=new bl(890,410,30,40)

  //ROW TOP
   block15=new green(790,290,30,40);

   sling1 =new slingshot(ball.body,{x:200,y:250})



	Engine.run(engine);
  
}


function draw() {
  background(this.back);
	//ground.stroke(0);
  rectMode(CENTER);
  Engine.update(engine);
  
  ball.display();
  bg.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block16.display();
  block15.display();
  sling1.display();

  //keyPressed();

  drawSprites ();
}


function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling1.fly();
}

function keyPressed(){
  if(keyCode===32){
    sling1.attach(ball.body);
  }
}
