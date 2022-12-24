import { DuplicateError } from "./DuplicateError";

/**
 * iterable 을 받아서 FrequncyCounter 용도의 객체로 변환
 * 하지만.. 이것저것 욕심이 많아지는 함수일지도.. ㅋ
 *
 * @param param
 * @returns {{}}
 */
export const convertNumStr2CounterObj = (iterable, allowOnlyOne=false) => {
  const obj = {};
  for(let c of iterable){
    obj[c] = ++obj[c] || 1;
    // areThereDuplicates 에서 추가됨.
    if(allowOnlyOne && obj[c] > 1){
      throw new DuplicateError();
    }
  }
  return obj;
}
