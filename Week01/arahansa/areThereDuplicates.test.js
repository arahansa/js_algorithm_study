import { sameFrequency } from "./sameFrequency";
import { areThereDuplicates } from "./areThereDuplicates";

/**
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areThereDuplicates('a', 'b', 'c', 'a') // true
 */
test('areThereDuplicates 문제', () => {
  expect(areThereDuplicates(1, 2, 3)).toBeFalsy();
  expect(areThereDuplicates(1, 2, 2)).toBeTruthy();
  expect(areThereDuplicates('a', 'b', 'c', 'a')).toBeTruthy();
});
