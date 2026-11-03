class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root: TreeNode | null): number {
  if (root == null) return 0;
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}
let mTree = new TreeNode(3);
console.log(maxDepth(mTree));
