/*
Title:
Last

Description:
Find the last element of a list.

Examples:
last( [1,2,3,4] ) // => 4
last( "xyz" )     // => z
last( 1,2,3,4 )   // => 4

Notes:
In javascript and CoffeeScript a list will be
  * an array
  * a string
  * a list of arguments
*/

function last(list) {
  const last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
