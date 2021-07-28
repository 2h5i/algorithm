// 2-6

/**
 * 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
 [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]
N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.
 * 
 * 
 */

function solution(arr) {
  let answer = 0,
    num1 = 0,
    num2 = 0,
    num3 = 0,
    num4 = 0;

  for (let i = 0; i < arr.length; i++) {
    num3 = 0;
    num4 = 0;

    for (let j = 0; j < arr.length; j++) {
      num3 += arr[i][j]; // 가로
      num4 += arr[j][i]; // 세로
    }
    num1 += arr[i][i]; // ㄷㅐ각선 \
    num2 += arr[i][arr.length - i - 1]; // 대각선 /

    answer = Math.max(answer, num1, num2, num3, num4);
  }
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
