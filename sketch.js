var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieimg, zombiegroup;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
 zombieimg = loadImage("assets/zombie.png");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //Añadir la imagen de fondo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
zombiegroup = createGroup();

//Crear el sprite del jugador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
 
  player.debug = true

    
   

   
   
   player.setCollider("rectangle",0,0,300,300)
  

}

function draw() {
  background(0); 




  //Mover al jugador arriba y abajo y hacer que el juego móvil sea compatible de forma táctil.
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//Liberar las balas y cambiar la imagen del tirador a la posición de disparo cuando la barra espaciadora se presiona.
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//El jugador regresa a la imagen de posición original una vez que dejamos de presionar la barra de espacio.
else if(keyDown("space")){
 
  player.addImage(shooterImg)


}
if(zombiegroup.isTouching(player)){
for(var i=0; i<zombiegroup.length; i++){
  if(zombiegroup[i].isTouching(player)){
    zombiegroup[i].destroy();
  }
}
}
enemy();
drawSprites();

}
function enemy(){
if(frameCount%50==0){


 
  zombie = createSprite(random(500,1100), random(100,500), 40, 40);
  zombie.addImage(zombieimg);
  zombie.scale = 0.1
  zombie.velocityX = -3
  zombiegroup.add(zombie)
}


}