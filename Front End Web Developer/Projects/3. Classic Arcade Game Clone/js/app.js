// Enemies our player must avoid
class Enemy {
    constructor() {
        // Enemy's spawn location off-screen.
        this.x = -101;
        this.walkY = 83;
        // Making sure enemy's spawn in one of the 3 lanes.
        this.randomStartY = this.walkY * Math.floor(Math.random() * 3) + 83;
        // -20 is to make sure the object is centralized.
        this.y = this.randomStartY - 20;
        this.sprite = 'images/enemy-bug.png';
        this.speed = Math.floor(Math.random() * (150 - 100) ) + 100;
        this.enemyXY = [0, 0];
    }

    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.x += this.speed * dt;
        this.flatX = Math.floor(this.x);
        this.flatY = Math.floor(this.y);
        switch (this.flatX) {
            case :
                this.enemyXY.splice(0, 1, 1);
                break;
            case 50 || 51 || 52 || 53:
                this.enemyXY.splice(0, 1, 2);
                break;
            case 150 || 151 || 152 || 153:
                this.enemyXY.splice(0, 1, 3);
                break;
            case 253 || 254 || 255 || 256:
                this.enemyXY.splice(0, 1, 4);
                break;
            case 354 || 355 || 356 || 357:
                this.enemyXY.splice(0, 1, 5);
                break;
        }
        switch (this.flatY) {
            case 229:
                this.enemyXY.splice(1, 1, 3);
                break;
            case 146:
                this.enemyXY.splice(1, 1, 4);
                break;
            case 63:
                this.enemyXY.splice(1, 1, 5);
                break;
        }
        console.log(test.enemyXY);

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
        this.charXY = [0, 0];
    }
    // Methods
    update() {
        switch (this.x) {
            case 0:
                this.charXY.splice(0, 1, 1);
                break;
            case 101:
                this.charXY.splice(0, 1, 2);
                break;
            case 202:
                this.charXY.splice(0, 1, 3);
                break;
            case 303:
                this.charXY.splice(0, 1, 4);
                break;
            case 404:
                this.charXY.splice(0, 1, 5);
                break;
        }
        switch (this.y) {
            case 405:
                this.charXY.splice(1, 1, 1);
                break;
            case 322:
                this.charXY.splice(1, 1, 2);
                break;
            case 239:
                this.charXY.splice(1, 1, 3);
                break;
            case 156:
                this.charXY.splice(1, 1, 4);
                break;
            case 73:
                this.charXY.splice(1, 1, 5);
                break;
        }
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
// Place all enemy objects in an array called allEnemies
const allEnemies = [];
let lastEnemy = {};
let test = {};
let u = 0;
const createEnemy = function() {
    let createdEnemy = new Enemy;
    // Checks if the newly created Object (createdEnemy), does not have
    // the same spawn location OR speed. If so, overwrite with a new one.
    if (createdEnemy.speed === lastEnemy.speed || createdEnemy.randomStartY === lastEnemy.randomStartY) {
        createEnemy();
    } else {
        allEnemies.push(createdEnemy);
        lastEnemy = createdEnemy;
        if (u === 0) {
            test = lastEnemy;
            u++;
        }
    }}
    // Spawn an enemy every 2 seconds.
setInterval(createEnemy, 2000);

const deleteEnemy = function() {
    if (allEnemies.length >= 1) {
        if (allEnemies[0].x >= 505) {
            allEnemies.splice(0, 1);
    }}}

setInterval(deleteEnemy, 500);


// Place the player object in a variable called player
const player = new Character();


// Tests the location of player vs enemy and if so, reset the player back to start square
// still buggy
function checkCollisions() {
    for (let bugs of allEnemies) {
        if (bugs.enemyXY[0] === player.charXY[0] && bugs.enemyXY[1] === player.charXY[1]) {
            player.x = player.walkX * 2;
            player.y = player.walkY * 5 - 10;
        }
    }
}


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
