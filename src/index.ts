// #region 链表相关
import { arrToLinkedList } from "./linked-list";
import { arrToDoubleLinkedList } from "./double-linked-list";
import type { GeneralLinkedNode } from "./linked-list";
import type { GeneralDoubleLinkedNode } from "./double-linked-list";
// #endregion

// #region 二叉树相关
import { arrToBinaryTree } from "./binary-tree";
import type { GeneralTreeNode } from "./binary-tree";
// #endregion

export { arrToLinkedList, arrToDoubleLinkedList, arrToBinaryTree };
export type { GeneralLinkedNode, GeneralDoubleLinkedNode, GeneralTreeNode };
