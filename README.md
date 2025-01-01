# JavaScript Null Value Handling Bug

This repository demonstrates a common bug in JavaScript related to null value handling. The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

The bug arises from an incomplete check for null values.  The function intends to return null if either input is null, however, the solution doesn't explicitly handle cases when one input is a number and the other is null. This could lead to unexpected behavior in certain applications.

The solution clarifies the handling of null values and enhances robustness.

## How to run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a JavaScript environment (browser console, Node.js, etc.).
3. Execute the code to observe the behavior of the buggy and corrected versions.