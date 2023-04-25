function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// getData('./movies.json')   // RSH This approach uses .then syntax.
//   .then((movies) => {      //  The async await alternative is below
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

async function getAllData() {
  // RSH using this approach the delays are additive, taking about 10 sec.
  const movies = await getData('./movies.json');
  const actors = await getData('./actors.json');
  const directors = await getData('./directors.json');
  console.log(movies, actors, directors);
}

async function getAllDataWithFetch() {
  const moviesRes = await fetch('./movies.json');
  console.log(moviesRes, 'RSH 1'); // RSH moviesRes is a json object (see RSH* below)
  const movies = await moviesRes.json();
  console.log(movies, 'RSH 2'); // RSH movies is an array with 4 movie objects  = {release_year: "1983", title: "scarface"}, etc.
  const actorsRes = await fetch('./actors.json');
  console.log(actorsRes, 'RSH 3');
  const actors = await actorsRes.json();
  console.log(actors, 'RSH 4');
  const directorsRes = await fetch('./directors.json');
  console.log(directorsRes, 'RSH 5');
  const directors = await directorsRes.json();
  console.log(directors, 'RSH 6');
  console.log(movies, actors, directors, 'RSH 6');
}

async function getAllDataPromiseAll() {
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    fetch('./movies.json'),
    fetch('./actors.json'),
    fetch('./directors.json'),
  ]);

  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

async function getAllDataPromiseAll2() {
  const [movies, actors, directors] = await Promise.all([
    fetch('./movies.json').then((res) => res.json()),
    fetch('./actors.json').then((res) => res.json()),
    fetch('./directors.json').then((res) => res.json()),
  ]);

  console.log(movies, actors, directors);
}

// getAllData();
// getAllDataWithFetch();
// getAllDataPromiseAll();
getAllDataPromiseAll2();

// RSH* = Response {type: 'basic', url: 'http://127.0.0.1:5500/10-fetch-and-async-await/09-multiple-promises-async-await/movies.json', redirected: false, status: 200, ok: true, …}
