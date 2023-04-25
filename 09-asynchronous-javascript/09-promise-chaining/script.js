const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log(user);
    return user.name; // RSH When this line returns 'John' it sends John down to the next .then on line 18
  })
  .then((name) => {
    console.log(name); // RSH ... so that name here is John
    return name.length;
  })
  .then((nameLength) => {
    // RSH ...and nameLenght is 4
    console.log(nameLength);
  })
  .catch((error) => {
    console.log(error);
    return 123; // RSH ... IFF error (line 3) is true 123 gets returned instead of the name and length
  })
  .then((x) => console.log('This will run no matter what', x)); // RSH ... down to the bottom line to get logged after the '...no matter what'
