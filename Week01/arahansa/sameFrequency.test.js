import { sameFrequency } from "./sameFrequency";

/**
 * sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22,222) // false
 */
test('sameFrequency(22,222) 은 거짓이다.', () => {
  expect(sameFrequency(182,281)).toBeTruthy();
  expect(sameFrequency(34,14)).toBeFalsy();
  expect(sameFrequency(3589578,5879385)).toBeTruthy();
  expect(sameFrequency(22,222)).toBeFalsy();
});
