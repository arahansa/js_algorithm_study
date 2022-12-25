/**
 * Sliding Window - minSubArrayLen
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
 *
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
 * Examples:
 *
 * minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
 * minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
 * minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
 * minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
 *
 * Time Complexity - O(n)
 *
 * Space Complexity - O(1)
 */



// [2,3,1,2,4,3], 7

/**
 * level 1: 2, 3, 1, 2, 4, 3 = 6개
 * lelel 2: [2,3] [3,1] [1,2], [2,4], [4,3] = 5개
 * level 3: [2,3,1] [3,1,2], [1,2,4], [2,4,3] = 4개
 * level 4: [2,3,1,2] [3,1,2,4], [1,2,4,3] = 3개
 * level 5: [2,3,1,2,4] [3,1,2,4,3]
 * level 6: [2,3,1,2,4,3]
 * @param arr
 * @param target
 * @returns {number}
 */

class 진화실패에러 extends Error{
  constructor(props) {
    super("진화실패 에러 : 나는 소멸할 운명..");
  }
}


class 슬라임{

  constructor(인덱스, 숫자합) {
    this.인덱스 = 인덱스;
    this.숫자합 = 숫자합;
    this.오른쪽인덱스 = 인덱스; // 초기에는 현재 인덱스로..
    this.히스토리 = `생성(${숫자합})`;
  }

  진화한다(배열, 목표값){
    this.오른쪽인덱스++;
    const 현재배열값 = 배열[this.오른쪽인덱스];
    if(현재배열값){
      this.숫자합 = this.숫자합 + 현재배열값;
      this.히스토리 += `+${현재배열값}`;
      if(this.숫자합 >= 목표값){
        return true;
      }
      return false;
    }
    throw new 진화실패에러();
  }
}

class 영웅슬라임생성기{

  constructor(타깃, 참조배열) {
    this.현재난이도 = 1;
    this.슬라임통 = {};
    this.슬라임통[this.현재난이도] = {};
    this.타깃 = 타깃;
    this.한계레벨 = 참조배열.length;
    this.참조배열 = 참조배열;
  }

  집여넣기(슬라임){
    this.슬라임통[this.현재난이도][슬라임.인덱스] = 슬라임;
  }

  슬라임들진화시키기(){
    const 다음난이도 = this.현재난이도 + 1;
    this.슬라임통[다음난이도] = {};
    console.log('현재 슬라임들 :', this.슬라임통[this.현재난이도]);

    for(let 슬라임인덱스 in this.슬라임통[this.현재난이도]){
      const 슬라임 = this.슬라임통[this.현재난이도][슬라임인덱스];
      console.log('진화할 슬라임 :', 슬라임인덱스, 슬라임);
      try{
        if(슬라임.진화한다(this.참조배열, this.타깃)){
          console.log('나의 진화 스토리 : '+슬라임.히스토리);
          this.현재난이도++;
          return this.현재난이도;
        }
        this.슬라임통[다음난이도][슬라임인덱스] = 슬라임;
      }catch(e){
        if(e instanceof 진화실패에러){
          console.log('에러가 발생?', e);
        }
      }
    }
    console.log('살아남은 슬라임들 : ', this.슬라임통[다음난이도]);
    this.현재난이도++;
    if(this.현재난이도 > this.한계레벨)
      throw new 진화실패에러()
    return false;
  }
}

export function minSubArrayLen(배열, 타깃) {

  const 슬라임관리자 = new 영웅슬라임생성기(타깃, 배열);

  for(let 인덱스 = 배열.length -1;인덱스 >= 0;인덱스--){
    // 1차수에서 발생시 탈출
    const 현재값 = 배열[인덱스];
    if(현재값 > 타깃) return 1;

    // 1차수에서도 발생안하면 슬라임 굽기
    const 갓생성한_슬라임 = new 슬라임(인덱스, 현재값);
    슬라임관리자.집여넣기(갓생성한_슬라임);
  }
  console.log('슬라임관리자의 슬라임들 ' , 슬라임관리자.슬라임통);

  try{
    // 슬라임들 구워서 진화에서 true 발생하면 성공한 거심.
    while(!슬라임관리자.슬라임들진화시키기()){}
    return 슬라임관리자.현재난이도;
  }catch(e){
    console.log('관리자 마저도 낙오하다니..');
    return 0;
  }
}

