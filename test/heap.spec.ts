import { SimpleMinHeap } from "../src/simple-min-heap";
import { SimpleMaxHeap } from "../src/simple-max-heap";

describe("min heap", () => {
  it("should create an empty heap", () => {
    const heap = new SimpleMinHeap();
    expect(heap.isEmpty()).toBe(true);
    expect(heap.count).toBe(0);
  });

  it("should insert elements and maintain the heap property", () => {
    const heap = new SimpleMinHeap();

    heap.insertQueue(3);
    expect(heap.getMin()).toBe(3);

    heap.insertQueue(1);
    expect(heap.getMin()).toBe(1);

    heap.insertQueue(5);
    expect(heap.getMin()).toBe(1);

    heap.insertQueue(2);
    expect(heap.getMin()).toBe(1);

    expect(heap.count).toBe(4);
  });

  it("should delete elements and maintain the heap property", () => {
    const heap = new SimpleMinHeap();

    heap.insertQueue(3);
    heap.insertQueue(1);
    heap.insertQueue(5);
    heap.insertQueue(2);

    expect(heap.deleteMin()).toBe(1);
    expect(heap.deleteMin()).toBe(2);
    expect(heap.deleteMin()).toBe(3);
    expect(heap.getMin()).toBe(5);
    expect(heap.count).toBe(1);
  });

  it("should throw an error when trying to delete from an empty heap", () => {
    const heap = new SimpleMinHeap();

    expect(() => {
      heap.deleteMin();
    }).toThrow("can not delete element from empty heap");
  });
});

describe("max heap", () => {
  it("should create an empty heap", () => {
    const heap = new SimpleMaxHeap();
    expect(heap.isEmpty()).toBe(true);
    expect(heap.count).toBe(0);
  });

  it("should insert elements and maintain the heap property", () => {
    const heap = new SimpleMaxHeap();

    heap.insertQueue(3);
    expect(heap.getMax()).toBe(3);

    heap.insertQueue(1);
    expect(heap.getMax()).toBe(3);

    heap.insertQueue(5);
    expect(heap.getMax()).toBe(5);

    heap.insertQueue(2);
    expect(heap.getMax()).toBe(5);

    expect(heap.count).toBe(4);
  });

  it("should delete elements and maintain the heap property", () => {
    const heap = new SimpleMaxHeap();

    heap.insertQueue(3);
    heap.insertQueue(1);
    heap.insertQueue(5);
    heap.insertQueue(2);

    expect(heap.deleteMax()).toBe(5);
    expect(heap.deleteMax()).toBe(3);
    expect(heap.deleteMax()).toBe(2);
    expect(heap.getMax()).toBe(1);
    expect(heap.count).toBe(1);
  });

  it("should throw an error when trying to delete from an empty heap", () => {
    const heap = new SimpleMaxHeap();

    expect(() => {
      heap.deleteMax();
    }).toThrow("can not delete element from empty heap");
  });
});
