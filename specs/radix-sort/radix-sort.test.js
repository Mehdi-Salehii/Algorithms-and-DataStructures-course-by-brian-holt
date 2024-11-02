/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function radixSort(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  const buckets = Math.floor(Math.log10(max));
  for (let i = 0; i <= buckets; i++) {
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

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
