/** This should load the fs module, and use the asynchronous function writeFile to write 3 lines to a file,
 *  ./temporary/fileB.txt. Now, be careful here! This is our first use of asynchronous functions in this class,
 *  but we are going to use them a lot! First, you need to use the "append" flag for all but the first line. 
 *  Second, each time you write a line to the file, you need to have a callback, because the writeFile operation
 *  is asynchronous. Third, for each line you write, you need to do the write for the line that follows it 
 *  within the callback - otherwise the operations won’t happen in order. 
 *  Put console.log statements at various points in your code to tell you when each step completes. 
 *  Then run the code.  */

const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    var first = data;
    console.log(`Success. ${first}`)
    readFile('./content/second.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        var second = data;
        console.log(`Success. ${second}`)
        readFile('./content/third.txt', 'utf8', (err,data) => {
            if (err) {
                console.log(err)
                return
            }
            var third = data;
            console.log(`Success. ${third}`)
            writeFile('./temporary/fileB.txt',
                `Here is the result :\n ${first} \n ${second}\n ${third} \n`, 
                (err, data) => {
                    if (err) {
                        console.log(err)
                        return
                      }
                      console.log(`Updated! Here are the contents :\n ${first} \n ${second}\n ${third}`);
                })
        })
    })
}) 