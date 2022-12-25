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

/**
 * r i t h m s c h
 * t h i s (i), s i ( s ), i s a w e ( s ) o m, a w e  s  o m
 * @param str
 * @returns {number}
 */


export function findLongestSubstring(str) {
  if (str.length === 0) {
    return 0;
  }

  let startingIndex = 0;
  let max = 1;

  while(startingIndex<str.length){
    const obj = {};
    let count = 0;
    for(let i = startingIndex;i<str.length; i++){
      const c = str[i];
      if(obj.hasOwnProperty(c)){
        max = count > max ? count : max;
        startingIndex = obj[c];
        break;
      }else{
        obj[c] = i;
        startingIndex = i;
        count++;
      }
    }
    max = count > max ? count : max;
    startingIndex++;
  }
  return max;
}
