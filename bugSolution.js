function myFunction(a, b) {
  const tolerance = 0.00001; // Define a small tolerance
  const result = a - b;
  return Math.abs(result) < tolerance ? 0 : result; //Use tolerance for comparison
}

console.log(myFunction(5, 2)); // Output: 3
console.log(myFunction(2, 5)); // Output: -3
console.log(myFunction(0.1 + 0.2, 0.3)); // Output: 0 (within tolerance) 