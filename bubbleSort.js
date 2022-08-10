console.log('Hello world')

// Bubble Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// lang js

function swap(i, j, array) {
  // swap the positions of the elements
  //   const temp = array[i]
  //   array[i] = array[j]
  //   array[j] = temp

  ;[array[i], array[j]] = [array[j], array[i]]
}

function bubbleSort(array) {
  let isSorted = false
  let counter = 0
  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array)
        isSorted = false
      }
    }
    counter++
  }
  return array
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))
