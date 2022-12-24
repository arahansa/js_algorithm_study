/**
 * number, string 을 받아서 FrequnceCounter 용도로 변환
 * @param param
 * @returns {{}}
 */
export const convertNumStr2CounterObj = (param) => {
  const strParam =  param?.toString() || '';
  const obj = {};
  for(let c of strParam){
    obj[c] = ++obj[c] || 1;
  }
  return obj;
}
