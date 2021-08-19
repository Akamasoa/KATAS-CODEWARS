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
