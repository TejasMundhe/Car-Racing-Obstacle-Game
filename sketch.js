var database, game;
var car1Img, car2Img;
var car1, car2, raceTrack, cars, raceTrackImg, finishlineImg, finishline;
var cone, barrior, obstacles, obstaclesGroup;
var playerCount, allPlayers, form, player;
var gameState = 0;

function preload(){
 car1Img = loadImage("images/car2.png");
 car2Img = loadImage("images/car3.png");
 raceTrack = loadImage("images/track.png");
 cone = loadImage("images/coneImg.png");
 barrior = loadImage("images/barriorImg.png");
 finishlineImg = loadImage("images/finishline2.png");
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

  
  
}

function draw() {
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
    game.spawnObstacles()
    game.handlePlayerControls();
  }
  if(gameState === 2){
    game.end();
  }
  

}

