// 9

/*
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
*/

function solution(s) {
  return s.replace(/A/g, '#');
}

let str = 'BANANA';
console.log(solution(str));