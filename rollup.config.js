import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { babel } from "@rollup/plugin-babel";

const packageJson = require("./package.json");

export default [
  {
    input: "components/index.ts",
    output: [
      {
        dir: packageJson.main,
        preserveModules: true,
        format: "cjs",
        sourcemap: true,
      },
      {
        dir: packageJson.module,
        preserveModules: true,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: "default",
          }),
        ],
        extract: true,
        minimize: true,
        extensions: [".css"],
      }),
      babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
    ],
    watch: {
      exclude: ["node_modules/**"],
    },
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "components/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts.default()],
    watch: {
      exclude: ["node_modules/**"],
    },
  },
];
