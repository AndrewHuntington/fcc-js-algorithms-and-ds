// FCC JS Challenge: Palindrome Checker

// OBJECTIVE:
// Return true if the given string is a palindrome. Otherwise, return false
// NOTE: Ignores non-alphanumeric characters

// Passes all tests on FCC
function palindrome(str) {
  const regex = /[^a-zA-Z0-9]/g;
  const phrase = str.replace(regex, "").toLowerCase();
  const reversed = [...phrase].reverse().join("");

  return phrase === reversed;
}

module.exports = palindrome;
