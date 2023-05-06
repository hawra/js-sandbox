// const fs = require('fs');
const fs = require('fs/promises');

// Write to a file //

// Callback version   // RSH In this version the file gets created and the console log fires, and then if there is an error it is is thrown
// fs.writeFile('file1.txt', 'Hello World', (err) => {
//   if (err) throw err;
//   console.log('File created');
// });

// Promise version
// fs.writeFile('file2.txt', 'Hello World 2')
//   .then(() => console.log('File created'))
//   .catch((err) => console.log(err));

// Sync version
// fs.writeFileSync('file3.txt', 'Hello World 3 RSH');   // RSH Nothing below this line occurs until the file is created
// console.log('File created RSH');

// Async/Await    // RSH Uses promises
async function createFile(filename, content) {
  try {
    await fs.writeFile(filename, content);
    console.log('File created RSH Using async await, try and catch');
  } catch (error) {
    console.log(error);
  }
}

// // Read From a File //

async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// // Delete a File //
async function deleteFile(filename) {
  try {
    await fs.unlink(filename);
    console.log(`File ${filename} deleted on line 46 RSH`);
  } catch (error) {
    console.log(error);
  }
}

// // Rename a File //
async function renameFile(oldName, newName) {
  try {
    await fs.rename(oldName, newName);
    console.log(`File ${oldName} renamed to ${newName}`);
  } catch (error) {
    console.log(error);
  }
}

// // Create a folder //
async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`Folder ${folderName} created`);
  } catch (error) {
    console.log(error);
  }
}

createFolder('folder1');

// renameFile('file1.txt', 'fileRSH.txt');

// deleteFile('file4.txt');

// readFile('file1.txt');
// readFile('file2.txt');
// readFile('file3.txt');

// createFile('file4.txt', 'Hello World 4, RSH Initially from lines 22-30');

// https://nodejs.org/api/fs.html
