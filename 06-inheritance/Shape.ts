export class Shape {

    constructor(private x: number,
                private y: number) {

                }

    public getX(): number {
        return this.x;
    }
    public setX(value: number) {
        this.x = value;
    }
    public getY(): number {
        return this.y;
    }
    public setY(value: number) {
        this.y = value;
    }

    getInfo(): string {
        return `x = ${this.x}, y = ${this.y}`;
    }

    
}