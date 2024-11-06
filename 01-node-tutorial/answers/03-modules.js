/** Using require statements, from the 03-modules.js file, which is the main program. */

//set require statements equal to exported variable name
const nameobj = require("./04-names.js")
const sayHi = require("./05-utils.js")
const data = require("./06-alternative-flavor.js")
require("./07-mind-grenade.js")

// sayHi returns a string and each parameter passed to 
sayHi(nameobj.name1)
sayHi(nameobj.name2)
sayHi(nameobj.name3)
sayHi("Phenix")

//tests
console.log(data)