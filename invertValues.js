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
