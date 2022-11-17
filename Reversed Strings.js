/*
Description:
Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'
*/

function solution(str){
  return str.split('').reverse().join('');  
}

/*Long solution:

function solution(s){
  var o = '';
  for (var i = s.length - 1; i >= 0; i--){
    o += s[i];
  }
  return o;
}

*/
