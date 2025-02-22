/** 05-utils.js should export a single value, which is a function you will call in 03-modules.js.*/

// say?Hi is a function that takes in a parameter and prints out the name
const sayHi = (names) => {
    console.log(`Hi there, ${names}!`)
}

module.exports = sayHi