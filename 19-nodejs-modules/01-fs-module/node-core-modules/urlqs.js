const url = require('url');
const querystring = require('querystring');

// url.parse()      // RSH Gives a 12 element object of url information
const myUrl = url.parse('https://example.com/listing?id=1000&premium=true');
console.log(myUrl);

// url.format()     // RSH This does the reverse
const myUrl2 = url.format({
  protocol: 'https',
  host: 'www.example.com',
  pathname: 'listing',
  query: {
    id: 1000,
    premium: true,
  },
});

console.log(myUrl2);

// querystring.parse()
const myQs = 'year=2023&month=january&day=20';

const q = querystring.parse(myQs);
console.log(q); // RSH Makes: [Object: null prototype] { year: '2023', month: 'january', day: '20' }
console.log(q.month);

// querystring.stringify()
const myQs2 = querystring.stringify({
  year: 2023,
  month: 'january',
  day: 20,
});

console.log(myQs2); // RSH Makes: year=2023&month=january&day=20
