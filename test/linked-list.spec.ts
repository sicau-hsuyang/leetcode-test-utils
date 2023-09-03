import { arrToLinkedList, GeneralLinkedNode } from "../src/linked-list";

describe("array to linked list", () => {
  describe("arrToLinkedList", () => {
    it("should return null for an empty array", () => {
      const input: number[] = [];
      const result: GeneralLinkedNode<number> = arrToLinkedList(input);
      expect(result).toBeNull();
    });

    it("should convert an array to a linked list", () => {
      const input: number[] = [1, 2, 3, 4, 5];
      const result: GeneralLinkedNode<number> = arrToLinkedList(input);

      // Check if the result is a linked list with the correct values
      expect(result!.val).toBe(1);
      expect(result!.next!.val).toBe(2);
      expect(result!.next!.next!.val).toBe(3);
      expect(result!.next!.next!.next!.val).toBe(4);
      expect(result!.next!.next!.next!.next!.val).toBe(5);

      // Check if the last node's next property is null
      expect(result!.next!.next!.next!.next!.next).toBeNull();
    });

    it("should return null for non-array input", () => {
      const inputString: string = "not_an_array";
      // @ts-ignore
      const result: GeneralLinkedNode<string> = arrToLinkedList(inputString);
      expect(result).toBeNull();
    });
  });
});
