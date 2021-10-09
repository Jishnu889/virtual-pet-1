//Create variables here
var dogimg
var dog
var dogimg1
var database
var foodS
function preload()
{
	//load images here
  dogimg=loadImage("images/dogimg.png");
  dogimg1=loadImage("images/dogimg1.png");
}

function setup() {
  //database=firebase.database();
	createCanvas(800, 700);
  dog=createSprite(250,300,150,150);
  dog.addImage("standing", dogimg);
  dog.scale=0.15;
}


function draw() {  
  background("white")
  drawSprites();
  //add styles here
  text("Pres up arrow key to feed the dog",130,10)
  text(mouseX+","+mouseY,mouseX,mouseY);
}

function readStock(data)
{

}


