/*
Instructions:

Task
The hamming distance between a pair of numbers is the number of binary bits that differ in their binary notation.

Example
For a = 25, b= 87, the result should be 4

25: 00011001
87: 01010111

The hamming distance between these two would be 4 ( the 2nd, 5th, 6th, 7th bit ).

Input/Output
[input] integer a
First Number. 1 <= a <= 2^20

[input] integer b
Second Number. 1 <= b <= 2^20

[output] an integer
*/

function hammingDistance (a, b) {
  const decToBin= (n)=>{
    return("00000000000000000000"+(n >>> 0).toString(2)).slice(-20);
  }

  let aBin = decToBin(a);
  let bBin = decToBin(b);
  let acc = 0;

  for(let i = 0; i<20 ; i++ ){
    if(aBin.charAt(i) !== bBin.charAt(i) ){
      acc++;
    }
  }
  return acc;
}
