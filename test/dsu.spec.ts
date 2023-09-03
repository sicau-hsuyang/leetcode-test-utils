import { GeneralDsu } from "../src/dsu";

describe("GeneralDsu", () => {
  let dsu: GeneralDsu<number>;

  beforeEach(() => {
    dsu = new GeneralDsu<number>();
  });

  test("Initialization", () => {
    dsu.init([1, 2, 3, 4, 5]);
    expect(dsu.find(1)).toBe(0); // 1 是第一个元素
    expect(dsu.find(3)).toBe(2); // 3 是第三个元素
  });

  test("Union and Find", () => {
    dsu.init([1, 2, 3, 4, 5]);
    dsu.union(1, 2);
    expect(dsu.find(1)).toBe(0); // 合并后应该返回 0，[[1,2], [3], [4], [5]]
    expect(dsu.find(2)).toBe(0); // 合并后应该返回 0，[[1,2], [3], [4], [5]]
    expect(dsu.find(3)).toBe(2);
    dsu.union(4, 5);
    expect(dsu.find(4)).toBe(3); // 合并后应该返回 3，[[1,2], [3], [4, 5]]
    expect(dsu.find(5)).toBe(3); // 合并后应该返回 3，[[1,2], [3], [4, 5]]
    dsu.union(1, 4);
    expect(dsu.find(1)).toBe(0); // 合并后应该返回 0, [[1,2, 4, 5], [3]]
    expect(dsu.find(4)).toBe(0); // 合并后应该返回 0, [[1,2, 4, 5], [3]]
  });

  test("Counter", () => {
    dsu.init([1, 2, 3, 4, 5]);
    dsu.union(1, 2); // [[1, 2], [3], [4], [5]]
    dsu.union(4, 5); // [[1, 2], [3], [4, 5]]
    dsu.union(1, 4); // [[1, 2, 4, 5], [3]]
    expect(dsu.counter()).toBe(2); // 所有合并操作后应该只剩下2个根节点
  });

  test("Find non-existing element", () => {
    dsu.init([1, 2, 3, 4, 5]);
    expect(dsu.find(6)).toBe(-1); // 查找不存在的元素应该返回 -1
  });

  test("Union already unioned sets", () => {
    dsu.init([1, 2, 3, 4, 5]);
    dsu.union(1, 2); // [[1, 2], [3], [4], [5]]
    dsu.union(4, 5); // [[1, 2], [3], [4, 5]]
    dsu.union(1, 4); // [[1, 2, 4, 5], [3]]
    // 试图再次合并已经合并的集合，不应该影响结果
    dsu.union(1, 4); // [[1, 2, 4, 5], [3]]
    expect(dsu.counter()).toBe(2); // 所有元素合并后应该只剩下2个根节点
  });
});
