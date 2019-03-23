'use strict';
import * as car from './export_cars.js';
import {specialCar, specialCarColor} from './export_cars.js';

console.log(`Import car: ${car.name}`);
console.log(`Import car 2: ${car.name2}`);
console.log(`Import car color: ${car.color()}`);
console.log(`Import car color 2: ${car.color2()}`);
console.log(`Import special: ${specialCar}`);
console.log(`Import special color: ${specialCarColor()}`);