// Create a promise
const promise = new Promise((resolve, reject) => {
  // RSH resolve and reject are functions used as parameters of the new promise

  // Do some async task
  setTimeout(() => {
    console.log('Async task complete');
    resolve();
  }, 1000);
});

// promise.then(() => {
//   // RSH .then takes in a callback function which recieves anything that was passed into resolve, in this case nothing
//   console.log('Promise consumed..');
// });

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('The promise has been resolved or rejected'));

console.log('Hello from global scope');
