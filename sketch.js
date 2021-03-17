var cash,cashImg,cashGroup;
var monster1,monster1Img,monster1Group;
var monster2,monster2Img,monster2Group;
var life1,life2,life3,life4,lifeImg,lives;
var boy,boy_Animation;
var safeZone,safeZoneImg,safeZoneGroup;
var track,trackImg;
var hp=200;
var score=0;
var gameState=PLAY;
var PLAY=1
var END=0;

function preload(){

  trackImg=loadImage("track.png");
  boyImg=loadImage("bike1.png");
  safeZoneImg=loadImage("sh.png");
  monster1Img=loadImage("Monster-01.png");
  monster2Img=loadImage("sword.png");
  cashImg=loadImage("cash.png");

}
function setup() {
  createCanvas(displayWidth-10,displayHeight-120);


track=createSprite(630,300)
track.addImage(trackImg);
track.scale=1.9;
track.velocityY = 6;


boy = createSprite(640,450,20,20);
boy.addImage(boyImg);
boy.scale=0.2;

monster1Group=new Group();
monster2Group=new Group();
cashGroup=new Group();
safeZoneGroup=new Group();
}

function draw() {
  background(255);

  if(track.y>600){
    track.y=height/2
     }
    
  if(keyDown("RIGHT_ARROW")){
    boy.x=boy.x+8;
  }

  if(keyDown("LEFT_ARROW")){
    boy.x=boy.x-8;
    }

  if(cashGroup.isTouching(boy)){
    cashGroup.destroyEach();
    score=score+20;
  }
  if(monster1Group.isTouching(boy)){
    monster1Group.destroyEach();
    score=score-10;
    hp=hp-20;
  }
  if(monster2Group.isTouching(boy)){
    monster2Group.destroyEach();
    score=score-10;
    hp=hp-20;
  }
  if(safeZoneGroup.isTouching(boy)){
    safeZoneGroup.destroyEach();
    hp=hp+60;
  }

spawnMonster1();
spawnMonster2();
spawnCash();
spawnsafeZone();
  
 
  drawSprites();
  fill("black");
  textSize(28);
  text("Score: "+ score,1000,50);

  fill("black");
  textSize(28);
  text("HP = "+ hp,1000,100);
  


}
function spawnMonster1 (){
if(frameCount%300===0){
  monster1=createSprite(Math.round(random(100,1000),40,10,10));
  monster1.velocityY=6;
  monster1.addImage(monster1Img);
  monster1.scale=0.07;
  monster1.lifetime=200;

  monster1Group.add(monster1);
  
}
}

function spawnMonster2 (){
  if(frameCount%350===0){
    monster2=createSprite(Math.round(random(100,1000),40,10,10));
    monster2.velocityY=8;
    monster2.addImage(monster2Img);
    monster2.scale=0.15;
    monster2.lifetime=200;
  
    monster2Group.add(monster2);
    
  }
  }
  function spawnCash(){
    if(frameCount%200===0){
      cash=createSprite(Math.round(random(200,900),40,10,10));
      cash.velocityY=6;
      cash.addImage(cashImg);
      cash.scale=0.15;
      cash.lifetime=200;
    
      cashGroup.add(cash);
      
    }
    }

    function spawnsafeZone(){
      if(frameCount===800){
        safeZone=createSprite(650,100,500,250);
        safeZone.shapeColor="cyan";
        safeZone.addImage(safeZoneImg);
        safeZone.scale=0.9;
        safeZone.velocityY=6;
        safeZone.lifetime=200;
        safeZoneGroup.add(safeZone);
  
  }
  else if(frameCount===1600){
    safeZone=createSprite(650,100,500,250);
    safeZone.shapeColor="cyan";
    safeZone.addImage(safeZoneImg)
    safeZone.scale=0.3;
    safeZone.velocityY=6;
    safeZone.lifetime=200;

    safeZoneGroup.add(safeZone);
  }
    }