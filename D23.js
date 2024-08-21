const numbers = [1, 2, 3, 4, 5, 6];

// Function to double each number in the array
const doubleNumbers = () => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  console.log(result);
};

// Function to generate squares of numbers from 0 to 34
const generateSquares = () => {
  let result = [];
  for (let i = 0; i <= 34; i++) {
    result.push(i * i);
  }
  console.log(result);
};

// Function to generate prime numbers from 0 to 99
const generatePrimes = () => {
  let result = [];
  for (let i = 2; i <= 99; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      result.push(i);
    }
  }
  console.log(result);
};

// Call the functions
doubleNumbers();
generateSquares();
generatePrimes();
