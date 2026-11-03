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

function maxDepth(root: TreeNode | null): boolean {
  function depth(root: TreeNode | null): number {
    if (!root) return 0;
    let leftD = depth(root.left);
    if (leftD === -1) return -1;
    let rightD = depth(root.right);

    if (rightD === -1) return -1;

    if (Math.abs(leftD - rightD) > 1) {
      return -1;
    }

    return 1 + Math.max(leftD, rightD);
  }
  let what = depth(root);
  return what == -1 ? false : true;
}
let treeDef: number[] = [4, 2, 7, 1, 3, 6, 9];
const unbalanced = new TreeNode(1);

unbalanced.left = new TreeNode(2);
unbalanced.left.left = new TreeNode(3);
unbalanced.left.left.left = new TreeNode(4);

console.log(maxDepth(unbalanced));
