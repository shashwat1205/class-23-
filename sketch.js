 const Engine=Matter.Engine
 const World = Matter.World
 const Bodies = Matter.Bodies
 var engine, world,ground
 var box,box2
 
 function setup() {
  createCanvas(800,400);
 engine = Engine.create()
  world = engine.world
  var options ={
    isStatic:true
  }
  ground = Bodies.rectangle(400,390,800,10,options);
  World.add(world,ground);

  box =new Box (200,200,50,50);
  box2 = new Box(225,100,50,50);
 

}

 function draw() {
  background(0); 
  Engine.update(engine)
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,800,10);

  box.display();
  box2.display();
 
}