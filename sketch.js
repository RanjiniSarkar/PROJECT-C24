const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2;
var cannonhead;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,360,170,50);
    box2 = new Box(100,380,170,30);
    cannonhead=new Head(100,370);
    ground = new Ground(600,height,1200,20);
    log = new Log(200,310,120,PI/2);

  
}

function draw(){
    background(0);
    Engine.update(engine);
    log.display();
    cannonhead.display();
    ground.display();
    box1.display();
    box2.display();
    

  
}