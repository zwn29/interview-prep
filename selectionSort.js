function swap(i, j, array) {
  ;[array[i], array[j]] = [array[j], array[i]]
}

function selectionSort(array) {
  let currentIdx = 0
  while (currentIdx < array.length - 1) {
    let smallestIdx = currentIdx
    for (let i = currentIdx + 1; i < array.length; i++) {
      if (array[i] < array[smallestIdx]) {
        smallestIdx = i
      }
    }
    swap(currentIdx, smallestIdx, array)
    currentIdx++
  }
  return array
}

console.log(selectionSort([8, 1, 6, 2, 7, 5, 3, 0, 4]))
