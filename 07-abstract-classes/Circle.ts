import { Shape } from './Shape';

export class Circle extends Shape {
    
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    
    constructor(x: number, y:number,
        private radius: number) {
            super(x, y);
        }
        
        public getRadius(): number {
            return this.radius;
        }
        public setRadius(value: number) {
            this.radius = value;
        }

        getInfo(): string {
            return super.getInfo() + `, radius = ${this.radius}`;
        }

        
    

    
    
}