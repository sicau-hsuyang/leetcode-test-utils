import { arrToBinaryTree, GeneralTreeNode } from "../src/binary-tree";

describe("array to binary tree", () => {
  const check = (p: GeneralTreeNode<number>, q: GeneralTreeNode<number>): boolean => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
  };

  const isSymmetric = function (root: GeneralTreeNode<number>): boolean {
    return check(root, root);
  };

  it("empty", () => {
    const root = arrToBinaryTree([]);
    expect(root).toBe(null);
  });

  it("normal", () => {
    const root = arrToBinaryTree([1, null, 2, 3]);
    expect(root!.val).toBe(1);
    expect(root!.left).toBe(null);
    expect(root!.right!.val).toBe(2);
  });

  it("tree 1", () => {
    const root = arrToBinaryTree([1, 2, 2, 2, null, 2]) as GeneralTreeNode<number>;
    const symmetryCheckResult = isSymmetric(root);
    expect(symmetryCheckResult).toBe(false);
  });

  it("tree 2", () => {
    const root = arrToBinaryTree([2, 3, 3, 4, 5, null, 4]) as GeneralTreeNode<number>;
    const symmetryCheckResult = isSymmetric(root);
    expect(symmetryCheckResult).toBe(false);
  });

  it("tree 3", () => {
    const root = arrToBinaryTree([2, 3, 3, 4, 5, 5, 4, null, null, 8, 9, null, null, 9, 8]) as GeneralTreeNode<number>;
    const symmetryCheckResult = isSymmetric(root);
    expect(symmetryCheckResult).toBe(false);
  });

  it("tree 4", () => {
    const root = arrToBinaryTree([1, 2, 2, 3, 4, 4, 3]) as GeneralTreeNode<number>;
    const symmetryCheckResult = isSymmetric(root);
    expect(symmetryCheckResult).toBe(true);
  });
});
