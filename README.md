# vue3-project

## npm init vite-app project-name

- 使用 vite 临时搭建 项目。

## vue3 相对于 vue2 最大的变化

- composition api 类似于 react 的 hooks 。
  - option api 与 composition api 的区别。
    - 以前可以通过混合来解决。高内聚。
- 除了 vue-cli 的脚手架，出了一个 vite 的构建工具。
  - npm init vite-app my-project 临时使用 vite 搭建项目。
- vue2 是使用的一个构造函数创建对象，vue3 是使用 createApp 创建的一个对象，不存在构造函数，使用插件的时候略有差异。Vue.use()。
- vue3 输出的 this 是个代理 proxy 对象。

## 使用 vite 搭建的项目稍微区别于 vue-cli

- 打包后的文件不一样了，放到了根目录下，其余的静态资源也略有区别。
- js 文件里面的引用不可以省略 .vue 文件了，只可以省略 .js 文件。

## vscode 更好的同时开发 vue3 和 vue2 。

- 解决 eslint-plugin-vue 插件报的 vue3 不是单节点的错误。
  - https://segmentfault.com/a/1190000039880312 。
