// FCC JS Challenge: Caesars Cipher

// OBJECTIVE:
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All tests pass on FCC
function rot13(str) {
  const capsAlphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  let decodedStr = "";

  for (const l of str) {
    const offset = (capsAlphabet.indexOf(l) + 13) % 26;

    if (capsAlphabet.includes(l)) {
      decodedStr += capsAlphabet[offset];
    } else {
      decodedStr += l;
    }
  }
  return decodedStr;
}

console.log(rot13("SERR YBIR?")); // "FREE LOVE?"
