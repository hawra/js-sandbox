function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

const moviesPromise = getData('./movies.json');
console.log('RSH', Date.now() / 1000);
const actorsPromise = getData('./actors.json');
console.log('RSH', Date.now() / 1000); // RSH Curiously these two logs are identical
const directorsPromise = getData('./directors.json');

const dummyPromise = new Promise((resolve, reject) => {
  resolve('Hello World');
});

// Takes in promises
Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
  .then((data) => {
    // Returns an array of promise results
    console.log(data);
  })
  .catch((error) => console.log(error));
