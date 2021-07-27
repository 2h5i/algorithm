// 4

/*
    자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
*/

// 내가 짠것
function solution(n) {
  return (n * (n + 1)) / 2;
}

console.log(solution(10));

// 강의에 있던것
function solution2(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }

  return answer;
}

console.log(solution2(10));
