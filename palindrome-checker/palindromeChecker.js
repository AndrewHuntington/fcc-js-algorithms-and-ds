// Checks to see if a given string is a palindrome
// Ignores non-alphanumeric characters
// Passes all tests on FCC
function palindrome(str) {
  const regex = /[^a-zA-Z0-9]/g
  const phrase = str.replace(regex, '').toLowerCase();
  const reversed = [...phrase].reverse().join('');
  
  return phrase === reversed;
}

module.exports = palindrome;
