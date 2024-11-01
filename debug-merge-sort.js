const merge = (arr1, arr2) => {
  let mergedArr = [];
  let arr1Start = 0;
  let arr2Start = 0;
  console.log(arr1, arr2);
  if (arr1.length === 1) {
    if (arr1[0] <= arr2[0]) {
      return [...arr1, ...arr2];
    } else if (arr1[0] >= arr2.at(-1)) {
      return [...arr2, ...arr1];
    } else {
      for (let i = 1; i < arr2.length; i++) {
        if (arr1[0] < arr2[i]) {
          return [...arr2.slice(0, i), arr1[0], ...arr2.slice(i)];
        }
      }
    }
  }
  if (arr2.length === 1) {
    if (arr2[0] <= arr1[0]) {
      return [...arr2, ...arr1];
    } else if (arr2[0] >= arr1.at(-1)) {
      return [...arr1, ...arr2];
    } else {
      for (let i = 1; i < arr1.length; i++) {
        if (arr2[0] < arr1[i]) {
          return [...arr2.slice(0, i), arr1[0], ...arr2.slice(i)];
        }
      }
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = arr2Start; j < arr2.length; j++) {
      if (arr1[i] <= arr2[j]) {
        mergedArr.push(arr1[i]);
        arr1Start++;
        if (arr1Start !== arr1.length) break;
      } else {
        mergedArr.push(arr2[j]);
        arr2Start++;
      }
      if (arr1.length === arr1Start) {
        return [...mergedArr, ...arr2.slice(arr2Start)];
      } else if (arr2.length === arr2Start) {
        return [...mergedArr, ...arr1.slice(arr1Start)];
      }
    }
  }
  return mergedArr;
};
const mergeSort = (nums) => {
  if (nums.length >= 2) {
    return merge(
      mergeSort(nums.slice(0, Math.floor(nums.length / 2))),
      mergeSort(nums.slice(Math.floor(nums.length / 2)))
    );
  } else {
    return nums;
  }
};

console.log(
  mergeSort([
    10, 5, 3, 8, 2, 6, 4, 7, 9, 1, 16, 12, 14, 11, 13, 15, 34, 53, 2, 32, 5, 33,
    55, 11, 1,
  ])
);
