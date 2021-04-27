// Convert a number from 1-4999 into a roman numeral
// 1-10 --DONE
// 10-39 --DONE
// 40-100
const ROMAN_NUMERALS = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "C",
  900: "CM",
  1000: "M",
};

function convertToRoman(num) {
  if (ROMAN_NUMERALS[num]) return ROMAN_NUMERALS[num];

  let romanNumeral = "";
  const multiplesOfTen = [1000, 100, 10, 1];
  const divisor = multiplesOfTen.find((e) => e < num);
  const remainder = num % divisor;
  const multiplier = Math.floor(num / divisor);

  for (let i = 0; i < multiplier; i++) {
    romanNumeral += "X";
  }

  return romanNumeral + ROMAN_NUMERALS[remainder];
}

module.exports = convertToRoman;
