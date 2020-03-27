const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(2000,900);
    engine = Engine.create();
    world = engine.world;
    box18 = new Box(1018,5,200,100);
    box17 = new Box(1018,5,300,100);
    box16 = new Box(1018,5,400,100);
    box1 = new Box(100,300,50,800);
    box2 = new Box(180,300,100,750);
    box3 = new Box(285,100,100,700);
    box4 = new Box(390,100,100,650);
    box5 = new Box(485,100,100,600);
    box6 = new Box(610,100,100,550);
      box7 = new Box(740,100,150,500);
      box8 = new Box(1018,100,400,500);
      box9 = new Box(1290,100,150,500);
    box10 = new Box(1418,100,100,550);
    box11 = new Box(1540,100,100,600);
    box12 = new Box(1642,100,100,650);
    box13 = new Box(1745,100,100,700);
    box14 = new Box(1847,100,100,750);
    box15 = new Box(1922,100,50,800);
    
    ground = new Ground(200,height,3600,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box18.display();
    box17.display();
    box16.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    ground.display();
}