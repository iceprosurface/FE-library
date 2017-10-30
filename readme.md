### 简介

这是一个面向自己使用的 font-end 仓库，包括但不限于前端方面的仓库和样例代码。

通常而言，除了直接简单的基本实现以外，如果可以的话,都会给出一个包含更齐全，更加优秀的库。


### 编译

由于开发环境是webstorm， 所以这里对于简单的库文件，将完全不适用 gulp 等流工具构建，而对于相对较为复杂的内容将会使用成熟工具

如 webpack/gulp/grunt 等构建

#### 1. javascript

无特殊需求，所有 javascript 代码将会使用 es6 版本

无特殊需求，所有 javascript 代码将通过 File Watch 经过 babel 编码，并携带 sourcemap

#### 2. sass/less

项目基本不会直接使用css， 如无特殊需求将会使用上述两种预处理器

无特殊需求，所有 sass/less 代码将会通过 File Watch 经过 lessc/sass 编码，可能携带sourcemap
