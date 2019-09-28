# douban-weapp
豆瓣电影小程序

> 一个微信小程序项目

项目中使用了`async`和`await`语法，需要使用npm安装`regenerator-runtime`，版本必须是`@0.13.1`，否则新版本会报错，因为升级后的`regenerator-runtime`使用了`Function`函数，小程序禁止使用`Function`。

## 构建设置

``` bash
# 安装依赖
npm install
```



> 1. 微信开发者工具中开启 **详情** -> **项目设置** 中的 **使用 npm 模块**和**ES6转ES5** 选项
>
> 2. 点击菜单 **工具** -> **构建npm**

