//1) Problem
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
