import { Heap } from "./heap";

export class SimpleMaxHeap extends Heap<number> {
  constructor(...initElements: number[]) {
    super(...initElements);
    // 下滤依据，若targetVal比目标节点小，则需要下滤
    this.setCompare((targetVal, compareVal) => {
      return targetVal <= compareVal;
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
