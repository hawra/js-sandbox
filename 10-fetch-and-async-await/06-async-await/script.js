const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'John', age: 20 });
  }, 1000);
});

// promise.then((data) => console.log(data));

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();
// RSH NOTE that lines 16 thru 20 using async and await are equivalent to...
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

// RSH ...  and interchangable with lines 23-27 using the .then syntax
// function getUsers() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// getUsers();

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // throw new Error('Hello');    // RSH Throw this error to test it

  console.log(data);
};

getPosts().catch((error) => console.log(error));
