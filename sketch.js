const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7;
var rod,rod1,rod2,rod3,rod4,rod5,rod6,rod7;
var string1,string2,string4,string5,string6,string7; 
function preload() {}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

	rod = new Rod(400,70,730,20);
	rod1 = new Rod (120,70,10,10);
	rod2 = new Rod (200,70,10,10);
	rod3 = new Rod (280,70,10,10);
	rod4 = new Rod (360,70,10,10);
	rod5 = new Rod (440,70,10,10);
	rod6 = new Rod (520,70,10,10);
	rod7 = new Rod (600,70,10,10);

	ball1= new Ball(120,420);
	ball2= new Ball(200,420);
	ball3= new Ball(280,420);
	ball4= new Ball(360,420);
	ball5= new Ball(440,420);
	ball6= new Ball(520,420);
	ball7= new Ball(600,420);

	string1= new String(ball1.body,rod1.body);
	string2= new String(ball2.body,rod2.body);
	string3= new String(ball3.body,rod3.body);
	string4= new String(ball4.body,rod4.body);
	string5= new String(ball5.body,rod5.body);
	string6= new String(ball6.body,rod6.body);
	string7= new String(ball7.body,rod7.body);

  //  Slingshot= new Slingshot(bird.body,log6.body);
}

function draw(){
    background(70);
    Engine.update(engine);
    strokeWeight(0.5);

	rod.display();

    ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
	ball6.display();
	ball7.display();

	string1.display()
	string2.display()
	string3.display()
	string4.display()
	string5.display()
	string6.display()
	string7.display()

}
