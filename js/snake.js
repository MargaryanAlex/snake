import { Base } from "./base.js";
import { SnakePart } from "./snakePart.js";

export class Snake extends Base {
    constructor(x, y, width, height, eat) {
        super(x, y, width, height,);
        this.speed = 16;
        this.speedX = this.speed;
        this.speedY = this.speed;
        this.eat = eat;
        this.pressedKey = "";
        this.snakeParts = new Array();
        for (let i = 0; i < 5; i++) {
            let color = "green";
            if (i == 0) {
                color = "red";
            };
            this.snakeParts.push(new SnakePart(this.x - this.width * i, this.y, this.height, this.width, color, " black"));
        };

        this.direction = Directions.Right;
    };

    update(gameTime) {
        for (let i = this.snakeParts.length - 1; i >= 0; i--) {
            let part = this.snakeParts[i];
            if (i == 0) {
                if (part.x <= -this.width) {
                    part.x = engine.width;
                };
                if (part.x > engine.width) {
                    part.x = -this.width;
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
            // part.update();
        };

        if (this.pressedKey === "ArrowRight" && this.direction !== Directions.Left) {
            this.direction = Directions.Right;
        } else if (this.pressedKey == "ArrowLeft" && this.direction !== Directions.Right) {
            this.direction = Directions.Left;
        } else if (this.pressedKey == "ArrowUp" && this.direction !== Directions.Down) {
            this.direction = Directions.Up;

        } else if (this.pressedKey == "ArrowDown" && this.direction !== Directions.Up) {
            this.direction = Directions.Down;

        }

        switch (this.direction) {
            case Directions.Right: {
                this.snakeParts[0].x += this.speedX;
                break;
            } case Directions.Left: {
                this.snakeParts[0].x -= this.speedX;
                break;
            } case Directions.Up: {
                this.snakeParts[0].y -= this.speedY;
                break;
            } case Directions.Down: {
                this.snakeParts[0].y += this.speedY;
                break;
            }
        }
    };


    draw() {
        for (let i = 0; i < this.snakeParts.length; i++) {
            let part = this.snakeParts[i];
            part.draw();
        };

        if (this.eat == true) { this.snakeParts.push(new SnakePart(this.x - this.width * this.snakeParts.lengt, this.y, this.height, this.width, "red", " black")); }
    };

};

const Directions = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};