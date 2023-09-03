import { Heap } from "./heap";

export class SimpleMaxHeap extends Heap<number> {
  constructor(...initElements: number[]) {
    super(...initElements);
    // 比较依据，若targetVal比目标节点大，则需要提前
    this.setCompare((targetVal, compareVal) => {
      return targetVal >= compareVal;
    });
    this.buildHeap();
  }

  getMax() {
    return this.getTop();
  }

  deleteMax() {
    return this.deleteTop();
  }
}

export default SimpleMaxHeap;
