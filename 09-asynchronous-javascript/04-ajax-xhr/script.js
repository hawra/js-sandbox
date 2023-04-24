const xhr = new XMLHttpRequest(); // RSH XHR  stands for XmlHttpRequest

// Sepcify method and endpoint/URL
// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos');

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    //    console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    // data.forEach((movie) => {    // RSH comment/uncommment toggle the next 3 lines with the ensuing 3
    //   const li = document.createElement('li');
    //   li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
    data.forEach((repo) => {
      // RSH by toggling these 3 lines you switch from pulling from movies/json and brad's github repo
      const li = document.createElement('li');
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;

      document.querySelector('#results').appendChild(li);
    });
  }
};
//     const data = JSON.parse(this.responseText);

//     data.forEach((repo) => {
//       const li = document.createElement('li');
//       li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
//       document.querySelector('#results').appendChild(li);
//     });
//   }
// };
// Send request
xhr.send();
// //
