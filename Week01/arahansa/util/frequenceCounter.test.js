import { convertNumStr2CounterObj } from "./frequencyCounter";

describe('convertNumStr2CounterObj 테스트', () => {

  test('convertNumStr2CounterObj 정상 결과', () => {
    expect(convertNumStr2CounterObj(1234)).toEqual({'1':1, '2': 1, '3':1, '4': 1});
    expect(convertNumStr2CounterObj(1224)).toEqual({'1':1, '2': 2,  '4': 1});
  });

  test('convertNumStr2CounterObj 빈 값 결과', () => {
    expect(convertNumStr2CounterObj()).toEqual({});
  });

})


