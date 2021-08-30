// 4-3  *********나중에 꼮꼮 다시 다 지우고 풀어봐라 **********

/**
 *
 * 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니 다.
 * 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
 * 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
 * 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
 * M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.
 *
 *
 */

function solution(test) {
  let answer = 0;
  const testCnt = test.length;
  const people = test[0].length;
  for (let i = 1; i <= people; i++) {
    for (let j = 1; j <= people; j++) {
      let cnt = 0;
      for (let k = 0; k < testCnt; k++) {
        let mentor = (mentee = 0);
        for (let l = 0; l < people; l++) {
          if (test[k][l] === i) mentor = l;
          if (test[k][l] === j) mentee = l;
        }
        if (mentor < mentee) cnt++;
      }
      if (cnt === testCnt) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

/**
 *
 * 첫 번째 for문의 인덱스인 i는 멘토가 되는 학생의 번호(1부터 n번까지)
 * 두 번째 for문의 인덱스인 j는 멘티가 되는 학생의 번호(1부터 n번까지)
 * 세 번째 for문의 인덱스인 k는 수학 테스트 번호(0번째 테스트부터 m-1번째 트스트까지)
 * 네 번째 for문의 인덱스인 s는 각 테스트에서의 등수를 의미 (0등부터 n-1등까지)
 * if(test[k][s]===i) pi = s;
 * 위에 코드의 test[k][s]의 값은  k번째 테스트에서 s등을 하는 학생의 번호
 * if(test[k][s]===i) 이 참이되면 s는 i번 학생의 등수가 되는 것이고 그것을 pi에 저장
 * 따라서 pi는 멘토가 되는 i번 학생의 등수
 * 그러면 pj는 멘티가 되는 j번 학생의 등수
 */

//  function solution(test) {
//   let answer = 0;
//   m = test.length;
//   n = test[0].length;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       let cnt = 0;
//       for (let k = 0; k < m; k++) {
//         let pi = (pj = 0);
//         for (let s = 0; s < n; s++) {
//           if (test[k][s] === i) pi = s;
//           if (test[k][s] === j) pj = s;
//         }
//         if (pi < pj) cnt++;
//       }
//       if (cnt === m) answer++;
//     }
//   }
//   return answer;
// }
