import { SimpleDsu } from "../src/simple-dsu"; // 请将路径替换为你的实际路径

describe("SimpleDsu", () => {
  let dsu: SimpleDsu;

  beforeEach(() => {
    dsu = new SimpleDsu(5); // 初始化一个包含 5 个元素的并查集
  });

  test("Initialization", () => {
    expect(dsu.dataSet).toEqual([-1, -1, -1, -1, -1]);
  });

  test("Union and Find", () => {
    dsu.union(1, 2);
    dsu.union(3, 4);

    expect(dsu.find(1)).toBe(0); // 1 和 2 合并后根节点应该是1，所索引应该是0
    expect(dsu.find(2)).toBe(0); // 1 和 2 合并后根节点应该是1， 所以索引应该是0
    expect(dsu.find(3)).toBe(2); // 3 和 4 合并后根节点应该是3，所以索引应该是2
    expect(dsu.find(4)).toBe(2); // 3 和 4 合并后根节点应该是3，所以索引应该是2

    dsu.union(2, 4);
    expect(dsu.find(1)).toBe(0); // 1、2、3、4 合并后根节点应该是1，索引应该是0
    expect(dsu.find(2)).toBe(0); // 1、2、3、4 合并后根节点应该是1，索引应该是0
    expect(dsu.find(3)).toBe(0); // 1、2、3、4 合并后根节点应该是1，索引应该是0
    expect(dsu.find(4)).toBe(0); // 1、2、3、4 合并后根节点应该是1，索引应该是0
  });

  test("Count", () => {
    expect(dsu.count()).toBe(5); // 初始状态下有 5 个独立的集合

    dsu.union(1, 2); // [[1,2], [3], [4], [5]]
    expect(dsu.count()).toBe(4); // 合并后有 4 个集合

    dsu.union(3, 4); // [[1,2], [3,4], [5]]
    expect(dsu.count()).toBe(3); // 再次合并后有 3 个集合

    dsu.union(2, 4); //[[1,2, 3, 4], 5]
    expect(dsu.count()).toBe(2); // 再次合并后有 2 个集合

    dsu.union(1, 4);
    expect(dsu.count()).toBe(2); // 再次合并后仍然有 2 个集合
  });

  test("Find non-existing element", () => {
    expect(dsu.find(6)).toBe(-1); // 查找不存在的元素应该返回 -1
  });
});
