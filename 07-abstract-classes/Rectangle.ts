import { Shape } from './Shape';

export class Rectangle extends Shape {
    
    calculateArea(): number {
        return this.width * this.length;
    }

    constructor(x: number, y: number,
        private width: number, private length: number) {
            super(x, y);
        }

    public getLength(): number {
        return this.length;
    }
    public setLength(value: number) {
        this.length = value;
    }
    public getWidth(): number {
        return this.width;
    }
    public setWidth(value: number) {
        this.width = value;
    }

    getInfo(): string {
        return super.getInfo() + `, width = ${this.width}, length = ${this.length}`;
    }

    


}