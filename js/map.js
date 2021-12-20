import { Food } from "./food.js";
import { level } from "./level1.js";

const levels = JSON.parse(level)

const size = { x: 32, y: 30 };
export class Map {
    constructor(level) {
        this.cords = {
            x: 0,
            y: 0
        }
        this.levelNumber = level;
        this.speed;
        this.foods = [];
        this.poisons = [];
        this.stones = [];

        levels.map((level, index) => {
            if (index == this.levelNumber) {
                this.speed = level.speed;

                levels[index].map.map((arr, i) => {
                    arr.map((pixel, j) => {
                        switch (pixel) {
                            case -1: {
                                this.cords.x = j * size.x
                                this.cords.y = i * size.y
                                break
                            }
                            /* Food */
                            case 1: {

                                let food = new Food(j * size.x, i * size.y, size.x, size.y, "#3CAEA3");
                                this.foods.push(food);

                                break;
                            }

                            // Poison
                            case 2: {

                                let poison = new Food(j * size.x, i * size.y, size.x, size.y, "#ED553B");
                                this.poisons.push(poison);
                                break;
                            }
                            // Stone
                            case 3: {

                                let stone = new Food(j * size.x, i * size.y, size.x, size.y, "#173f5f");
                                this.stones.push(stone)
                                break;

                            }



                        }
                    });
                });
            }

        })


    };

    update() {

    };
    draw() {
        levels.map((level, index) => {

            levels[index].map.map((rows, i) => {
                rows.map((colums, j) => {
                    engine.strokeRect(j * size.x, i * size.y, size.x, size.y, "#173f5f");



                });
            });

        })
    };
};