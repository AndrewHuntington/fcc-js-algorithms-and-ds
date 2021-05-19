// FCC JS Challenge: Telephone Number Validator

// OBJECTIVE:
// Return true if the passed string looks like a valid US phone number.

// All tests pass on FCC
function telephoneCheck(str) {
  // Could the regex be cleaned up?
  const regex =
    /^((1))?(\s?)((\(\d{3}\))|(\d{3}))[-|\s]?(\d{3})[-|\s]?(\d{4})$/gm;

  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555")); // true

console.log(telephoneCheck("2 (757) 622-7382")); // false
console.log(telephoneCheck("(6054756961)")); // false
