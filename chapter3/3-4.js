// 3-4

/**
 *
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열
 * s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.
 */

function solution(s, t) {
  let answer = [];
  let cnt = 0;
  for (let str of s) {
    if (str === t) {
      cnt = 0;
      answer.push(cnt);
    } else {
      cnt++;
      answer.push(cnt);
    }
  }
  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] === t) {
      cnt = 0;
    } else {
      cnt++;

      answer[i] = Math.min(answer[i], cnt);
    }
  }
  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
