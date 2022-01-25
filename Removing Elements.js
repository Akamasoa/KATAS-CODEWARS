/*
Title:
  Removing Elements
  
Description:
  Take an array and remove every second element out of that array.
  Always keep the first element and start removing with the next element.

Examples:
  myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
*/

// Long Solution:
const removeEveryOther = array => array.filter((_, i) => i % 2 === 0);
