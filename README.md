# Unexpected Floating-Point Subtraction Results in JavaScript

This repository demonstrates a common, yet subtle, bug in JavaScript related to floating-point subtraction.  Floating-point numbers are not always represented exactly in binary, leading to potential precision issues when performing arithmetic operations, especially subtraction.

The `bug.js` file contains a simple subtraction function that highlights this problem. The `bugSolution.js` file offers a potential solution using a small tolerance for comparison.

This is a valuable example to understand the importance of careful handling of floating-point numbers in JavaScript, particularly when comparing for equality.