function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)
  let idxOne = 0
  let idxTwo = 0
  let smallest = Infinity
  let current = Infinity
  let smallestPair = []

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne]
    let secondNum = arrayTwo[idxTwo]

    if (firstNum < secondNum) {
      current = Math.abs(firstNum - secondNum)
      idxOne++
    } else if (secondNum < firstNum) {
      current = Math.abs(firstNum - secondNum)
      idxTwo++
    } else {
      return [firstNum, secondNum]
    }

    if (current < smallest) {
      smallest = current
      smallestPair = [firstNum, secondNum]
    }
  }
  return smallestPair
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))
