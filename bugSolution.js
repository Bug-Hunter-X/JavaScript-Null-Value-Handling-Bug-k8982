function foo(a, b) {
  if (a === null || b === null) {
    return 0; //or handle appropriately, instead of returning null.
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-numeric inputs
  }
  return a + b;
}

console.log(foo(null, 1)); // 1
console.log(foo(1, null)); // 1
console.log(foo(1, 2)); // 3
console.log(foo('a', 1)); // NaN
console.log(foo(1, 'b')); // NaN