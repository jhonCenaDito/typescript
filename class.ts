class Point {
    private x: number;
    y: number;

    // `?` make the argument optional 
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw = () => console.log("X : " + this.x + "  Y : " + this.y);
}

let point = new Point(1, 2);
// point.x; can't access since it is private
point.draw();