// Runtime Complexity: O(n^2)
const isPangram = (string) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const lowercaseString = string.toLowerCase();
  
  for(let i = 0; i < alphabet.length; i++) {
    if (!lowercaseString.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));