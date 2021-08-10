//1) PROBLEM
//We are required to write a JavaScript function that takes in a binary array (consisting of only 0 and 1).

//Our function should first join all the bits in the array and then return the decimal number corresponding to that binary.

//With map and forEach:

const binaryArrayToNumber = (arr) => {
	let numStr = '';
	arr
		.map((a) => String(a))
		.forEach((a) => {
			numStr += a;
		});
	return parseInt(+numStr, 2);
};

//test
binaryArrayToNumber([0, 0, 0, 1]); // => 1
binaryArrayToNumber([0, 0, 1, 0]); // => 2
binaryArrayToNumber([1, 1, 1, 1]); // => 15
binaryArrayToNumber([0, 1, 1, 0]); // => 6

//With for:

const binaryArrayToNumber = (arr) => {
	let numStr = 0;
	for (let i = 0, exponent = 3; i < arr.length; i++) {
		if (arr[i]) {
			numStr += Math.pow(2, exponent);
		}
		exponent--;
	}
	return numStr;
};

//Whit left logical shift:

const binaryArrayToNumber = (arr) => {
	return arr.reduce((a, b) => (a << 1) | b, 0);
};

//With parseInt:

const binaryArrayToNumber = (arr) => {
	return parseInt(arr.join(''), 2);
};

//2) PROBLEM
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string 

// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16

const checkExam = (array1, array2) => {
  let counter = 0;
  for(let i = 0; i < array1.length; i++) {
    counter += (array1[i] === array2[i]) ? 4 : -1;
    counter += (array2[i] == "") ? 1: 0;
  }
  counter = (counter < 0) ? 0 : counter;
  return counter;
}
