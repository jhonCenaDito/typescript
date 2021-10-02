class Points {

    // the arguments in the constructor declares the variables and assigns it in order
    constructor(private _x?: number, private y?: number) {
    }

    draw = () => console.log("X : " + this._x + "  Y : " + this.y);

    // Make it a property now
    get X() { return this._x };
    get Y() { return this.y };

    // setX = (value: number){
    //     if (value < 0) {
    //         throw new Error("Value can't be < 0");
    //     }

    //     this.x = value;
    // }

    // call : points.setX(5);

    set X(value: number) {
        if (value < 0)
            throw new Error("Value can't be < 0");

        this._x = value;
    }
    // call : points.X = 5;
    // since it is a property

}

let points = new Points(1, 2);
points.draw();