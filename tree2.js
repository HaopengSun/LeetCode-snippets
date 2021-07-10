function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
node1.left = node2
node1.right = node3
node2.left = node4
node4.left = node5

const maxNode = function(root) {
  const maximum = []
  if (root === null) {
    return 0
  }
  const goDown = (tree) => {
    maximum.push(tree.val)

    if (tree.left !== null) {
      goDown(tree.left)
    }

    if (tree.right !== null) {
      goDown(tree.right)
    }
  }
  
  goDown(root)
  return Math.max(...maximum)
};

console.log(maxNode(node1))