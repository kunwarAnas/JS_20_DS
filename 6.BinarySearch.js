function binarySearch(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Number(((min + max) / 2).toFixed(0));
    if (arr[mid] < num) {
      min = mid + 1;
    } else if (arr[mid] > num) {
      max = mid - 1;
    } else if (arr[mid] === num) {
      return {
        numIndex: mid,
        element: arr[mid],
      };
    }
  }
}

const res= binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1);
console.log(res);
