import { Base } from "./base.js";

export class Food extends Base {
    constructor(x, y, width, height, color) {
        super(x, y, width, height);
        this.color = color;
    };

    draw() {
        engine.fillRect(this.x, this.y, this.width, this.height, this.color);
    };

};