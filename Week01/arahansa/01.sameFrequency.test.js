import { sameFrequency } from "./01.sameFrequency";

/**
 * sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22,222) // false
 */
test('sameFrequency(22,222) 은 거짓이다.', () => {
  expect(sameFrequency(182,281)).toBe(true);
  expect(sameFrequency(34,14)).toBe(false);
  expect(sameFrequency(3589578,5879385)).toBe(true);
  expect(sameFrequency(22,222)).toBe(false);
});
