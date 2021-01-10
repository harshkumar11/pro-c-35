//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogsitting,doghappy;
function preload()
{
  //load images here
  dogsitting.loadImage("dog(2).png")
  //dogsitting.loadImage("happydog.png")
  
}

function setup() {
  createCanvas(500, 500);
  dogsitting,createSprite(250,250,10,10)
  
}


function draw() {  

if(keyWentDown(LEFT_ARROW)){
  writestock(foodS);
  dog.addImage(dogsitting)
}
else if(keyWentDown(RIGHT_ARROW)){
  writestock(foodS);
  dog.addImage(dogsitting)
}
else if(keyWentDown(UP_ARROW)){
  writestock(foodS);
  dog.addImage(dogsitting)
}
else if(keyWentDown(DOWN_ARROW)){
  writestock(foodS);
  dog.addImage(dogsitting)
}
  drawSprites();
  //add styles here

}
function writestock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
 Food:x
  })
}
function readstock(data){
  foodS = data.val();
}

function showError(){
  console.log("Error in writing to the database");
}


