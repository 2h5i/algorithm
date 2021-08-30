// 4-4   *** 얘도 나중에 싹 다 지우고 한번 해보기****

/**
 * 생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
 * 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라 고 했습니다.
 * 선생님이 가지고 있는 예산은 한정되어 있습니다.
 * 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
 * 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다.
 *
 */

function solution(m, product) {
  let answer = 0;
  //돈 젤 적게 드는순으로 정리해
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  // 하나하나씩 어느걸 할인으로 넣어야 젤 싸게 먹힐지 비교할거다
  for (let i = 0; i < product.length; i++) {
    // 할인받은가격 뺀돈
    let money = m - (product[i][0] / 2 + product[i][1]);

    // 몇명꺼 사줄 수 있는지 셀꺼임
    let cnt = 1;

    // 이제 할인받은애 말고 나머지들 돌려서 돈 되는데까지 사줄꺼(위에서 sort해서 싼거부터 돌렸기떄문에 순서대로 돌림면된다.)
    for (let j = 0; j < product.length; j++) {
      // i!==j 일딴 나랑은 같은애는 안되고 , 예산보다 넘치는애면 멈춘다 / 예산 안에서 되면 가진 돈에서 돈까고 갯수 하나씩 늘려줌
      if (i !== j && product[j][0] + product[j][1] > money) break;
      if (i !== j && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    //한명한명씩 돌면서 몇개가 최대치인지 알아낼것
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));

// function solution(m, product) {
//   let answer = 0;
//   let n = product.length;
//   product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

//   for (let i = 0; i < n; i++) {
//     let money = m - (product[i][0] / 2 + product[i][1]);
//     let cnt = 1;
//     for (let j = 0; j < n; j++) {
//       if (j !== i && product[j][0] + product[j][1] > money) break;
//       if (j !== i && product[j][0] + product[j][1] <= money) {
//         money -= product[j][0] + product[j][1];
//         cnt++;
//       }
//     }
//     answer = Math.max(answer, cnt);
//   }
//   return answer;
// }
