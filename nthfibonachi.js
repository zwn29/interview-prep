//write a programme to calculte the nth fibonacci number

//f(n) = f(n-1) + f(n-2)
// if f(0) === 0 && f(1) === 1
// we can use recursion to solve this problem
// the under soln is recursive soln

function getNthFib(n) {
  // Write your code here.
  if (n === 1 || n === 0) {
    return 0
  } else if (n === 2) {
    return 1
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2)
  }
}

// memoization soln
function getNthFibMemo(n, memoize = { 1: 0, 2: 1 }) {
  if (n in memoize) {
    return memoize[n]
  } else {
    memoize[n] = getNthFibMemo(n - 1, memoize) + getNthFibMemo(n - 2, memoize)
    return memoize[n]
  }
}

//getNthFibArr space optimised soln

function getNthFibArr(n) {
  let lasttwo = [0, 1]
  let counter = 3
  while (counter <= n) {
    nextfib = lasttwo[0] + lasttwo[1]
    lasttwo[0] = lasttwo[1]
    lasttwo[1] = nextfib
    counter++
  }
  return n > 1 ? lasttwo[1] : lasttwo[0]
}
console.log(fibonacci(6))
