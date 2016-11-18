/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/



function isDivisible1to10(number, limit) {
  if (number < limit) {
    return false;
  }
  for (var i = 1; i <= limit; i++) {
    if (number % i !== 0) {
      return false;
    }
  }
  return true;
}

var i = 1;
var isDivisible = false
var smallestDivisible;

while (!isDivisible) {
  if (isDivisible1to10(i, 20)) {
    isDivisible = true;
    smallestDivisible = i;
  }
  i++;
}

console.log(smallestDivisible);
