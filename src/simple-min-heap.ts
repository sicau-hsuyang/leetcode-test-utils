import { Heap } from "./heap";

export class SimpleMinHeap extends Heap<number> {
  constructor(...initElements: number[]) {
    super(...initElements);

    this.setCompare((preVal, curVal) => {
      return preVal <= curVal;
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
