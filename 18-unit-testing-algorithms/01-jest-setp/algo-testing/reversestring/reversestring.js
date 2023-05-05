// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// function reverseString(str) {
//   let reversed = '';

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }
function reverseString(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverseString;
