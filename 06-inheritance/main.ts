import { Rectangle } from './Rectangle';
import { Circle } from './Circle';
import { Shape } from "./Shape";

let shape = new Shape(7, 10);
console.log(shape.getInfo());

let circle = new Circle(10, 15, 40);
console.log(circle.getInfo());

let rectangle = new Rectangle(0, 0, 12, 45);
console.log(rectangle.getInfo());