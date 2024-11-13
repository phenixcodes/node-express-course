/**Write another program called writeWithPromisesThen.js also in the 01-node-tutorial/answers folder. 
 * Again you write to temp.txt. You start it the same way, but this time, 
 * you use the .then style of asynchronous programming. 
 * You don’t need to create any functions. */

const { error } = require("console");
//.promise returns the promise object  
const fs = require('fs').promises;

    fs.writeFile('./temp.txt','Line 1\n')
    .then(() => {
        return fs.appendFile('./temp.txt', 'Line 2\n')
    })
    .then(() => {
        return fs.appendFile('./temp.txt', 'Line 3')
    })
    .then(() => {
        return fs.readFile('./temp.txt', 'utf8')
    })
    .then((file) => {
        console.log(`The file contains:\n ${file}`)
    })
    .catch((error) => {
        console.log(error)
    })