//write a programme to calculte the nth fibonacci number

//f(n) = f(n-1) + f(n-2)
// if f(0) === 0 && f(1) === 1
// we can use recursion to solve this problem
// the under soln is recursive soln

function fibonacci(n) {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

console.log(fibonacci(10))
