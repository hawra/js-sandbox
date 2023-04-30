function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  // RSH This adds the 'area' method to Rectangle Constructor function's prototype
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName);
};

const rect = new Rectangle('Rect', 10, 20);
const rect2 = new Rectangle('Rect 2', 30, 40);

console.log(rect, 'RSH 1');
console.log(rect.area(), 'RSH 2');
console.log(rect.perimeter(), 'RSH 3');
console.log(rect.isSquare(), 'RSH 4');
rect.changeName('Test');
console.log(rect.name, 'RSH 5');

console.log(rect2.area(), 'RSH 6');
