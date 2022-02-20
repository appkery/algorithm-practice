/* 
  퀵 정렬
  const array = [5,2,9,3,8,1,0,7,4,6]

  첫번째 위치를 피벗으로 잡고
  두번째 수부터 피벗보다 큰 수를 찾고
  뒤에서 첫번째 수부터 피벗보다 작은 수를 찾아
  그 둘을 바꾸고

  세번째 수부터 피벗보다 큰 수를 찾고
  뒤에서 두번째 수부터 피벗보다 작은 수를 찾아
  그 둘을 바꾸고

  그렇게 반복하다가
  피벗보다 큰 수와 피벗보다 작은 수의 위치가 엇갈리면
  피벗과 피벗보다 작은 수를 바꾸고

  피벗을 기준으로 왼쪽과 오른쪽에서 각각
  첫번째 수를 피벗으로 잡고
  두번째 수부터 피벗보다 큰 수를 찾고
  뒤에서 첫번째 수부터 피벗보다 작은 수를 찾아
  그 둘을 바꾸고
  ...
*/

const array = [5,2,9,3,8,1,0,7,4,6];
let pivot = 0;
let left = 0;
let right = 0;

const quick = (function (start, end) {
  for (let j = start; j < end; j++) {
    for (let i = j + 1; i < end; i++) {
      if (array[pivot] < array[i]) {
        left = i;
      }
    }

    for (let i = end; i >= j + 1; i--) {
      if (array[pivot] > array[i]) {
        right = i;
      }
    }

    if (left < right) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
    } else {
      const temp = array[pivot];
      array[pivot] = array[left];
      array[left] = temp;

      quick(0, pivot - 1);
      quick(pivot + 1, array.length);
    }
  }
})(0, array.length);
