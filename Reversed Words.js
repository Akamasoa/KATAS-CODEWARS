//Complete the solution so that it reverses all of the words within the string passed in.

//Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
  return str.split(" ").reverse().join(" "); // reverse those words
}

//Long Solution:

function reverseWords(str){
  var reverse = [];
  var words = str.split(" ");
  for(let i=words.length-1; i>=0; i--){
    reverse.push(words[i]);
  }
  return reverse.join(" ");
}
