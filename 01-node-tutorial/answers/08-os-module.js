/** This should load the built-in os Node module 
 * and display some interesting information from the resulting object. */

const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds 
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

//diplays local machine's current OS information
console.log(currentOS)