import ncp from "node-clipboardy";

export interface GeneralDsuElement<T> {
  /**
   * 数据域
   */
  dat: T;
  /**
   * 父节点的索引，如果为负数，则没有父节点
   */
  parent: number;
}

export class GeneralDsu<T> {
  constructor() {
    const template = `
interface GeneralDsuElement<T> {
  /**
   * 数据域
   */
  dat: T;
  /**
   * 父节点的索引，如果为负数，则没有父节点
   */
  parent: number;
}

class GeneralDsu<T> {
  /**
   * 集合存储域
   */
  private _set: GeneralDsuElement<T>[] = [];

  /**
   * 外部访问的集合
   */
  public get dataSet() {
    return this._set;
  }

  /**
   * 判等依据
   * @param data
   * @param target
   * @returns
   */
  private _equalCondition = (data: T, target: unknown) => {
    return data === target;
  };

  /**
   * 设置判等条件
   * @param outerEqualCondition
   */
  public setEqual(outerEqualCondition: (data: T, target: unknown) => boolean) {
    this._equalCondition = outerEqualCondition;
  }

  /**
   * 初始化并查集
   * @param values
   */
  init(values: T[]) {
    values.forEach((v) => {
      this._set.push({
        // 初始化的时候，每个子树只有一个元素
        parent: -1,
        dat: v,
      });
    });
  }

  /**
   * 查找元素是否在集合中，若存在，则返回根节点所在的索引，若不在，则返回-1
   * @param target 目标元素
   */
  find(target: unknown): number {
    for (let i = 0; i < this._set.length; i++) {
      // 元素在数组中能够被找到
      if (this._equalCondition(this._set[i].dat, target)) {
        let pos = i;
        // 尝试找这个元素的祖先节点
        while (this._set[pos].parent >= 0) {
          // 继续向上查找根节点
          pos = this._set[pos].parent;
        }
        // 路径压缩：将路径上的节点都直接连接到根节点
        let current = i;
        while (current !== pos) {
          const next = this._set[current].parent;
          this._set[current].parent = pos;
          current = next;
        }
        return pos;
      }
    }
    // 未找到
    return -1;
  }

  /**
   * 合并集合
   * @param set1
   * @param set2
   */
  union(set1: T, set2: T) {
    const r1 = this.find(set1);
    const r2 = this.find(set2);
    if (r1 != r2) {
      const val1 = Math.abs(this._set[r1].parent);
      const val2 = Math.abs(this._set[r2].parent);
      // 将小树贴到大树上
      if (val1 < val2) {
        this._set[r1].parent = r2;
      } else {
        // 如果两棵树相同，则需要将树的规模增加
        if (val1 === val2) {
          this._set[r1].parent--;
        }
        this._set[r2].parent = r1;
      }
    }
  }

  /**
   * 统计并查集中子树的个数
   * @returns
   */
  count() {
    let size = 0;
    this._set.forEach((v) => {
      if (v.parent < 0) {
        size++;
      }
    });
    return size;
  }
}
`;
    ncp.writeSync(template);
  }

  /**
   * 集合存储域
   */
  private _set: GeneralDsuElement<T>[] = [];

  /**
   * 外部访问的集合
   */
  public get dataSet() {
    return this._set;
  }

  /**
   * 判等依据
   * @param data
   * @param target
   * @returns
   */
  private _equalCondition = (data: T, target: unknown) => {
    return data === target;
  };

  /**
   * 设置判等条件
   * @param outerEqualCondition
   */
  public setEqual(outerEqualCondition: (data: T, target: unknown) => boolean) {
    this._equalCondition = outerEqualCondition;
  }

  /**
   * 初始化并查集
   * @param values
   */
  init(values: T[]) {
    values.forEach((v) => {
      this._set.push({
        // 初始化的时候，每个子树只有一个元素
        parent: -1,
        dat: v,
      });
    });
  }

  /**
   * 查找元素是否在集合中，若存在，则返回根节点所在的索引，若不在，则返回-1
   * @param target 目标元素
   */
  find(target: unknown): number {
    for (let i = 0; i < this._set.length; i++) {
      // 元素在数组中能够被找到
      if (this._equalCondition(this._set[i].dat, target)) {
        let pos = i;
        // 尝试找这个元素的祖先节点
        while (this._set[pos].parent >= 0) {
          // 继续向上查找根节点
          pos = this._set[pos].parent;
        }
        // 路径压缩：将路径上的节点都直接连接到根节点
        let current = i;
        while (current !== pos) {
          const next = this._set[current].parent;
          this._set[current].parent = pos;
          current = next;
        }
        return pos;
      }
    }
    // 未找到
    return -1;
  }

  /**
   * 合并集合
   * @param set1
   * @param set2
   */
  union(set1: T, set2: T) {
    const r1 = this.find(set1);
    const r2 = this.find(set2);
    if (r1 != r2) {
      const val1 = Math.abs(this._set[r1].parent);
      const val2 = Math.abs(this._set[r2].parent);
      // 将小树贴到大树上
      if (val1 < val2) {
        this._set[r1].parent = r2;
      } else {
        // 如果两棵树相同，则需要将树的规模增加
        if (val1 === val2) {
          this._set[r1].parent--;
        }
        this._set[r2].parent = r1;
      }
    }
  }

  /**
   * 统计并查集中子树的个数
   * @returns
   */
  count() {
    let size = 0;
    this._set.forEach((v) => {
      if (v.parent < 0) {
        size++;
      }
    });
    return size;
  }
}
