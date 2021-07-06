// get the maximum deep of a tree
const maxDepth = function(root) {
  if (root === null) {
    return 0
  }
  let answer = 0
  const goDown = (tree, height) => {
    if (tree === null) {
      return
    }

    // whether the node has no children
    if (tree.left === null && tree.right === null) {
      if (height > answer) {
        answer = height
      }
    }

    goDown(tree.left, height + 1)
    goDown(tree.right, height + 1)
  }
  
  goDown(root, 1)
  return answer
};

// whether a tree is symmetric
const isSymmetric = function(root) {
  return helper(root, root)
};

const helper = function(p, q) {
  if (p === null && q === null)
      return true
  if (p === null || q === null)
      return false
  return p.val === q.val && helper(p.left, q.right) && helper(p.right, q.left)
}