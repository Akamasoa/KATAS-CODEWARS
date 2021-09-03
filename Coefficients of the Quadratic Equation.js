//3) PROBLEM: Coefficients of the Quadratic Equation.js

// In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2). (x-x1) * (x-x2) = 0. This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0

const quadratic = (x1, x2) => {
	let terminoA = 1;
	let terminoB = -x2 + -x1;
	let terminoC = -x2 * -x1;
	let array = [terminoA, terminoB, terminoC];
	return array;
};
