/**04-names.js should export multiple values in an object that you will require in 03-module.js. */

//name object hold 3 names to be printed by the sayHi function
const nameobj = {
    name1: "John",
    name2: "Mary", 
    name3: "Alex",
};

//exporting
module.exports = nameobj

//test print
//console.log(`Hi there ${nameobj.name1}, ${nameobj.name2}, & ${nameobj.name3} !`)