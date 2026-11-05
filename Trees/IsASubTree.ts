class TreeNodeSubTree {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p?.val === q?.val &&
    isSameTree(p?.left, q?.left) &&
    isSameTree(p?.right, q?.right)
  );
}
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

const tr37 = new TreeNodeSubTree(2);

tr37.left = new TreeNodeSubTree(2);
tr37.right = new TreeNodeSubTree(2);

const tr38 = new TreeNodeSubTree(2);

tr38.left = new TreeNodeSubTree(2);
tr38.right = new TreeNodeSubTree(1);

console.log(isSubtree(tr37, tr38));
