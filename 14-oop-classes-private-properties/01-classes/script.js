class Rectangle {
  //  RSH Classes syntax was added in ESS6 2015
  constructor(name, width, height) {
    // RSH This Constructor method works very similar to a Constructor Function
    // ... It will run every time you instantiate a new object
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    // RSH We must not use the Function keyword
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea() {
    console.log('Rectangle Area: ' + this.area());
  }
}

const square = new Rectangle('Square', 20, 20);
console.log(square, typeof square, 'RSH 1');
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());
square.logArea();
console.log(square);
// console.log(Object.getPrototypeOf(square));
