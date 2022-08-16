// write a function that takes  in a Binary tree and  returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.

class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function branchSums(root) {
  let sums = []
  branchSumsHelper(root, 0, sums)
  return sums
}

function branchSumsHelper(node, runningSum, sums) {
  if (node === null) return

  let newRunningSum = runningSum + node.value
  if (node.left === null && node.right === null) {
    sums.push(newRunningSum)
    return
  }
  branchSumsHelper(node.left, newRunningSum, sums)
  branchSumsHelper(node.right, newRunningSum, sums)
}
