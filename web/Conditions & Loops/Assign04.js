function generateNumbersBetween(start, end) {
  if (start > end) {
    console.error("Start number must be less than or equal to the end number.");
    return [];
  }

  const numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
}

const startNumber = 5;
const endNumber = 10;

const result = generateNumbersBetween(startNumber, endNumber);
console.log("Generated numbers:", result);
