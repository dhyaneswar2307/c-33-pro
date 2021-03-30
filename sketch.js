const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg="sprites/sunrise.jpg";
var backgroundImg;

function preload(){
  getBackgroundImg()
}

function setup() {
 var canavas=createCanvas(1200,700);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;
}

function draw() {
  background(255,255,255);  
  if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    fill("black")
    textSize(30)
   if(hour>=12){
      text("Time : "+ hour%12 + " PM", 50,100); }
   else if(hour==0){ 
     text("Time : 12 AM",100,100); }
     else{ text("Time : "+ hour%12 + " AM", 50,100); } }


  drawSprites();

    

    async function getBackgroundImg(){
      var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
      var responseJSON=await response.json();
      
      var datetime=responseJSON.datetime;
      var hour=datetime.slice(11,13);
      
      if(hour>=06 && hour<=19){
          bg="sprites/sunrise.jpg";
      }
      else{
          bg="sprites/sunset.webp";
      }
      backgroundImage=loadImage(bg);
     // backgroundImage=loadImage(bg);
//console.log(backgroundImg);
}