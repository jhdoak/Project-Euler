/* A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers. */

var largestPalindrome = 0;

for (var i = 100; i < 1000; i++){
  for (var j = 100; j < 1000; j++){
    var testProduct = i*j;
    var testReverse = Number(((testProduct).toString()).split('').reverse().join(''));
    if (testProduct === testReverse && testProduct > largestPalindrome){
      largestPalindrome = testProduct;
    }
  }
}

console.log(largestPalindrome);
