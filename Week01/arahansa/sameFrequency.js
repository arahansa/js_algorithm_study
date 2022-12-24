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
  const aStr = a.toString();
  const bStr = b.toString();
  if(aStr.length !== bStr.length)
    return false;

  const objA = convertNumStr2CounterObj(aStr);
  const objB = convertNumStr2CounterObj(bStr);
  for(let key in objA){
    if(objA[key] !== objB[key])
      return false;
  }
  return true;
}
