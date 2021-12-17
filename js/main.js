import { Engine } from "/js/engine.js"
// import { Ball } from "/js/ball.js";
import { Snake } from "/js/snake.js";
import { Food } from "/js/food.js";
import { Background } from "/js/background.js";
const size = { x: 32, y: 30 };

const node = document.getElementById("body");
window.engine = new Engine(1920, 1080, node);

//let ball = new Ball(engine.width / 2, engine.height / 2);
let randomx = () => { return getRandomNumber(0, Math.floor((engine.width - size.x) / size.x)); }
let randomy = () => { return getRandomNumber(0, Math.floor((engine.height - size.y) / size.y)); }

let background = new Background(0, 0, 0, 0);

let food = new Food(size.x * randomx(), size.y * randomy(), size.x, size.y, "green");
let foodPoison = new Food(size.x * randomx(), size.y * randomy(), size.x, size.y, "red");
let foodDie = new Food(size.x * randomx(), size.y * randomy(), size.x, size.y, "black");

let snake = new Snake(size.x * Math.floor(randomx()), size.y * Math.floor(randomy()), size.x, size.y,);
window.engine.update = function () {
    snake.update();

    if (snake.snakeParts[0].intersect(food)) {
        food.x = size.x * randomx();
        food.y = size.y * randomy();

        snake.eat = true;
    } else {
        snake.eat = false;
    };
    if (snake.snakeParts[0].intersect(foodPoison)) {
        foodPoison.x = size.x * randomx();
        foodPoison.y = size.y * randomy();

        snake.poison = true;
    } else {
        snake.poison = false;
    };
    if (snake.snakeParts[0].intersect(foodDie)) {
        foodDie.x = size.x * randomx();
        foodDie.y = size.y * randomy();


    };
    // for (let i = 0; snake.snakeParts.length > i; i++) {
    //     if (snake.snakeParts[0].intersect(snake.snakeParts[i]) && i !== 0) {
    //         alert("Game Over");
    //         window.cancelAnimationFrame(engine.loop);
    //     };
    // };



};
window.addEventListener("keydown", (e) => {
    snake.pressedKey = e.code

});

window.engine.draw = function () {
    //drawGrid(size.x, size.y);
    background.draw();
    snake.draw();
    food.draw();
    foodPoison.draw();
    foodDie.draw();


};



function getRandomNumber(min, max) {
    if (max === undefined)
        return Math.floor(Math.random() * (min));
    return Math.floor(Math.random() * (max - min) + min);
};

function drawGrid(w, h) {
    for (let x = 0; x <= engine.width; x += w) {
        for (let y = 0; y <= engine.height; y += h) {
            engine.strokeRect(x, y, w, h, "#000000");
        }
    }
}

