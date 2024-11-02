

const max = 20;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var amount = getRandomInt(max);

if (amount < 10) {
  console.log(amount + ' is a small number.');
} else {
  console.log(amount + ' is a large number.');
}

console.log(`hey it's my first node app!!! Whoohoo!`)
