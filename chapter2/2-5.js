// 2-5

/**
 * 첫 줄에 N(3<=N<=1000)이 입력되고,
 * 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력 된다.
 * 같은 점수가 입력될 경우 높은 등수로 동일 처리한다.
 * 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
 */

function solution(arr) {
  const length = arr.length;
  let answer = Array.from({ length: length }, () => 1);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
