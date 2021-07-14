import { Rectangle } from './Rectangle';
import { Circle } from './Circle';
import { Shape } from "./Shape";

let circle = new Circle(10, 15, 40);

let rectangle = new Rectangle(0, 0, 12, 45);

// array of Shape, other type is not allowed
let shapes: Shape[] = [];

shapes.push(circle);
shapes.push(rectangle);

shapes.forEach(element => {
    console.log(element.getInfo());
    console.log(element.calculateArea());
});



