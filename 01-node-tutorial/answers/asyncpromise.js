/** Then create an async function called writer that takes 0 arguments, 
and that writes three lines to a file named temp.txt, by calling the writeFile function 
with await. The Promise version of writeFile takes the same arguments as the one 
you used in last week’s exercise 10-fs-sync but will return a Promise 
instead of a result directly.*/

//rewriting my writeWithPromisesAwait.js assignment

const { writeFile, readFile } = require("fs").promises

const writer = () => { 
    return writeFile('./temp.txt','Line 1\nLine 2\nLine 3')
}

const reader = () => {
    return readFile('./temp.txt', 'utf8') 
}

const readWrite = async () => {
    try {
        const write = await writer()
        const read = await reader()
        console.log(`File contains:\n${read}`)
        //success
    }
    catch(err) {
        console.log(err)
        //failed
    }
}

readWrite()