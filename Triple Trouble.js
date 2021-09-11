/*
Title:
  Triple Trouble

Description:
  Create a function that will return a string that combines all of the letters of the three inputed strings in groups.
  Taking the first letter of all of the inputs and grouping them next to each other.
  Do this for every letter, see example below!

Examples:
    tripleTrouble('aa', 'bb', 'cc')
      // => "abcabc"
  
Notes:
    You can expect all of the inputs to be the same length.
*/

// Long Solution:

const tripleTrouble = (one, two, three) => {
  let string = ''
  for (let i = 0; i < one.length; i++) {
    string += `${one[i]}${two[i]}${three[i]}`
  }
  return string
}

