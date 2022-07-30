//write a function that takes an array and a target sum and returns all the triplets in the array that sum to the target sum
// Language: javascript
// Path: threenumsum.js

function threeNumSum(array, targetSum) {
  array.sort((a, b) => a - b)
  let triplets = []
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1
    let right = array.length - 1
    while (left < right) {
      let sum = array[i] + array[left] + array[right]
      if (sum === targetSum) {
        triplets.push([array[i], array[left], array[right]])
        left++
        right--
      } else if (sum < targetSum) {
        left++
      } else {
        right--
      }
    }
  }
  return triplets
}

console.log(threeNumSum([-8, -1, -6, 2, -7, -5, 3, 0, 4], -5))
