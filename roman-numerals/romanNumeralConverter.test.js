// Test suite copied from FCC website
const convertToRoman = require("./romanNumeralConverter");

describe("convertToRoman", () => {
  test("convertToRoman(2) should return the string II", () => {
    expect(convertToRoman(2)).toBe("II");
  });
  test("convertToRoman(3) should return the string III", () => {
    expect(convertToRoman(3)).toBe("III");
  });
  test("convertToRoman(4) should return the string IV", () => {
    expect(convertToRoman(4)).toBe("IV");
  });
  test("convertToRoman(5) should return the string V", () => {
    expect(convertToRoman(5)).toBe("V");
  });
  test("convertToRoman(9) should return the string IX", () => {
    expect(convertToRoman(9)).toBe("IX");
  });
  test("convertToRoman(12) should return the string XII", () => {
    expect(convertToRoman(12)).toBe("XII");
  });
  test("convertToRoman(16) should return the string XVI", () => {
    expect(convertToRoman(16)).toBe("XVI");
  });
  test("convertToRoman(29) should return the string XXIX", () => {
    expect(convertToRoman(29)).toBe("XXIX");
  });
});

// All tests pass on FCC. Too lazy to write out the rest here...

/*
convertToRoman(44) should return the string XLIV.

convertToRoman(45) should return the string XLV.

convertToRoman(68) should return the string LXVIII

convertToRoman(83) should return the string LXXXIII

convertToRoman(97) should return the string XCVII

convertToRoman(99) should return the string XCIX

convertToRoman(400) should return the string CD

convertToRoman(500) should return the string D

convertToRoman(501) should return the string DI

convertToRoman(649) should return the string DCXLIX

convertToRoman(798) should return the string DCCXCVIII

convertToRoman(891) should return the string DCCCXCI

convertToRoman(1000) should return the string M

convertToRoman(1004) should return the string MIV

convertToRoman(1006) should return the string MVI

convertToRoman(1023) should return the string MXXIII

convertToRoman(2014) should return the string MMXIV

convertToRoman(3999) should return the string MMMCMXCIX
*/
