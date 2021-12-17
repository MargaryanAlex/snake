export class Engine {
    constructor(w, h, node) {
        var self = this;
        this.canvas = document.createElement("canvas");
        this.width = w;
        this.height = h;
        this.canvas.style.cssText = "width: 100%;height: 100%;";
        node.appendChild(this.canvas);
        this.canvasContext = this.canvas.getContext("2d");

        this.update = function () { };
        this.draw = function () { };

        function loop() {
            self.clear();

            self.update(0);
            self.draw(0);

            window.requestAnimationFrame(loop);
        };

        window.requestAnimFrame = function () {
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function ( /* function */ loop) {
                    window.setTimeout(loop, 1000 / 60);
                }
            );
        }();

        window.requestAnimationFrame(loop);

    };
    eventListener(obj) {
        window.addEventListener("keydown", (e) => {
            // if (e.defaultPrevented) {
            //     return;
            // };
            obj = e.code
        })
    }


    drawImage(image, x, y, width, height) {
        this.canvasContext.drawImage(image, x, y, width, height);
    };

    fillRect(x, y, width, height, color) {
        this.canvasContext.fillStyle = color;
        this.canvasContext.fillRect(x, y, width, height);

    };
    strokeRect(x, y, width, height, color) {
        this.canvasContext.strokeStyle = color;
        this.canvasContext.strokeRect(x, y, width, height);

    };
    fillCircle(x, y, radius, color) {
        this.canvasContext.beginPath();
        this.canvasContext.arc(x, y, radius, 0, 2 * Math.PI);
        this.canvasContext.fillStyle = color;
        this.canvasContext.fill();


    };
    strokeCircle(x, y, radius, strokeLength, color) {
        this.canvasContext.beginPath();
        this.canvasContext.arc(x, y, radius, 0, 2 * Math.PI);
        this.canvasContext.lineWidth = strokeLength;
        this.canvasContext.strokeStyle = color;
        this.canvasContext.stroke();
    };

    clear() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    get width() {
        return this.canvas.width;
    };
    set width(value) {
        this.canvas.width = value;
    };
    get height() {
        return this.canvas.height;
    };
    set height(value) {
        this.canvas.height = value;
    };



};