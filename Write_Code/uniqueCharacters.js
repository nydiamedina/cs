// Runtime Complexity: O(1)
const hasUniqueChars = (string) => {
  const uniqueCharsSet = new Set(string);

  return string.length === uniqueCharsSet.size;
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));