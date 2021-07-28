
  class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Ready');
   
      this.title = createElement('h1');
      this.message = createElement('h3');
      this.reset = createButton('Reset');
      
      
    }
    hide(){
  
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.message.hide();
    }
  
    display(){
      this.title.html("Car Racing Obstacle Game");
      this.title.position(displayWidth/2 - 150, 0);

      this.message.html("Welcome to the Car Racing Obstacle Game. This is a 2-player game so grab a friend to play(using the same link). The goal of the game is to be the first car to make it to the finish-line while dodging the obstacles with your arrow keys! Once both players enter their names and press READY the game will begin. Press the reset button and have both players reload their screens to play again. Good Luck!")
      this.message.position(0, displayHeight/2 -250);

      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2 - 20);
      this.reset.position(displayWidth-100, 20)
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
      });
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      })
    }
  }