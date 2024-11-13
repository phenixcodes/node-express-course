 /**It should create a read stream for the big file (../content/big.txt) 
  * with encoding of "utf8" and a highWaterMark of 200. 
  * The highWaterMark is the maximum amount of bytes that node will 
  * read with each chunk of the stream. The program should initialize a counter to 0. 
  * Then it should handle the “data” event for the stream by incrementing the counter 
  * and logging the event result to the screen. Then it should handle the “end” event 
  * by reporting the number of chunks received. Finally, it should handle the stream 
  * “error” event by logging the error to the console. 
  * Test the program for several values of highWaterMark.  */

const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {encoding:'utf8', highWaterMark: 1200});
var counter = 0
 stream.on('data', (result) => {
    counter++
    console.log(result)
    console.log(counter)
  })
  stream.on('end', (result) => {
    console.log("The number of chunks")
    console.log(counter)
  })
  stream.on('error', (err) => console.log(err))
