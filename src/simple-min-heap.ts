import { Heap } from "./heap";
import ncp from "node-clipboardy";

export class SimpleMinHeap extends Heap<number> {
  constructor(...initElements: number[]) {
    super(...initElements);
    // 比较依据，若targetVal比目标节点大，则需要下滤
    this.setCompare((targetVal, compareVal) => {
      return targetVal <= compareVal;
    });
    this.buildHeap();
  }

  getMin() {
    return this.getTop();
  }

  deleteMin() {
    return this.deleteTop();
  }

  protected writeIntoClipboard(): void {
    const template = `
  class Heap<T> {
    /**
     * 定义一个存储数据的内存空间
     */
    private _data: T[] = [];
  
    /**
     * 比较函数
     */
    private _compare!: (compareVal: T, currentVal: T) => boolean;
  
    public get count() {
      return this._data.length;
    }
  
    constructor(...initElements: T[]) {
      this._data.push(...initElements);
    }
  
    private _selfCompare = (compareVal: T, currentVal: T) => {
      if (typeof this._compare !== "function") {
        throw "cannot compare without a compare function";
      }
      return this._compare(compareVal, currentVal);
    };
  
    /**
     * 设置比较函数
     * @param {(compareVal, currentVal) => boolean} compareFunc
     */
    public setCompare(compareFunc: (compareVal: T, currentVal: T) => boolean) {
      this._compare = compareFunc;
    }
  
    /**
     * 获取堆顶的元素
     */
    protected getTop() {
      return this._data[0];
    }
  
    /**
     * 按断堆是否是空
     */
    public isEmpty() {
      return this._data.length === 0;
    }
  
    /**
     * 向堆中插入一个合法值
     * @param  val
     */
    public insertQueue(val: T) {
      // 如果当前数组没有元素，直接插入即可
      if (this._data.length === 0) {
        this._data[0] = val;
      } else {
        // 让i指向当前新位置，因为没有哨兵的关系，最后一个元素是length - 1，所以新位置就是length
        let i = this.count;
        while (this._selfCompare(val, this._data[Math.floor(i / 2)]) && i > 0) {
          this._data[i] = this._data[Math.floor(i / 2)];
          i = Math.floor(i / 2);
        }
        // 在合适的位置插入新的值
        this._data[i] = val;
      }
    }
  
    /**
     * 获取堆中的最值元素
     * @returns
     */
    public deleteTop() {
      if (this.isEmpty()) {
        throw "can not delete element from empty heap";
      }
      // 取出堆顶的元素
      let minVal = this._data[0];
      let temp = this._data[this.count - 1];
      this._data[0] = temp;
      // JavaScript语言需要进行这一步，让数组的规模缩小，释放空间
      this._data.length--;
      // 如果当前堆里面还存在元素的话，将
      this.percDown(0);
      return minVal;
    }
  
    /**
     * 下滤：将堆中以堆data[p]为根的子堆调整为最小堆
     * @param  p 根节点索引
     */
    private percDown(p: number) {
      // 如果当前堆元素小于1个，就不执行调整操作
      if (this.count <= 1) {
        return;
      }
      let parent, child;
      /* 取出根结点存放的值 */
      let temp = this._data[p];
      for (parent = p; parent * 2 < this.count; parent = child) {
        child = parent * 2;
        if (child + 1 < this.count && this._selfCompare(this._data[child + 1], this._data[child])) {
          child++; /* child指向左右子结点的较大者 最大堆 较小者 最小堆 */
        }
        /* 找到了合适位置 */
        // 注意这儿一定要取得等号 temp <= this.#data[child] 最小堆 temp >= this.#data[child] 最大堆
        if (this._selfCompare(temp, this._data[child])) {
          break;
        } else {
          /* 下滤X */
          this._data[parent] = this._data[child];
        }
      }
      this._data[parent] = temp;
    }
  
    /**
     * 构建最小堆
     */
    public buildHeap() {
      /* 调整data中的元素，使满足最小堆的有序性  */
      /* 这里所有size个元素已经存在data[]中 */
      /* 从最后一个结点的父节点开始，到根结点1 */
      for (let i = Math.floor((this.count - 1) / 2); i >= 0; i--) {
        this.percDown(i);
      }
    }
  }

  class SimpleMinHeap extends Heap<number> {
    constructor(...initElements: number[]) {
      super(...initElements);
      // 比较依据，若targetVal比目标节点大，则需要下滤
      this.setCompare((targetVal, compareVal) => {
        return targetVal <= compareVal;
      });
      this.buildHeap();
    }
  
    getMin() {
      return this.getTop();
    }
  
    deleteMin() {
      return this.deleteTop();
    }
  }
  `;
    ncp.writeSync(template);
  }
}

export default SimpleMinHeap;
