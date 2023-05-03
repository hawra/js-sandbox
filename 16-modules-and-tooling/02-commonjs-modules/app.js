const { capitalizeWords, makeMoney } = require('./utils'); // RSH Here is where we bring in out utils.js exports that we require, destructured using {} if there is more than one
const Person = require('./Person'); // RSH Here we import a class from a different file

console.log(capitalizeWords('hello world'));
console.log(capitalizeWords('randall searle hawkins of plum street'));
console.log(makeMoney(100));

const person1 = new Person('John', 30);
person1.greet();
