const os = require('os');

// arch()       // RSH Gives x64 on my mac
console.log(os.arch());

// platform()      // RSH Gives darwin on my mac
console.log(os.platform());

if (os.platform() === 'darwin') {
  console.log('You are on a Mac');
} else if (os.platform() === 'win32') {
  console.log('You are on Windows');
} else {
  console.log('You are on Linux');
}

// cpus()
// console.log(os.cpus());

//      RSH os.cpu's gives an object with 16 elements that look like this:
//      {
//     model: 'Intel(R) Core(TM) i9-9980HK CPU @ 2.40GHz',
//     speed: 2400,
//     times: { user: 9938780, nice: 0, sys: 4032140, idle: 96323390, irq: 0 }
//      },

// freemem()
console.log(os.freemem()); // RSH gives 42485977088     Free Memory: 39.56816482543945 GB
// RSH  BTW,   This Mac is : 64 GB 2667 MHz DDR4
console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

// totalmem()
console.log(os.totalmem());
console.log(`BTW, RSH Total Memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);
console.log('RSH 1', os.totalmem()); // RSH Gives: RSH 1 68719476736

// homedir      // RSH Gives /Users/hawra
console.log(os.homedir());

// uptime
console.log('RSH 2', os.uptime()); // RSH Gives:   RSH 2 298527

const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const minutes = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;

console.log(
  `Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
);
// Uptime: 3 days, 10 hours, 55 minutes, 27 seconds

// hostname()
console.log(os.hostname()); // RSH Gives RetireDoc

// os.networkInterfaces()
// console.log(os.networkInterfaces()); // see https://www.geeksforgeeks.org/node-js-os-networkinterfaces-method/

// RSH Gives a 16 element object containing IPv4 and IPv6 information of the following form:

// lo0: [
//     {
//       address: '127.0.0.1',
//       netmask: '255.0.0.0',
//       family: 'IPv4',
//       mac: '00:00:00:00:00:00',
//       internal: true,
//       cidr: '127.0.0.1/8'
//     },
//     ...
//     {
//         address: '::1',
//         netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//         family: 'IPv6',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '::1/128',
//         scopeid: 0
//       },
