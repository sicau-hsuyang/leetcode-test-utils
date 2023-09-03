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

// #region 并查集
// 简单版的并查集实现
import { SimpleDsu } from "./simple-dsu";
// 通用并查集实现
import { GeneralDsu, GeneralDsuElement } from "./dsu";
// #endregion

// #region 堆
import { Heap } from "./heap";
import { SimpleMaxHeap } from "./simple-max-heap";
import { SimpleMinHeap } from "./simple-min-heap";
// #endregion

export { arrToLinkedList, arrToDoubleLinkedList, arrToBinaryTree, SimpleDsu, GeneralDsu, Heap, SimpleMaxHeap, SimpleMinHeap };
export type { GeneralLinkedNode, GeneralDoubleLinkedNode, GeneralTreeNode, GeneralDsuElement };
