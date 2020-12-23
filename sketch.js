
var fixedrect,movingrect;


function setup() {
  createCanvas(1200,800);
 
  //if you want to make them bounce off verticaly so x position will same and y will be different.
  //if you want to make them bounce off horizontaly so y position will same and x will be different.
 fixedrect = createSprite(100,100,50,50);
 movingrect = createSprite(800,100,50,50);
 
 movingrect.shapeColor = "orange";
 fixedrect.shapeColor = "orange";
 
//give x velocity when you want them to bounce off horizontaly.
//give y velocity when you want them to bounce off verticaly.
 fixedrect.velocityX = 5;
 movingrect.velocityX = -5;

}

function draw() {
  background(0);  
    
  //this code is for making them bounce off horizontaly.
  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
  fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 ) 
     {
         movingrect.velocityX = movingrect.velocityX*(-1);
         fixedrect.velocityX = fixedrect.velocityX*(-1);   
        
     }
     

      //this code is for making them bounce off verticaly.
      if(movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
        fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){

    
      movingrect.velocityY = movingrect.velocityY*(-1);
      fixedrect.velocityY = fixedrect.velocityY*(-1);   
     } 



  
  
  
  
  drawSprites();
}