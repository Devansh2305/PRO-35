//Create variables here
var dogimg, happydogimg, database, foodS, foodStock;
var dog;
                      var foodobject,feed,add,Feedtime,Lastfeed;

function preload()
{
  //load images here
  dogimg=loadImage('images/dogImg.png');
  happydogimg=loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,300,10,10);
  dog.addImage(dogimg);
  dog.scale=0.2;
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
  console.log(foodStock);

                         foodobject=new Food();
                         var dogo = database.ref('Food');
                         dogo.on("value", readStock);
                         feed = createButton("FEED DRAGO")
                         feed.position(500,15)
                         feed.mousePressed(FeedDog)
                         add = createButton("ADD FOOD")
                         add.position(400,15)
                         add.mousePressed(AddFood)                          
}


function draw() {  
  background("blue");
 // if(keyWentDown(UP_ARROW))
 // {
 //   writeStock(foodS);
 //   dog.addImage(happydogimg);
//dog.scale=0.2;
foodobject.display()
  }
  drawSprites();
  fill(255);
  textSize(30);
  text("FoodLeft: "+foodS,100,100);
  //add styles here
   noFill();


function readStock(data)
{
  foodS=data.val();
                  foodobject.updateFoodStock(foodS);
}

function writeStock(x)
{
  if(x<=0){
  x=0;
}
else{
  x=x-1;
}
  database.ref('/').update({Food:x})
}
    function FeedDog(){

  dog.addImage(dogimg2)
  foodobject.updateFoodStock(foodobject.getFoodStock()-1)
   database.ref('/').update({
     Food:foodobject.getFoodStock(),
     FeedTime:hour ()
   })
  }
  