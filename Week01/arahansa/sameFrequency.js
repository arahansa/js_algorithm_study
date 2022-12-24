/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 *
 * Your solution MUST have the following complexities:
 *
 * Time: O(N)
 *
 * Sample Input:
 *
 * sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22,222) // false
 */


export function sameFrequency(a, b){
  const strA = a.toString();
  const strB = b.toString();
  if(strA.length !== strB.length){
    return false
  }


}
