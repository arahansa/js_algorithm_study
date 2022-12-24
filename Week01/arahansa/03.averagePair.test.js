import { averagePair } from "./03.averagePair";

/**
 * averagePair([1,2,3],2.5) // true
 * averagePair([1,3,3,5,6,7,10,12,19],8) // true
 * averagePair([-1,0,3,4,5,6], 4.1) // false
 * averagePair([],4) // false
 */
test("areThereDuplicates 문제", () => {
  expect(averagePair([1, 2, 3], 2.5)).toBeTruthy();
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBeTruthy();
  expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBeFalsy();
  expect(averagePair([], 4)).toBeFalsy();
});
