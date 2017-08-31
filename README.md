# generator-milk

[![npm version](https://img.shields.io/npm/v/generator-milk.svg?style=flat)](https://www.npmjs.com/package/generator-milk) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](README.md)

For generator milk ui components, enjoy it!

## Install

```bash
cnpm install generator-milk -g
```

## Usage

```bash
# global install
cnpm install generator-milk -g

# mkdir && cd that dir
mkdir milkui-temp && cd milkui-temp

# yo milk && answer question
yo milk

# dependencies install
cnpm install

# run start
npm start
```

## Cheers

本项目目标并不是再造一个移动端组件库，而是通过打造组件开发工具和开发部分组件来深入了解组件开发过程中的方方面面。

现在这个组件库构建实现了以下一些功能 (看[这里](https://github.com/milk-ui/milk-dev)):

1. 使用 yeoman 初始化组件模板。
2. 开发调试自动刷新。
3. 支持单元测试（看[这里](https://github.com/milk-ui/milkui-button/blob/master/tests/Button.spec.js)）。
4. 打包发布自动化。
5. 支持有一个 style base 包来管理组件基础的样式定义（看[这里](https://github.com/milk-ui/milkui-button/blob/master/src/index.scss)和[这里](https://github.com/milk-ui/milkui-style-base)）。


在开发的过程中，借鉴了现在一些优秀的组件库，比如：

- [UXCore](http://uxcore.coding.me/)
- [Ant Design Mobile](https://mobile.ant.design/)
- [Ant Design](https://ant.design/index-cn)
- [Mint UI](http://mint-ui.github.io/#!/zh-cn)
- [WeUI](https://weui.github.io/react-weui/docs/)

在此表示感谢！

感兴趣的同学，欢迎提 [Issue](https://github.com/milk-ui/generator-milk/issues) & [PR](https://github.com/milk-ui/generator-milk/pulls).
