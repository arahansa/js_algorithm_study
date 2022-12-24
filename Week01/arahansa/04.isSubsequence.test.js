import { averagePair } from "./03.averagePair";
import { isSubsequence } from "./04.isSubsequence";



/**
 * isSubsequence('hello', 'hello world'); // true
 * isSubsequence('sing', 'sting'); // true
 * isSubsequence('abc', 'abracadabra'); // true
 * isSubsequence('abc', 'acb'); // false (order matters)
 */
test("areThereDuplicates 문제", () => {
  expect(isSubsequence('hello', 'hello world')).toBe(true);
  expect(isSubsequence('sing', 'sting')).toBe(true);
  expect(isSubsequence('abc', 'abracadabra')).toBe(true);
  expect(isSubsequence('abc', 'acb')).toBe(false);
});
