import { merge, mergeByAsc, mergeByDesc } from "../src/merge";

describe("merge", () => {
  it("should merge two empty arrays into an empty array", () => {
    const arr1: number[] = [];
    const arr2: number[] = [];
    const result = merge(arr1, arr2, (val1, val2) => val1 < val2);
    expect(result).toEqual([]);
  });

  it("should merge an empty array with a non-empty array", () => {
    const arr1: number[] = [];
    const arr2 = [1, 3, 5];
    const result = merge(arr1, arr2, (val1, val2) => val1 < val2);
    expect(result).toEqual([1, 3, 5]);
  });

  it("should merge two non-empty arrays with a merge condition", () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const result = merge(arr1, arr2, (val1, val2) => val1 < val2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should merge two non-empty arrays with a different merge condition", () => {
    const arr1 = [2, 4, 6];
    const arr2 = [1, 3, 5];
    const result = merge(arr1, arr2, (val1, val2) => val1 > val2);
    expect(result).toEqual([2, 4, 6, 1, 3, 5]);
  });

  it("should handle arrays with duplicate values", () => {
    const arr1 = [1, 2, 2, 4];
    const arr2 = [2, 3, 5, 5];
    const result = merge(arr1, arr2, (val1, val2) => val1 < val2);
    expect(result).toEqual([1, 2, 2, 2, 3, 4, 5, 5]);
  });
});

describe("merge asc", () => {
  it("should merge an empty array with a non-empty array", () => {
    const arr1: number[] = [];
    const arr2 = [1, 3, 5];
    const result = mergeByAsc(arr1, arr2);
    expect(result).toEqual([1, 3, 5]);
  });

  it("should merge two non-empty arrays with a merge condition", () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const result = mergeByAsc(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle arrays with duplicate values", () => {
    const arr1 = [1, 2, 2, 4];
    const arr2 = [2, 3, 5, 5];
    const result = mergeByAsc(arr1, arr2);
    expect(result).toEqual([1, 2, 2, 2, 3, 4, 5, 5]);
  });
});

describe("merge desc", () => {
  it("should merge an empty array with a non-empty array", () => {
    const arr1: number[] = [];
    const arr2 = [5, 3, 1];
    const result = mergeByDesc(arr1, arr2);
    expect(result).toEqual([5, 3, 1]);
  });

  it("should merge two non-empty arrays with a merge condition", () => {
    const arr1 = [5, 3, 1];
    const arr2 = [6, 4, 2];
    const result = mergeByDesc(arr1, arr2);
    expect(result).toEqual([6, 5, 4, 3, 2, 1]);
  });

  it("should handle arrays with duplicate values", () => {
    const arr1 = [4, 2, 2, 1];
    const arr2 = [5, 5, 3, 2];
    const result = mergeByDesc(arr1, arr2);
    expect(result).toEqual([5, 5, 4, 3, 2, 2, 2, 1]);
  });
});
