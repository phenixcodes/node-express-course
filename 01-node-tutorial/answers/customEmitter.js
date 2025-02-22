/** Create one or several emitters. 
 * Then use the emitter .on function to handle the events you will emit, 
 * logging the parameters to the screen. 
 * Then use the emitter .emit function to emit several events, with one or several parameters,
 *  and make sure that the events are logged by your event handlers */

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// intialize `Date` object
const today = new Date();

// get the current date and time as a string
const getDate = today.toLocaleString();


customEmitter.on('date_time', (setDate) => {
    console.log(`Today is ${setDate}`)
})

customEmitter.emit('date_time', getDate)