// 4-1

/**
 * N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고,
 * 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요.
 * 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
 * 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
 *
 */

function solution(n, arr) {
  let answer = 0;
  let max = 0;
  for (let number of arr) {
    const digits = number.toString().split('');
    const sum = digits.reduce((acc, cur) => parseInt(acc) + parseInt(cur));
    if (sum >= max) {
      answer = Math.max(answer, number);
    }
    max = Math.max(max, sum);
  }
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
