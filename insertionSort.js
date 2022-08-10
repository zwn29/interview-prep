function insertionSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array)
      j--
    }
  }
  return array
}

function swap(i, j, array) {
  ;[array[i], array[j]] = [array[j], array[i]]
}

console.log(insertionSort([-8, -1, -6, 2, -7, -5, 3, 0, 4]))
