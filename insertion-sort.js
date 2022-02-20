/* 

삽입 정렬
const array = [5,2,9,3,8,1,0,7,4,6]

두번째 수부터 전체를 돌며
앞 수와 두번째 수를 비교하여 두번째 수가 더 작으면
두번째 수보다 큰 수 앞으로 위치 이동

세번째 수부터 전체를 돌며
앞 수들과 세번째 수를 비교하여
세번째 수가 더 작으면 세번째 수보다 큰 수 앞으로 위치 이동

*/

const array = [5,2,9,3,8,1,0,7,4,6];

for (let i = 1; i < array.length; i++) {
  for (let j = i - 1; j >= 0; j--) {
    if (array[i] < array[j]) {
      const temp = array.splice(i, 1);
      array.unshift(temp);
    }
  }
}