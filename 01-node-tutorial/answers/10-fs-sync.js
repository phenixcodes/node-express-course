/**This should load writeFileSync and readFileSync functions from the fs module. 
 * Then you will use writeFileSync to write 3 lines to a file, ./temporary/fileA.txt, 
 * using the "append" flag for each line after the first one. Then use readFileSync to read the file, 
 * and log the contents to the console. Be sure you create the file in the temporary directory. */

//importing the fs module/object
const fs = require('fs')

//reading content from 3 files
const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/second.txt', 'utf8')
const third = fs.readFileSync('./content/third.txt', 'utf8')

// writing 3 lines to a temporary file and printing the contents in the console.
fs.appendFile(
  './temporary/fileA.txt',
  ` Here is the result : ${first}, ${second}, ${third}`,
  function (err) {
    if (err) throw err;
    console.log(`Updated! Here are the contents : ${first}, ${second}, ${third}`);
  }
)