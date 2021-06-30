function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

const root = new TreeNode(1)
const num2 = new TreeNode(2)
const num3 = new TreeNode(3)
const num4 = new TreeNode(4)
const num5 = new TreeNode(5)
root.left = num2
root.right = num3
num3.left = num4
num3.right = num5

const serialize = function(root) {
  let arr=[]
  traverse(root)
  function traverse(root){
      if(!root){
          arr.push('null')
          return
      }
      arr.push(root.val)
      traverse(root.left)
      traverse(root.right)
  }
  return arr.join(',') 
};

const serilizedData = serialize(root)

const data = "1,2,null,null,3,4,null,null,5,null,null"

const deserialize = function(serilizedData) {
  let data = serilizedData.split(',')
  function rebuild(data){
      let val = data.shift()
      if(val==='null'){
          return null
      }
      let root = new TreeNode(parseInt(val))
      root.left=rebuild(data)
      root.right=rebuild(data)
      return root
  }
  return rebuild(data)
};

console.log(deserialize(data))