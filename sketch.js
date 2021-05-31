const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var Hour;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1400,1000);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
        background(backgroundImg); 

    Engine.update(engine);

    // write code to display time in correct format here
    if(Hour=>13&&Hour<=24){
      var Time=Hour%12;
      textSize(20);
      text("Time: "+Time+" PM",200,50); 
    }
    // else if(Hour=>24&&Hour<=12){
    //         var Time=Hour%12;
    //         textSize(20);
    //         text("Time:"+Time+"AM",100,50);  
    // }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var Api= await fetch("http://worldtimeapi.org/api/ip");
    //change the data in JSON format
    var Api2= await Api.json();
    console.log(Api2);
    // write code slice the datetime
    var dt=Api2.datetime;
    console.log(dt);
 Hour=dt.slice(11,13);
    console.log(Hour);
    // add conditions to change the background images from sunrise to sunset
    if(Hour>=5&&Hour<7){
        backgroundImg=loadImage("sunrise1.png");
     }
    else if(Hour>=7&&Hour<9){
        backgroundImg=loadImage("sunrise3.png");
     }
    else if(Hour>=9&&Hour<11){
        backgroundImg=loadImage("sunrise4.png");
     }
    else if(Hour>=11&&Hour<13){
       backgroundImg=loadImage("sunrise5.png");
    }
    else if(Hour>=13&&Hour<16){
        backgroundImg=loadImage("sunrise6.png");
     }
    else if(Hour>=16&&Hour<18){
        backgroundImg=loadImage("sunrise7.png");
     }  
    else if(Hour>=18&&Hour<19){
        backgroundImg=loadImage("sunrise9.png");
     }
    else if(Hour>=19&&Hour<23){
        backgroundImg=loadImage("sunrise11.png");
     }
    else if(Hour>=23&&Hour<5){
        backgroundImg=loadImage("sunrise12.png");
     }
    //load the image in backgroundImg variable here

}
