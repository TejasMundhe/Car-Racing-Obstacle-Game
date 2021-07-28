class Game {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }


  start() {
    player = new Player(); 
    playerCount = player.getCount();
    background("lightyellow");

    form = new Form();
    form.display();

    car1 = createSprite(200, 350);
    car1.addImage(car1Img);

    car2 = createSprite(500, 350);
    car2.addImage(car2Img);

    cars = [car1, car2];
    obstaclesGroup = new Group();
  }


  







  play() {
    form.hide();

    
    
    Player.getPlayersInfo();
    

    if (allPlayers !== undefined) {

      background("green");
      image(raceTrack, 0, -displayHeight * 4, displayWidth, displayHeight * 5);

      finishline = createSprite(650, -3100)
      finishline.addImage(finishlineImg);
      
      var index = 0;

      var x = 300;
      var y;

      for (var plr in allPlayers) {
        index = index + 1;


        
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;


        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

 

        if (index === player.index) {

          fill("green");
          ellipse(x, y, 60, 60);
          //console.log(player.y)

          camera.position.y = cars[index - 1].position.y;
          
        }
        
      }

       
      
      if (obstaclesGroup.isTouching(cars[0]) || obstaclesGroup.isTouching(cars[1])) {

        gameState = 2;
      
      }
      if (cars[0].y < -3030 || cars[1].y < -3030){
        gameState = 2;
        
      }
      drawSprites();

      

    }


  }

  spawnObstacles() {
    if (frameCount % 10 === 0) {
      obstacles = createSprite(1400, Math.round(random(160,-2910)));
      obstacles.velocityX = -7;
      var rand = Math.round(random(1, 2));
      if (rand === 1) {
        obstacles.addImage(cone)
        obstacles.scale = 0.12;
        obstacles.setCollider("rectangle", 0, 0, 504, 505);
      } else
        if (rand === 2) {
          obstacles.addImage(barrior)
          obstacles.scale = 0.16;
        }
      obstacles.lifetime = 175;
      obstaclesGroup.add(obstacles);
    
      //alert(obstaclesGroup);
    }
    
  }





  


end(){
  

  textSize(70)
  fill("Red")
  text("Game Over", 550, 50);
  text("You Lose!", 550, 150);
  
  textSize(70)
  fill("Red")
  text("Game Over", 550, -550);
  text("You Lose!", 550, -450);

  textSize(70)
  fill("Red")
  text("Game Over", 550, -1100);
  text("You Lose!", 550, -1000);

  textSize(70)
  fill("Red")
  text("Game Over", 550, -1650);
  text("You Lose!", 550, -1550);

  textSize(70)
  fill("Red")
  text("Game Over", 550, -2100);
  text("You Lose!", 550, -2000);

  textSize(100)
  fill("Blue")
  text("You Win!", 450, -3220);
  }



  handlePlayerControls(){

  if (keyIsDown(UP_ARROW)) {
    player.positionY += 10;
    player.update();
  }

  if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50) {
    player.positionX -= 5;
    player.update();
  }

  if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 300) {
    player.positionX += 5;
    player.update();
  }

}}






