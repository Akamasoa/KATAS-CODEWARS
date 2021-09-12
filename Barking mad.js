/*
Title:
  Barking mad
  
Description:
  Teach snoopy and scooby doo how to bark using object methods.
  Currently only snoopy can bark and not scooby doo.

Examples:
    snoopy.bark(); // return "Woof"
    scoobydoo.bark(); // undefined
Notes:
    Use method prototypes to enable all Dogs to bark.
*/

//Long Solution:

function Dog(breed) {
  this.breed = breed;
}
Dog.prototype.bark = function() {
  return 'Woof';
}

//Short Solution:

class Dog {
  constructor(breed) {
    this.breed = breed;
  }

  bark() {
    return 'Woof';
  }
}

const snoopy = new Dog('Beagle');
const scoobydoo = new Dog('Great Dane');

snoopy.bark();
scoobydoo.bark();

// Function Export
module.exports = Dog

//Test:

const Dog = require('.')

test('Test 1', () => {
  const snoopy = new Dog('Beagle')
  expect(snoopy.bark()).toBe('Woof')
})

test('Test 2', () => {
  const scoobyDoo = new Dog('Great Dane')
  expect(scoobyDoo.bark()).toBe('Woof')
})
