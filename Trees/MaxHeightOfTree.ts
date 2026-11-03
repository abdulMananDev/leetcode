class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
let treeDef: number[] = [4, 2, 7, 1, 3, 6, 9];
const root = new TreeNode(4);

root.left = new TreeNode(2);
root.right = new TreeNode(7);

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

console.log(maxDepth(root));
