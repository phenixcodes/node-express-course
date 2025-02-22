/** This should load the path Node module, which is another built-in module. 
 * It should then call the path.join function to join up a sequence of alphanumeric strings,
 * and it should print out the result.  */

//importing the path module
const path = require('path')

//identifies the path seperator for the local machine
console.log(path.sep)

//displays a modified file path for the given file
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

//displays the name of the file
const base = path.basename(filePath)
console.log(base)

//displays the full path name for the give file
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)