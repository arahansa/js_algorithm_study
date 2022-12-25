import { areThereDuplicates } from "./02.areThereDuplicates";

/**
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areThereDuplicates('a', 'b', 'c', 'a') // true
 */
test('areThereDuplicates 문제', () => {
  expect(areThereDuplicates(1, 2, 3)).toBe(false);
  expect(areThereDuplicates(1, 2, 2)).toBe(true);
  expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
});
