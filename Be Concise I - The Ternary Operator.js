/*
Title:
  Be Concise I - The Ternary Operator
Description:
    You are given a function describeAge that takes a parameter age (which will always be a positive integer) and does the following:
    If the age is 12 or lower, it return "You're a(n) kid"
    If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
    If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
    If the age is 65 or above, it return "You're a(n) elderly"
    Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.
    I'll give you a few hints:
    The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
    Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
    Whatever you do, do not change what the function does. Good luck :)
*/

//Long Solution:

const describeAge = age =>{
  let lifeStage = 'elderly';

  if (age <= 64) lifeStage =  'adult';
  if (age <= 17) lifeStage = 'teenager';
  if (age <= 12) lifeStage = 'kid';

  return `You’re a(n) ${lifeStage}`;
}

// Function Export
module.exports = describeAge

//Test:

const describeAge = require('.')

test('Test 1', () => {
  expect(describeAge(9)).toBe("You’re a(n) kid")
})

test('Test 2', () => {
  expect(describeAge(10)).toBe("You’re a(n) kid")
})

test('Test 3', () => {
  expect(describeAge(11)).toBe("You’re a(n) kid")
})

test('Test 4', () => {
  expect(describeAge(12)).toBe("You’re a(n) kid")
})

test('Test 5', () => {
  expect(describeAge(13)).toBe("You’re a(n) teenager")
})

test('Test 6', () => {
  expect(describeAge(14)).toBe("You’re a(n) teenager")
})

test('Test 7', () => {
  expect(describeAge(15)).toBe("You’re a(n) teenager")
})

test('Test 8', () => {
  expect(describeAge(16)).toBe("You’re a(n) teenager")
})

test('Test 9', () => {
  expect(describeAge(17)).toBe("You’re a(n) teenager")
})

test('Test 10', () => {
  expect(describeAge(18)).toBe("You’re a(n) adult")
})

test('Test 11', () => {
  expect(describeAge(19)).toBe("You’re a(n) adult")
})

test('Test 12', () => {
  expect(describeAge(63)).toBe("You’re a(n) adult")
})

test('Test 13', () => {
  expect(describeAge(64)).toBe("You’re a(n) adult")
})

test('Test 14', () => {
  expect(describeAge(65)).toBe("You’re a(n) elderly")
})

test('Test 15', () => {
  expect(describeAge(66)).toBe("You’re a(n) elderly")
})

test('Test 16', () => {
  expect(describeAge(100)).toBe("You’re a(n) elderly")
})
