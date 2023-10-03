// Using this numbering, the Fibonacci sequence can be defined by the following three equations: 
// F0 = 0 (applies only to the first integer) 
// F1 = 1 (applies only to the second integer) 
// Fn = Fn-1 + Fn-2 (applies to all other integers)
// Formula sourced from: https://www.techtarget.com/whatis/definition/Fibonacci-sequence 

// For Test Purpose
function fibonacci(num) {
  if(num == 1) { return 0 } 
  if(num == 2) { return 1 }
  return (fibonacci(num - 1) + fibonacci(num - 2))
}

// Recursive Approach
function fibonacci(num) {
  if(num == 1) { return 0 } 
  if(num == 2) { return 1 }
  return (fibonacci(num - 1) + fibonacci(num - 2))
}

module.exports = fibonacci;
