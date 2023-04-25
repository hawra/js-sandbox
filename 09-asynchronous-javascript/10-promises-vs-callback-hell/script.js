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

// Whatever we return from a .then() is passed into the next .then() callback function args
getData('./movies.json')
  .then((movies) => {
    console.log(movies);
    return getData('./actors.json'); // RSH Here we 'return' a list of actors down into the next .then
  })
  .then((actors) => {
    console.log(actors);
    return getData('./directors.json'); // RSH Here we 'return' a list of directors down into the next .then
  })
  .then((directors) => {
    console.log(directors);
  })
  .catch((error) => console.log(error)); // RSH so if we misspelled directors for example...
