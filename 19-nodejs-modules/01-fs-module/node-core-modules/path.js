const path = require('path');

const myFilePath = 'subfolder/anotherfolder/index.js';

// basename()
const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, '.js');

console.log(base1); // RSH Only gets the file name and extension, disregarding rest of path
console.log(base2); // RSH Gets filename without extension included as parameter

// extname()

const ext = path.extname(myFilePath); // RSH Get's the extension only
console.log(ext);

// dirname()

const dir = path.dirname(myFilePath);
console.log(dir);

// join()       // RSH creates correct path irrespective of operating system
const myPath = path.join('subfolder', 'anotherfolder', 'index.js');
console.log(myPath);

// resolve()        // RSH Resolve works the same, except it makes absolute path from / ...
//      ...to the folder with the file that runs the command
const myPath2 = path.resolve('subfolder', 'anotherfolder', 'index.js');
console.log(myPath2);

// __dirname        // RSH Gives you the absolute path to the directory (folder) containing the currently executing file, just like pwd
console.log(__dirname); // RSH You should use '__dirname' instead of './'

// __filename        // RSH Gives you the absolute path to the currently executing file
console.log(__filename);
