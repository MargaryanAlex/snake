import { Base } from "./base.js";

export class SnakePart extends Base {
    constructor(x, y, width, height, color, strokeColor) {
        super(x, y, width, height);
        this.color = color;
        this.strokeColor = strokeColor;
    };

    update() {
    }
    draw() {
        engine.fillRect(this.x, this.y, this.width, this.height, this.color);
        engine.strokeRect(this.x, this.y, this.width, this.height, this.strokeColor);
    };
};