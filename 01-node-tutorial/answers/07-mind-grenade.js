/** 07-mind-grenade.js may not export anything, but it should contain a function that logs something to the console. 
 * You should then call that function within the code of 07-mind-grenade.js. 
 * This is to demonstrate that when a module is loaded with a require statement, 
 * anything in the mainline code of the loaded module runs. */

const num1 = 5
const num2 = 9

function addValues() { 
    console.log(`The sum is : ${num1 + num2}`)
}

addValues()