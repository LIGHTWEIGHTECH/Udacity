// Enemies our player must avoid
class Enemy {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.sprite = 'images/enemy-bug.png';
    }

    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }
    
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Character {
    constructor() {
        this.walkX = 101;
        this.walkY = 83;
        this.x = this.walkX * 2;
        this.y = this.walkY * 5 - 10;
        this.sprite = 'images/char-boy.png';
    }
    // Methods
    update() {

    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(key) {
        if (key === 'left' && this.x >= this.walkX) {
            this.x -= this.walkX;
        } if (key === 'up' && this.y >= this.walkY) {
            this.y -= this.walkY;
        } if (key === 'right' && this.x <= (3*this.walkX)) {
            this.x += this.walkX;
        } if (key === 'down' && this.y <= (4*this.walkY)) {
            this.y += this.walkY;
        }
    }
}

// Now instantiate your objects.

const allEnemies = [];
// Place all enemy objects in an array called allEnemies
function createEnemy(num) {
    for (let made = 0; made < num; made++) {
        allEnemies.push(new Enemy);
    }
    console.log(allEnemies);
}


// Place the player object in a variable called player
const player = new Character();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
