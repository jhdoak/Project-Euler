/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/


// Non-Working, in progress restructuring.

function smallestDivisibleBy1toLimit(limit) {
  var num = limit;
  var isDivisible = false;

  while (!isDivisible) {
    for (var i = 1; i <= limit; i++) {
      if (num % i !== 0) {
        num++;
        break;
      }
      if (num % limit === 0) {
        return num;
      }
    }
  }
}

console.log(smallestDivisibleBy1toLimit(20));




// INITIAL, FUNCTIONAL SOLUTION

// function isDivisible1to10(number, limit) {
//   if (number < limit) {
//     return false;
//   }
//   for (var i = 1; i <= limit; i++) {
//     if (number % i !== 0) {
//       return false;
//     }
//   }
//   return true;
// }

// var i = 1;
// var isDivisible = false
// var smallestDivisible;

// while (!isDivisible) {
//   if (isDivisible1to10(i, 20)) {
//     isDivisible = true;
//     smallestDivisible = i;
//   }
//   i++;
// }

// console.log(smallestDivisible);
