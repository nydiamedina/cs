// Runtime Complexity: O(n)
// Space Complexity: O(n)
const findLongestWord = (arr) => {
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    let currLength = arr[i].length;

    if (maxLength < currLength) {
      maxLength = currLength;
    }
  }

  return maxLength;
}

console.log(findLongestWord(["hi", "hello"]));