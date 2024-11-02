function radixSort(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  const buckets = Math.floor(Math.log10(max));
  for (let i = 0; i <= buckets; i++) {
    console.log(i);
    if (i === 0) {
      arr.sort((a, b) => (a % 10) - (b % 10));
    } else if (i === buckets) {
      arr.sort(
        (a, b) => Math.floor(a / 10 ** buckets) - Math.floor(b / 10 ** buckets)
      );
    } else {
      arr.sort((a, b) => {
        return (
          (a % 10 ** (i + 1)) -
          (a % 10 ** (i - 1)) -
          ((b % 10 ** (i + 1)) - (b % 10 ** (i - 1)))
        );
      });
    }
  }
  return arr;
}
console.log(
  radixSort([
    20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
    3000, 3001, 1200, 633,
  ])
);
