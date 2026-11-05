class TreeNodeBST {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isValidBST(root: TreeNode | null): boolean {
  function validate(root: TreeNode | null, min: number, max: number): boolean {
    if (!root) return true;
    if (root.val <= min || root.val >= max) {
      return false;
    }

    return (
      validate(root.left, min, root.val) && validate(root.right, root.val, max)
    );
  }
  let what = validate(root, -Infinity, Infinity);
  return what;
}
let treeDef1: number[] = [4, 2, 7, 1, 3, 6, 9];
const validBSTTree = new TreeNodeBST(2);

validBSTTree.left = new TreeNodeBST(2);
validBSTTree.right = new TreeNodeBST(2);

console.log(isValidBST(validBSTTree));
