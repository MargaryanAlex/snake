export class Base {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    };

    update() { }
    draw() { }

    intersect(obj) {
        if (
            this.x >= obj.x && this.x < obj.x + this.width && this.y >= obj.y && this.y < obj.y + this.height && this.width == obj.width && this.height == obj.height
            // this.y >= obj.y && this.y < obj.y + obj.height && this.x >= obj.x && this.x < obj.x + obj.width
        ) {
            return true;
        };
        return false;
    };
};

window.Directions = {
    Up: "ArrowUp",
    Down: "ArrowDown",
    Left: "ArrowLeft",
    Right: "ArrowRight",
};