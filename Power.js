/*
The goal is to create a function '' that "raises" the up to (ie multiplies by itself times).numberToPower(number, power)numberpowernumberpower

Examples
numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
Note: and some other functions like and are disabled.Math.powMatheval()**
*/

function numberToPower(number, power){
  let result = 1;
  for (let i = 1; i <= power; i++){
    result *= number;
  }
  return result;
}

https://www.codewars.com/kata/562926c855ca9fdc4800005b/solutions/javascript
