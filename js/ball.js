import { Base } from "./base.js";

export class Ball extends Base {
    constructor(x, y) {
        super(x, y, width, height);
        this.speed = 10;
        this.speedX = this.speed;
        this.speedY = this.speed;
        this.color = "red";
        this.radius = 10;
    };

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x >= engine.width) {
            this.x = engine.width - this.radius;
            this.speedX *= -1;
        }
        if (this.x <= 0) {
            this.x = this.radius;
            this.speedX *= -1;
        }
        if (this.y >= engine.height) {
            this.y = engine.height - this.radius;
            this.speedY *= -1;
        }
        if (this.y <= 0) {
            this.y = this.radius;
            this.speedY *= -1;
        }
    };

    draw() {
        engine.fillCircle(this.x, this.y, this.radius, "red");
    };


};