const image = document.querySelector('img');
let start;
let done = false;
let RSHIntervalTime;
let lastElapsed;

function step(timestamp) {
  console.log(timestamp, 'RSH 1');
  if (start === undefined) {
    start = timestamp;
    RSHIntervalTime = 0;
    lastElapsed = 0;
    console.log(start, 'RSH start');
  }

  const elapsed = timestamp - start;
  console.log(elapsed, 'RSH2');
  if (elapsed > 5000) {
    done = true;
  } else {
    console.log(elapsed - lastElapsed, 'RSH Interval'); // RSH The first 6 intervals are between 16 and 80 ms ...
    lastElapsed = elapsed; //... but all the rest take about 16.666 ms, plus or mines .0001 ms
  }

  if (done) {
    return;
  }

  image.style.transform = `translateX(${elapsed / 10}px) rotate(${
    elapsed / 10
  }deg)`;

  requestAnimationFrame(step);
}

requestAnimationFrame(step);
