//Enemies take 3 parameters speed of enemy and position enemies
var Enemy = function(x, y, speed) {  
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
     this.x += this.speed * dt;
    // when enemy bug reaches end of canvas return to beginning
     if(this.x > 505) {  
         this.x = -200; 
     }
     //if collision happened return to beginning
      if ((player.x >= this.x - 50) && (player.x <= this.x + 50)) {
        if ((player.y >= this.y - 50) && (player.y <= this.y + 50)) {
            player.x = 200;
            player.y = 400;
            alert(" try again!!!");
          }
        }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player class take 2 parameters position player 
var Player = function(x, y) {
    this.x = 200;
    this.y = 400;
    this.score = 0;   // to calculate score player
    this.sprite = "images/char-boy.png";
};


Player.prototype.update = function() {
  if (this.x < 0) {
       this.x = 0;
  } 
  else if (this.x > 400) {
    this.x = 400;
  }
  else if (this.y > 400) {
    this.y = 400;
  }
//return to beginning if player reach to water
  else if (this.y < 0) {
    this.x = 200;
    this.y = 400;
    this.score += 100;
    if (this.score === 1000){
    alert("Win!!! congratulation..");  
      this.score = 0;
    }
  }
        
};
//Draw the player
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    // score 
    ctx.font = "25px Arial";
    ctx.fillStyle = "gray";
    ctx.fillText("Score: " + this.score,210,30);
};

// Updates player position properties based on which key has been pressed
Player.prototype.handleInput = function(key) {
  switch (key) {
    case 'left':
      this.x = this.x - 95;
      break;

    case 'right':
      this.x = this.x + 95;
      break;

    case 'up':
      this.y = this.y - 95;
      break;

    case 'down':
      this.y = this.y + 95;
      break;

    default:
      break;
  }
};

// position enemies and speed 
var Enemy1 = new Enemy(90, 60, [100]);
var Enemy2 = new Enemy(390, 140, [200]);
var Enemy3 = new Enemy(890, 230,[150]);
var Enemy4 = new Enemy(290, 230, [200]);
var Enemy5 = new Enemy(190, 140, [100]);
var Enemy6 = new Enemy(400, 60, [300]);
var allEnemies = [Enemy1, Enemy2, Enemy3,Enemy4,Enemy5,Enemy6];

// player object 
var player = new Player();

// This listens for key presses and sends the keys to your
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});