export interface TreeNode<T> {
  /**
   * 值域
   */
  val: T;
  /**
   * 左子节点
   */
  left: GeneralTreeNode<T>;
  /**
   * 右子节点
   */
  right: GeneralTreeNode<T>;
}

export type GeneralTreeNode<T> = TreeNode<T> | null;

/**
 * 数组转二叉树
 * @param  arr
 */
export function arrToTree<T>(arr: T[]): GeneralTreeNode<T> {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  let root: GeneralTreeNode<T> = null;
  let offset = 0;
  // 根节点从1开始
  let size = 1;
  let parentNodes: GeneralTreeNode<T>[] = [];
  // 每次提取一层数据进行构建
  let levelChunk = arr.slice(offset, offset + size);
  offset += size;
  while (levelChunk.length) {
    let counter = 0;
    for (let i = 0; i < levelChunk.length; i++) {
      let val = levelChunk[i];
      let treeNode: GeneralTreeNode<T> = null;
      if (val !== null) {
        // 计算出每层节点数
        counter++;
        treeNode = {
          val,
          left: null,
          right: null,
        };
      }
      // 根据当前层节点的数据计算出父节点所在的位置
      let parentIdx = Math.floor(i / 2);
      let isLeftChild = i % 2 === 0;
      if (!parentNodes[parentIdx] && root === null) {
        root = treeNode;
      } else if (parentNodes[parentIdx]) {
        // 挂载左右儿子节点
        if (isLeftChild) {
          parentNodes[parentIdx].left = treeNode;
        } else {
          parentNodes[parentIdx].right = treeNode;
        }
      }
      levelChunk[i] = treeNode;
    }
    // 把当前层的空节点过滤掉，重新构建关系
    parentNodes = levelChunk.filter((x) => x !== null);
    // 计算出下一层的节点数
    size = 2 * counter;
    levelChunk = arr.slice(offset, offset + size);
    offset += size;
  }
  return root;
}
