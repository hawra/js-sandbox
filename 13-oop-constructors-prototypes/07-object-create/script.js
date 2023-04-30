const rectanglePrototypes = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
  isSquare: function () {
    return this.height === this.width;
  },
};

function createRectangle(height, width) {
  return Object.create(rectanglePrototypes, {
    // RSH This is just an alternate way of creating multiple objects
    height: {
      // RSH ... by taking in an object of methods (your prototype functions), and an object of properties
      value: height,
    },
    width: {
      value: width,
    },
  });
}

const rect = createRectangle(10, 20);
console.log(rect);
console.log(rect.area());
console.log(rect.isSquare());

const rect2 = createRectangle(20, 20);
console.log(rect2.area());
