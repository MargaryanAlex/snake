import { Base } from "./base.js";
import { SnakePart } from "./snakePart.js";


export class Snake extends Base {
    constructor(x, y, width, height) {
        super(x, y, width, height,);
        this.snakeParts = new Array();
        for (let i = 0; i < 5; i++) {
            let color = "#3CAEA3";
            if (i == 0) {
                color = "#20639B";
            };
            this.snakeParts.push(new SnakePart(this.x - this.width * i, this.y, this.width, this.height, color, "black"));
        };
        this.direction = Directions.Right;
        this.lastTime = Date.now();
        this.frameTime = 160;
    };


    update(gameTime) {

        if (engine.Keys[Directions.Right] && this.direction !== Directions.Left) {
            this.direction = Directions.Right;
        } else if (engine.Keys[Directions.Left] && this.direction !== Directions.Right) {
            this.direction = Directions.Left;
        } else if (engine.Keys[Directions.Up] && this.direction !== Directions.Down) {
            this.direction = Directions.Up;

        } else if (engine.Keys[Directions.Down] && this.direction !== Directions.Up) {
            this.direction = Directions.Down;
        }

        var delta = Date.now() - this.lastTime;
        var steps = Math.floor(delta / this.frameTime);
        if (steps <= 0) return;
        var snakeHead = this.snakeParts[0];

        for (var i = 0; i < steps; i++) {
            for (let i = this.snakeParts.length - 1; i >= 0; i--) {
                let part = this.snakeParts[i];
                if (i == 0) {
                    if (part.x <= - this.width) {
                        part.x = engine.width;
                    };
                    if (part.x > engine.width) {
                        part.x = - this.width;
                    };
                    if (part.y >= engine.height) {
                        part.y = 0;
                    }
                    if (part.y < 0) {
                        part.y = engine.height
                    }
                } else {
                    var previousPart = this.snakeParts[i - 1];

                    part.x = previousPart.x;
                    part.y = previousPart.y;
                };
                part.update();
            };

            switch (this.direction) {
                case Directions.Right: {
                    snakeHead.x += this.width;
                    break;
                } case Directions.Left: {
                    snakeHead.x -= this.width;
                    break;
                } case Directions.Up: {
                    snakeHead.y -= this.height;
                    break;
                } case Directions.Down: {
                    snakeHead.y += this.height;
                    break;
                }
            }
        }
        this.lastTime = Date.now();
    };
    addSnakePart() {
        this.snakeParts.push(new SnakePart(this.x - this.width * this.snakeParts.lengt, this.y, this.width, this.height, "#3CAEA3", " black"));
        this.frameTime -= 10
    }
    removeSnakePart() {
        this.snakeParts.pop()
    }
    stopeSnake() {
        this.snakeParts[0].x = this.snakeParts[1].x
        this.snakeParts[0].y = this.snakeParts[1].y
    }
    draw() {
        for (let i = 0; i < this.snakeParts.length; i++) {
            let part = this.snakeParts[i];
            part.draw();
        };

    };

};