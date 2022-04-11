import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pluginJson from '@rollup/plugin-json'
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import vuePlugin from 'rollup-plugin-vue';
import jsx from "acorn-jsx";
import pkg from './package.json';

const extensions = [".ts", ".js", ".tsx"];

export default {
  input: './src/plots/index.ts',
  output:[
    {    
      file: pkg.umd,
      format: 'umd',
      name: 'tslib' 
    },
    {    
      file: pkg.cjs, 
      format: 'cjs'
    },
    {    
      file: pkg.esm,
      format: 'esm'
    }
  ],
  plugins: [
    typescript({
      exclude: "node_modules/**"
    }),
    resolve({ mainFields: ["module", "main", "browser"] }), // 查找和打包node_modules中的第三方模块
    commonjs({ extensions, sourceMap: true }), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    pluginJson(),
    vuePlugin(),
    babel({ babelHelpers: "bundled", extensions })
  ],
  acornInjectPlugins: [jsx()],
  external: ["vue", "@antv/g2","lodash"],
};