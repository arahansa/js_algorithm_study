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
import { convertNumStr2CounterObj } from "./util/frequencyCounter";

export function sameFrequency(a, b){
  if(a.toString().length !== b.toString().length)
    return false;

  const objA = convertNumStr2CounterObj(a);
  const objB = convertNumStr2CounterObj(b);
  for(let key in objA){
    if(objA[key] !== objB[key])
      return false;
  }
  return true;
}
