function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort()
  arrayTwo.sort()
  let idxOne = 0
  let idxTwo = 0
  let smallest = Infinity
  let current = Infinity
  let smallestPair = []

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne]
    let secondNum = arrayTwo[idxTwo]

    if (firstNum < secondNum) {
      current = secondNum - firstNum
      idxOne++
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum
      idxTwo++
    } else {
      return [firstNum, secondNum]
    }
    if (smallest > current) {
      smallest = current
      smallestPair = [firstNum, secondNum]
    }
  }
  return smallestPair
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))
