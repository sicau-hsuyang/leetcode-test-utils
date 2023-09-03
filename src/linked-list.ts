export type GeneralLinkedNode<T> = LinkedNode<T> | null;

export interface LinkedNode<T> {
  /**
   * 值域
   */
  val: T;
  /**
   * 后继节点
   */
  next?: GeneralLinkedNode<T>;
}

/**
 * 数组转链表
 * @param initArr 原始数组
 * @returns
 */
export function arrToLinkedList<T>(initArr: T[]): GeneralLinkedNode<T> {
  if (!Array.isArray(initArr) || initArr.length === 0) {
    return null;
  }
  let head: GeneralLinkedNode<T> = null;
  let tail: GeneralLinkedNode<T> = null;
  initArr.forEach((item: T) => {
    let node: GeneralLinkedNode<T> = {
      val: item,
      next: null,
    };
    if (head === null) {
      head = node;
      tail = node;
    } else {
      tail!.next = node;
      tail = node;
    }
  });
  return head;
}
