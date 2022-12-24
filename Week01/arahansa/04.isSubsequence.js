/**
 * Multiple Pointers - isSubsequence
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 *
 * Examples:
 *
 * isSubsequence('hello', 'hello world'); // true
 * isSubsequence('sing', 'sting'); // true
 * isSubsequence('abc', 'abracadabra'); // true
 * isSubsequence('abc', 'acb'); // false (order matters)
 * Your solution MUST have AT LEAST the following complexities:
 *
 * Time Complexity - O(N + M)
 *
 * Space Complexity - O(1)
 */

export function isSubsequence(str1, str2) {
  let idx2Start = 0;
  for (let idx1 = 0; idx1 < str1.length; idx1++) {
    for (let idx2 = idx2Start; idx2 < str2.length; idx2++) {
      // 같은 문자열 발생한 경우
      if (str1[idx1] === str2[idx2]) {
        // 첫번째 문자열의 인덱스가 마지막 문자열이라면 true 종료
        if (idx1 === str1.length - 1) {
          return true;
        }
        // 아직 끝나지 않았는데 두번째 문자열의 마지막 위치라면 실패
        if (idx2 === str2.length - 1) {
          return false;
        }
        // 그 외의 경우는 idx2Start 다음지점부터 찾게 처리하고 break;
        idx2Start = idx2 + 1;
        break;
      }
    }
  }
  return true;
}
