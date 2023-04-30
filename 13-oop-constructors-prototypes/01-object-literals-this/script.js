const rectangle = {
  // RSH This is an Object Literal
  name: 'Rectangle 1',
  width: 20,
  height: 10,
  // We can add methods to an object and use this keyword to access the properties of the object
  // RSH We can have methods in an Object Literal
  // From within the following method ('area'), 'this' allows access to all the properties in this object literal
  // so 'THIS.WIDTH' means "THIS object literal's WIDTH property's value"
  // ... this always refers to this particular instance's propertys and methods
  area: function () {
    return this.width * this.height;
  },
};
console.log(rectangle.name, rectangle.area, 'RSH 1'); // RSH
console.log(
  this,
  "RSH - Here in the global scope 'this' refers to the window object"
);

// RSH Even in a function scope, 'this' still refers to  the window object
function run() {
  console.log(
    this,
    "RSH - Even here in a function scope 'this' still refers to the window object"
  );
}
run();

// Object literals are great for creating objects that only need one instance. If we needed two Rectangles, we would have to create two objects

const rectangle2 = {
  name: 'Rectangle 2',
  width: 30,
  height: 20,
  area: function () {
    return this.width * this.height;
  },
};

console.log(rectangle.area());
console.log(rectangle2.area());
