let counter = 1;
let answer = [];
const fizzBuzz = (num) => {
    for(let i = 1; i < num+1; i++) {
        if(i%3 == 0 && i%5 == 0){
            answer.push("FizzBuzz");
            counter++;
        }
        else if(i%5 == 0) {
            answer.push("Buzz");
            counter++;
        }
        else if(i%3 == 0) {
            answer.push("Fizz");
            counter++;
        }
        else{
            answer.push(counter.toString());
            counter++;
        }
    }
    return answer
};

let print = fizzBuzz(15);

console.log(print)