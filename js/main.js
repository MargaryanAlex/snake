import { Engine } from "/js/engine.js"
// import { Ball } from "/js/ball.js";
import { Snake } from "/js/snake.js";
import { Food } from "/js/food.js";
import { Map } from "/js/map.js";
const size = { x: 32, y: 30 };
let level = 0;
const node = document.getElementById("body");
window.engine = new Engine(1920, 1080, node);
//let ball = new Ball(engine.width / 2, engine.height / 2);
// let randomx = () => { return getRandomNumber(0, Math.floor((engine.width - size.x) / size.x)); }
// let randomy = () => { return getRandomNumber(0, Math.floor((engine.height - size.y) / size.y)); }
let map = new Map(level);
let snake = new Snake(map.cords.x, map.cords.y, size.x, size.y,);

window.engine.update = function () {

    map.update();
    snake.update();


    map.foods.map((food, index) => {
        if (snake.snakeParts[0].intersect(food)) {
            map.foods.splice(index, 1);
            snake.addSnakePart();
        }
    });

    map.poisons.map((poison, index) => {
        if (snake.snakeParts[0].intersect(poison)) {
            map.poisons.splice(index, 1);
            snake.removeSnakePart();
        }
    })
    map.stones.map((stone, index) => {
        if (snake.snakeParts[0].intersect(stone)) {
            snake.stopeSnake();
        }
    })
    if (map.foods.length == 0) {
        level++;
        snake.frameTime = map.speed;
        map = new Map(level);
    }


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
    map.draw();
    map.foods.map((food) => {
        food.draw();
    });
    map.poisons.map((poison) => {
        poison.draw();
    })
    map.stones.map((stone) => {
        stone.draw();
    })

    snake.draw();



};



function getRandomNumber(min, max) {
    if (max === undefined)
        return Math.floor(Math.random() * (min));
    return Math.floor(Math.random() * (max - min) + min);
};


