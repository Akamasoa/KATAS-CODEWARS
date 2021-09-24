/*
  Title:
    Array plus array
  Description:
    I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements.
    I'll appreciate for your help.
  Notes:
    Each array includes only integer numbers. Output is a number too.
  Kata Link:
    https://www.codewars.com/kata/array-plus-array
  Discuss Link:
    https://www.codewars.com/kata/array-plus-array/discuss
  Solutions Link:
    https://www.codewars.com/kata/array-plus-array/solutions
*/

// Long Solution
const arrayPlusArray = (array1, array2) =>
  [...array1, ...array2].reduce((total, value) => total + value, 0);


// Function Export
module.exports = arrayPlusArray

//Test:

const arrayPlusArray = require('.')

test('Test 1', () => {
  expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).toBe(21)
})

test('Test 2', () => {
  expect(arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toBe(-21)
})

test('Test 3', () => {
  expect(arrayPlusArray([0, 0, 0], [4, 5, 6])).toBe(15)
})

test('Test 4', () => {
  expect(arrayPlusArray([100, 200, 300], [400, 500, 600])).toBe(2100)
})
