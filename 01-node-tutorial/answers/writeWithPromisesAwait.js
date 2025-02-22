/** Then create an async function called writer that takes 0 arguments, 
and that writes three lines to a file named temp.txt, by calling the writeFile function 
with await. The Promise version of writeFile takes the same arguments as the one 
you used in last week’s exercise 10-fs-sync but will return a Promise 
instead of a result directly.*/

const { writeFile, readFile } = require("fs").promises;  

//Put the await statements inside a try/catch block!

const writer = async () => {
    try{
        await writeFile('./temp.txt', 'Line 1\nLine 2\nLine 3');
        console.log("I've written to the file!")
    }
    catch (err){
        console.log(err);
    }
} 

/** Create another async function called reader that reads the file with await readFile 
and logs the return value to the screen.*/

const reader = async () => {
    try{
        const readingFile = await readFile('temp.txt', 'utf8')
        console.log(`The file contents are:\n${readingFile}`)
    }
    catch (err){
        console.log(err)
    }
}

/** Now we want to call the two functions in order, first the writer, and the reader. 
But, be careful! These are asynchronous functions, so if you just call them, 
you don’t know what order they’ll occur in. And you can’t use await in your mainline code. 
So, you write a third async function called readWrite. */

/**In that function, you call await reader and await writer. 
Finally, write a line at the bottom of the file that calls the readWrite function. 
Test your code.  */

const readWrite = async () => {
    try { 
        await writer()
        await reader()
    }
    catch (err){
        console.log(err)
    }
}

readWrite()