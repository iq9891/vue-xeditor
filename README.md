# vue-xeditor
基于 VUE2 的 xeditor 富文本编辑器

[![vue-xeditor](https://img.shields.io/npm/v/vue-xeditor.svg?style=flat-square)](https://www.npmjs.org/package/vue-xeditor)
[![NPM downloads](http://img.shields.io/npm/dm/vue-xeditor.svg?style=flat-square)](https://npmjs.org/package/vue-xeditor)
<!-- [![Package Quality](http://npm.packagequality.com/shield/vue-xeditor.svg)](http://packagequality.com/#?package=vue-xeditor) -->
[![NPM downloads](https://img.shields.io/npm/dt/vue-xeditor.svg?style=flat-square)](https://npmjs.org/package/vue-xeditor)

## 结构

``` bash
.
├── build/                      # webpack 配置文件
│   └── ...
├── examples/
│   ├── esm/                    # 开发运行的例子，里面会调用封装好的组件
│   │   ├── components          # 业务级组件部分
│   │   └── ...
├── src/
│   ├── EmCkeditor.vue          # 真正的组件
│   └── index.js                # 全局注册组件，将组件引入，并添加到 vue-xeditor 对象中
├── .babelrc                    # Babel 配置
├── .eslintignore               # 如果您不想被 Eslint 检测，那么请您在这里把它加上
├── .eslintrc.js                # Eslint 配置
├── .gitattributes              # git的相关配置
├── .gitignore                  # 如果您不想被 Git 控制，那么请您在这里把它加上
├── .stylelintignore            # 不被 Stylelint 检查
├── .stylelintrc                # Stylelint 配置
└── package.json                # 启动项目的命令和依赖包等信息聚集地
```

## 命令

`npm install` 安装依赖包

`npm start` 开发环境

1. 热重载
2. vue 编译

`npm run build` 打包

1. js 打包


## 看效果

确定安装完依赖`npm install`之后，运行`npm start`，会自动调到[`http://localhost:7701`]
