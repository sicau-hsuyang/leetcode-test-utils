export type GeneralDoubleLinkedNode<T> = DoubleLinkedNode<T> | null;

export interface DoubleLinkedNode<T> {
  /**
   * 值域
   */
  val: T;
  /**
   * 后继节点
   */
  next?: GeneralDoubleLinkedNode<T>;
  /**
   * 前驱节点
   */
  prev?: GeneralDoubleLinkedNode<T>;
}

/**
 * 数组转双向链表
 * @param arr 数据源
 * @returns
 */
export function arrToDoubleLinkedList<T>(arr: T[]): {
  head: GeneralDoubleLinkedNode<T>;
  tail: GeneralDoubleLinkedNode<T>;
} {
  if (!Array.isArray(arr) || arr.length === 0) {
    return { head: null, tail: null };
  }
  let head: GeneralDoubleLinkedNode<T> = null;
  let tail: GeneralDoubleLinkedNode<T> = null;
  arr.forEach((item) => {
    let node: GeneralDoubleLinkedNode<T> = {
      val: item,
      next: null,
      prev: null,
    };
    if (head === null) {
      head = node;
      tail = node;
    } else {
      tail!.next = node;
      node.prev = tail;
      tail = node;
    }
  });
  head!.prev = tail;
  tail!.next = head;
  return { head, tail };
}
