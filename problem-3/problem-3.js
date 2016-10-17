/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143? */

///////////////////////////////////////
// THIS SOLUTION IS CURRENTLY BROKEN //
///// AND IN NEED OF REFACTORING //////
///////////////////////////////////////

var isFactor = function(mainNum, possibleFactor){
  var factorTest = false;
  if (mainNum % possibleFactor === 0) {
    factorTest = true;
  }
  return factorTest;
};

var isPrime = function(testNum){
  var primeTest = true;
  var j = 2;
  while (primeTest && j < testNum){
    if (testNum % j === 0) {
      primeTest = false;
    }
  j++;
  }
  return primeTest;
};

var testNumber = 600851475143;
var largestPrime = 1;


for (var i = 3; i <= testNumber; i++){
  if (isFactor(testNumber, i) && isPrime(i)) {
    largestPrime = i;
  }
}
console.log(largestPrime);
