/**
 * Sliding Window - maxSubarraySum
 * Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
 *
 * Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 *
 * maxSubarraySum([100,200,300,400], 2) // 700
 * maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
 * maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
 * maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
 * maxSubarraySum([2,3], 3) // null
 * Constraints:
 *
 * Time Complexity - O(N)
 *
 * Space Complexity - O(1)
 */

export function maxSubarraySum(arr, cntSubArr) {
  /** 가드 **/
  if (arr.length < cntSubArr) {
    return null;
  }
  /** Max 초기화 **/
  let max = 0;
  let tempMax = 0;
  for (let i = 0; i < cntSubArr; i++) {
    max += arr[i];
  }
  tempMax = max;
  /**
   * 슬라이딩 윈도우 인덱스 값들
   * -----------------------
   * 0, 1
   * 1, 2 ( 0 버리고 2 얻어 )
   * 2, 3 ( 1 버리고 3 얻어 )
   * -----------------------
   * 0, 1, 2, 3
   * 1, 2, 3, 4 ( 0 버리고 4 얻어 )
   * 2, 3, 4, 5
   * ...중략...
   * 마지막 :: 5, 6, 7, 8 ( 4 버리고 8 얻어 )
   *
   */
  let idxFirst = 0;
  let idxLast = cntSubArr;
  while (idxLast < arr.length) {
    const minusValue = arr[idxFirst];
    tempMax = tempMax - minusValue + arr[idxLast];
    max = tempMax > max ? tempMax : max;
    idxFirst++;
    idxLast++;
  }
  return max;
}
