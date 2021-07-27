//1
/*
    100 이하의 세 자연수 입력 받은 후 가장 작은 숫자 출력
    (정렬 사용 X)

*/
function solution(a, b, c) {
  let answer = a;
  if (answer > b) answer = b;
  if (answer > c) answer = c;
  return answer;
}

console.log(solution(2, 5, 1));
