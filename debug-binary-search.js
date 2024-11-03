function binarySearch(id, array) {
  let result = undefined;
  let currentArr = array;
  console.log(currentArr.length);
  while (!result) {
    const index =
      (currentArr.length / 2) % 1 === 0
        ? currentArr.length / 2
        : Math.floor(currentArr.length / 2) + 1;
    const currentObject = currentArr[index];

    if (currentArr.length === 1) {
      const curObj = currentArr[0];
      return curObj.id === id ? curObj : "Not found";
    }
    if (currentObject.id === id) {
      result = currentObject;
      return result;
    } else if (currentObject.id > id) {
      currentArr = currentArr.slice(0, index);
    } else {
      currentArr = currentArr.slice(index + 1);
    }
  }
}

const lookingFor = { id: 23, name: "Brian" };

const result = binarySearch(23, [
  { id: 1, name: "Sam" },
  { id: 3, name: "Sarah" },
  { id: 5, name: "John" },
  { id: 6, name: "Burke" },
  { id: 10, name: "Simona" },
  { id: 12, name: "Asim" },
  { id: 13, name: "Niki" },
  { id: 15, name: "Aysegul" },
  { id: 17, name: "Kyle" },
  { id: 18, name: "Jem" },
  { id: 19, name: "Marc" },
  { id: 21, name: "Chris" },
  lookingFor,
  { id: 24, name: "Ben" },
]);
console.log(result);
