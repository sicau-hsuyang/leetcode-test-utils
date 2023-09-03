# leetcode-test-utils

您是否还在准备知名互联网公司的算法面试？您是否还狂奔在 leetcode 刷题上，我也一样。

您在刷题过程中是否遇到过这样的问题：

- 有些问题通不过的时候需要构建无法通过测试用例的数据在本地调试，但是有些时候测试数据非常多，如何快速的在本地得到一个 leetcode 判题程序上的测试数据？手敲？那肯定是万万不能的。
- 有些问题，需要借助一些成熟的数据结构，比如`堆`，`并查集`...等，每次都先去敲一个这样的数据结构，黄花菜都凉了！

如果你整面临着上述问题，那这个仓库就是你的福音，致奋斗中的你。

## 如何使用

```bash
npm i leetcode-test-utils -S
```

## Demo

### 链表

单链表

```ts
import { arrToLinkedList, GeneralLinkedNode } from "leetcode-test-utils";

function app() {
  const input: number[] = [1, 2, 3, 4, 5];
  const linkedList: GeneralLinkedNode<number> = arrToLinkedList(input);
  /**
   {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null
          }
        }
      }
    }
   }
  */
}
```

双向链表

```ts
import { arrToDoubleLinkedList, DoubleLinkedNode } from "leetcode-test-utils";

function app() {
  const input: number[] = [1, 2, 3, 4, 5];
  const doubleLinkedList: { head: DoubleLinkedNode<number>; tail: DoubleLinkedNode<number> } = arrToDoubleLinkedList(input);
  /**
   doubleLinkedList.head
   {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null
          }
        }
      }
    }
   }
  */

  /**
  doubleLinkedList.tail
  {
    val: 5,
    prev: {
      val: 4,
      prev: {
        val: 3,
        prev: {
          val: 2,
          prev: {
            val: 1,
            prev: null
          }
        }
      }
    }
   }
  */
}
```

上述得到的数据其实因为都包含了循环引用，序列化无法描述，您只需要理解作者想表达的意思即可。

### 二叉树

```ts
import { arrToBinaryTree, GeneralTreeNode } from "leetcode-test-utils";
function app() {
  const root = arrToBinaryTree([1, null, 2, 3]);
  /**
   {
      val: 1,
      left: null,
      right: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null
        },
        right: null,
      }
   }
   */
  // 和leetcode的创建规则保持一致
}
```

### 并查集

简单版本：即集合的每个元素不需要存储节点数据，`数组索引 + 1`代表的就是节点信息，使用简单版本的并查集在某些场景下才能通过所有的`case`。

如：leetcode 第 1971 题。

```ts
import { SimpleDsu } from "leetcode-test-utils";
function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  const dsu = new SimpleDsu();
  dsu.init(n);
  edges.forEach((edge) => {
    // 题目节点编号用的是0——n-1，所以需要+1
    dsu.union(edge[0] + 1, edge[1] + 1);
  });
  // 题目节点编号用的是0——n-1，所以需要+1
  return dsu.find(source + 1) === dsu.find(destination + 1);
}
```

通用版本：通用版本是在你确实需要用节点存储数据的时候再使用，会占用更多的内存空间，初始化的过程中也比较耗时

```ts
import { GeneralDsu } from "leetcode-test-utils";
function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  const dsu = new GeneralDsu();
  let counter = 1;
  dsu.init(
    Array.from({
      length: n,
    }).map(() => {
      return counter++;
    })
  );
  edges.forEach((edge) => {
    dsu.union(edge[0] + 1, edge[1] + 1);
  });
  return dsu.find(source + 1) === dsu.find(destination + 1);
}
```

以上代码无法通过 leetcode 第 1971 题的所有 case。

### 堆
