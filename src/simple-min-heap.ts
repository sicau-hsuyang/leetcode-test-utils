import { Heap } from "./heap";

export class SimpleMinHeap extends Heap<number> {
  constructor(...initElements: number[]) {
    super(...initElements);
    // 下滤依据，若targetVal比目标节点大，则需要下滤
    this.setCompare((targetVal, compareVal) => {
      return targetVal >= compareVal;
    });
  }

  getMin() {
    return this.getTop();
  }

  deleteMin() {
    return this.deleteTop();
  }
}

export default SimpleMinHeap;
