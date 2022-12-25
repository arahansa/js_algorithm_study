/**
 * Sliding Window - findLongestSubstring
 * Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
 *
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('thecatinthehat') // 7
 * findLongestSubstring('bbbbbb') // 1
 * findLongestSubstring('longestsubstring') // 8
 * findLongestSubstring('thisishowwedoit') // 6
 * Time Complexity - O(n)
 */


import { findLongestSubstring } from "./07.findLongestSubstring";

describe('findLongestSubstring', () => {
  test('returns 0 for an empty string', () => {
    expect(findLongestSubstring('')).toEqual(0);
  });

  test('returns the length of the longest substring without repeating characters for non-empty strings', () => {
    expect(findLongestSubstring('rithmschool')).toEqual(7);
    expect(findLongestSubstring('thisisawesome')).toEqual(6);
    expect(findLongestSubstring('thecatinthehat')).toEqual(7);
    expect(findLongestSubstring('bbbbbb')).toEqual(1);
    expect(findLongestSubstring('longestsubstring')).toEqual(8);
    expect(findLongestSubstring('thisishowwedoit')).toEqual(6);
  });
});
