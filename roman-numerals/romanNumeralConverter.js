// All test pass on FCC
const numerals = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

function convertToRoman(num) {
  const baseValues = Object.keys(numerals)
    .map((n) => +n)
    .reverse();
  let quotient, divisor;
  let romanNum = "";

  while (num > 0) {
    divisor = baseValues.find((n) => n <= num);
    quotient = Math.floor(num / divisor);
    num %= divisor;

    for (let i = 0; i < quotient; i++) {
      romanNum += numerals[divisor];
    }
  }

  return romanNum;
}

module.exports = convertToRoman;
