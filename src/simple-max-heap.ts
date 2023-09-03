import { Heap } from "./heap";

export class SimpleMaxHeap extends Heap<number> {
  constructor() {
    super();
    this.buildHeap();
    this.setCompare((preVal, curVal) => {
      return preVal >= curVal;
    });
  }

  getMax() {
    return this.getTop();
  }

  deleteMax() {
    return this.deleteTop();
  }
}

export default SimpleMaxHeap;
