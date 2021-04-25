// Test suite copied from FCC website
const palindrome = require('./palindromeChecker');

test('eye', () => {
  expect(palindrome('eye')).toBe(true);  
});
test('_eye', () => {
  expect(palindrome('_eye')).toBe(true);  
});
test('race car', () => {
  expect(palindrome('race car')).toBe(true);  
});
test('is not a palindrome', () => {
  expect(palindrome('is not a palindrome')).toBe(false);  
});
test('A man, a plan, a canal. Panama', () => {
  expect(palindrome('A man, a plan, a canal. Panama')).toBe(true);  
});
test('never odd or even', () => {
  expect(palindrome('never odd or even')).toBe(true);  
});
test('nope', () => {
  expect(palindrome('nope')).toBe(false);  
});
test('almostomla', () => {
  expect(palindrome('almostomla')).toBe(false);  
});
test('My age is 0, 0 si ega ym.', () => {
  expect(palindrome('My age is 0, 0 si ega ym.')).toBe(true);  
});
test('1 eye for of 1 eye.', () => {
  expect(palindrome('1 eye for of 1 eye.')).toBe(false);  
});
test('0_0 (: /-\ :) 0-0', () => {
  expect(palindrome('0_0 (: /-\ :) 0-0')).toBe(true);  
});
test('five|\_/|four', () => {
  expect(palindrome('five|\_/|four')).toBe(false);  
});

