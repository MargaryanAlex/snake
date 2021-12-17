import { Engine } from "/js/engine.js"
// import { Ball } from "/js/ball.js";
import { Snake } from "/js/snake.js";
import { Food } from "/js/food.js";

const node = document.getElementById("body");
window.engine = new Engine(window.innerWidth, window.innerHeight, node);

//let ball = new Ball(engine.width / 2, engine.height / 2);
const size = { x: 16, y: 16 };
let random = getRandomNumber(0, engine.width - size.x);
let food = new Food(random, engine.height / 2, size.x, size.y, "green");
let snake = new Snake(engine.width / 2, engine.height / 2, size.x, size.y, false,);
window.engine.update = function () {
    snake.update();

    if (snake.snakeParts[0].intersect(food)) {
        food.x = 16 * getRandomNumber(0, (engine.width - size.x) / 16);
        food.y = 16 * getRandomNumber(0, (engine.height - size.y) / 16);

        snake.eat = true;
    } else {
        snake.eat = false;
    };

    for (let i = 0; snake.snakeParts.length > i; i++) {
        if (snake.snakeParts[0].intersect(snake.snakeParts[i]) && i !== 0) {
            alert("Game Over");
            window.cancelAnimationFrame(engine.loop);
        };
    };



};
window.addEventListener("keydown", (e) => {
    snake.pressedKey = e.code

});

window.engine.draw = function () {
    snake.draw();
    food.draw();
};



function getRandomNumber(min, max) {
    if (max === undefined)
        return Math.floor(Math.random() * (min));
    return Math.floor(Math.random() * (max - min) + min);
};