//1) PROBLEM: binaryArrayToNumber.js

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

//2) PROBLEM: Check the exam.js

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string

// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16

const checkExam = (array1, array2) => {
	let counter = 0;
	for (let i = 0; i < array1.length; i++) {
		counter += array1[i] === array2[i] ? 4 : -1;
		counter += array2[i] == '' ? 1 : 0;
	}
	counter = counter < 0 ? 0 : counter;
	return counter;
};

//3) PROBLEM: Coefficients of the Quadratic Equation.js

// In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2). (x-x1) * (x-x2) = 0. This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0

const quadratic = (x1, x2) => {
	let terminoA = 1;
	let terminoB = -x2 + -x1;
	let terminoC = -x2 * -x1;
	let array = [terminoA, terminoB, terminoC];
	return array;
};

//4) PROBLEM: invertValues.js

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]

const invert = (array) => {
	const arrayNew = [];
	array.forEach((elemn) => {
		if ((elemn) => 0 || elemn <= 0) {
			arrayNew.push(elemn * -1);
		}
	});

	return arrayNew;
};
