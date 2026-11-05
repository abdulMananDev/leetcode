class TreeNodeLCABST {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (!root || !p || !q) return null;

  if (q.val < root.val && p.val < root.val)
    return lowestCommonAncestor(root.left, p, q);
  if (q.val > root?.val && p.val > root.val)
    return lowestCommonAncestor(root.right, p, q);
  return root;
}

const trBSTLCA = new TreeNodeSubTree(2);

tr37.left = new TreeNodeSubTree(2);
tr37.right = new TreeNodeSubTree(2);

const pBSTLCA = new TreeNodeSubTree(2);
const qBSTLCA = new TreeNodeSubTree(2);

console.log(lowestCommonAncestor(tr37, pBSTLCA, qBSTLCA));
