import typescript from "rollup-plugin-typescript2";
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: "src/index.ts", // 入口文件路径
  output: {
    file: "dist/index.mjs", // 输出文件路径
    format: "esm", // CommonJS 模块格式
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: "tsconfig.json", // TypeScript 配置文件路径
    }),
  ],
};
