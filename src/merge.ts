import ncp from "node-clipboardy";

const generalTpl = `
/**
 * 合并两个有序数组
 * @param arr1 有序数组1
 * @param arr2 有序数组2
 * @param mergePredicate 合并依据
 * @returns
 */
function merge<T>(arr1: T[], arr2: T[], mergePredicate: (val1: T, val2: T) => boolean): T[] {
  const mergedResult: T[] = [];
  let offset1 = 0;
  let offset2 = 0;
  while (offset1 < arr1.length && offset2 < arr2.length) {
    const val1 = arr1[offset1];
    const val2 = arr2[offset2];
    if (mergePredicate(val1, val2)) {
      mergedResult.push(val1);
      offset1++;
    } else {
      mergedResult.push(val2);
      offset2++;
    }
  }

  while (offset1 < arr1.length) {
    const val1 = arr1[offset1++];
    mergedResult.push(val1);
  }

  while (offset2 < arr2.length) {
    const val2 = arr2[offset2++];
    mergedResult.push(val2);
  }

  return mergedResult;
}
`;

const ascTpl = `
/**
 * 合并两个有序数组
 * @param arr1 有序数组1
 * @param arr2 有序数组2
 * @param mergePredicate 合并依据
 * @returns
 */
function merge<T>(arr1: T[], arr2: T[], mergePredicate: (val1: T, val2: T) => boolean): T[] {
  const mergedResult: T[] = [];
  let offset1 = 0;
  let offset2 = 0;
  while (offset1 < arr1.length && offset2 < arr2.length) {
    const val1 = arr1[offset1];
    const val2 = arr2[offset2];
    if (mergePredicate(val1, val2)) {
      mergedResult.push(val1);
      offset1++;
    } else {
      mergedResult.push(val2);
      offset2++;
    }
  }

  while (offset1 < arr1.length) {
    const val1 = arr1[offset1++];
    mergedResult.push(val1);
  }

  while (offset2 < arr2.length) {
    const val2 = arr2[offset2++];
    mergedResult.push(val2);
  }

  return mergedResult;
}

/**
 * 升序合并两个有序数组
 * @param arr1
 * @param arr2
 * @returns
 */
function mergeByAsc(arr1: number[], arr2: number[]) {
  const mergePredicate = (a: number, b: number) => {
    return a < b;
  };
  return merge(arr1, arr2, mergePredicate);
}
`;

const descTpl = `
/**
 * 合并两个有序数组
 * @param arr1 有序数组1
 * @param arr2 有序数组2
 * @param mergePredicate 合并依据
 * @returns
 */
function merge<T>(arr1: T[], arr2: T[], mergePredicate: (val1: T, val2: T) => boolean): T[] {
  const mergedResult: T[] = [];
  let offset1 = 0;
  let offset2 = 0;
  while (offset1 < arr1.length && offset2 < arr2.length) {
    const val1 = arr1[offset1];
    const val2 = arr2[offset2];
    if (mergePredicate(val1, val2)) {
      mergedResult.push(val1);
      offset1++;
    } else {
      mergedResult.push(val2);
      offset2++;
    }
  }

  while (offset1 < arr1.length) {
    const val1 = arr1[offset1++];
    mergedResult.push(val1);
  }

  while (offset2 < arr2.length) {
    const val2 = arr2[offset2++];
    mergedResult.push(val2);
  }

  return mergedResult;
}

/**
 * 降序合并两个有序数组
 * @param arr1
 * @param arr2
 * @returns
 */
function mergeByDesc(arr1: number[], arr2: number[]) {
  const mergePredicate = (a: number, b: number) => {
    return b < a;
  };
  return merge(arr1, arr2, mergePredicate);
}
`;

/**
 * 合并两个有序数组
 * @param arr1 有序数组1
 * @param arr2 有序数组2
 * @param mergePredicate 合并依据
 * @returns
 */
export function merge<T>(
  arr1: T[],
  arr2: T[],
  mergePredicate: (val1: T, val2: T) => boolean,
  writeSourceCode: () => void = () => {
    ncp.writeSync(generalTpl);
  }
): T[] {
  const mergedResult: T[] = [];
  let offset1 = 0;
  let offset2 = 0;
  while (offset1 < arr1.length && offset2 < arr2.length) {
    const val1 = arr1[offset1];
    const val2 = arr2[offset2];
    if (mergePredicate(val1, val2)) {
      mergedResult.push(val1);
      offset1++;
    } else {
      mergedResult.push(val2);
      offset2++;
    }
  }

  while (offset1 < arr1.length) {
    const val1 = arr1[offset1++];
    mergedResult.push(val1);
  }

  while (offset2 < arr2.length) {
    const val2 = arr2[offset2++];
    mergedResult.push(val2);
  }
  writeSourceCode();
  return mergedResult;
}

/**
 * 升序合并两个有序数组
 * @param arr1
 * @param arr2
 * @returns
 */
export function mergeByAsc(arr1: number[], arr2: number[]) {
  const mergePredicate = (a: number, b: number) => {
    return a < b;
  };
  return merge(arr1, arr2, mergePredicate, () => {
    ncp.writeSync(ascTpl);
  });
}

/**
 * 降序合并两个有序数组
 * @param arr1
 * @param arr2
 * @returns
 */
export function mergeByDesc(arr1: number[], arr2: number[]) {
  const mergePredicate = (a: number, b: number) => {
    return b < a;
  };
  return merge(arr1, arr2, mergePredicate, () => {
    ncp.writeSync(descTpl);
  });
}
