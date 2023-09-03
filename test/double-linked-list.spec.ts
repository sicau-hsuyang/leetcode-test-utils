import { arrToDoubleLinkedList } from "../src/double-linked-list";

describe("arr-to-double-linked-list", () => {
  it("should return an empty double linked list for an empty array", () => {
    const input: number[] = [];
    const result = arrToDoubleLinkedList(input);

    expect(result.head).toBeNull();
    expect(result.tail).toBeNull();
  });

  it("should convert an array to a double linked list 1", () => {
    const input: number[] = [1, 2];
    const result = arrToDoubleLinkedList(input);

    // Check if the result is a double linked list with the correct values
    expect(result.head!.val).toBe(1);
    expect(result.head!.next!.val).toBe(2);
    // Check if the last node's next points to the head, and head's prev points to the tail
    expect(result.head!.prev!.val).toBe(2);
    expect(result.tail!.next!.val).toBe(1);
  });

  it("should convert an array to a double linked list 2", () => {
    const input: number[] = [1, 2, 3, 4, 5];
    const result = arrToDoubleLinkedList(input);

    // Check if the result is a double linked list with the correct values
    expect(result.head!.val).toBe(1);
    expect(result.head!.next!.val).toBe(2);
    expect(result.head!.next!.prev!.val).toBe(1);
    expect(result.head!.next!.next!.val).toBe(3);
    expect(result.head!.next!.next!.prev!.val).toBe(2);
    expect(result.head!.next!.next!.next!.val).toBe(4);
    expect(result.head!.next!.next!.next!.prev!.val).toBe(3);
    expect(result.head!.next!.next!.next!.next!.val).toBe(5);
    expect(result.head!.next!.next!.next!.next!.prev!.val).toBe(4);

    // Check if the last node's next points to the head, and head's prev points to the tail
    expect(result.head!.prev!.val).toBe(5);
    expect(result.tail!.next!.val).toBe(1);
  });

  it("should return an empty double linked list for non-array input", () => {
    const input: string = "not_an_array";
    // @ts-ignore
    const result = arrToDoubleLinkedList(input);

    expect(result.head).toBeNull();
    expect(result.tail).toBeNull();
  });
});
