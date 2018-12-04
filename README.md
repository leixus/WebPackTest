# WebPack
使用webpack打包项目，所有的都打包，没办法啊，es6用到了，我也很无奈啊

## 管理输出

#### 学习webpack的第三天

#### 可以入门以后的路就好走了些

##### webpack 模块热替换

通过 Node.js API,当使用 webpack dev server 和 Node.js API 时，不要将 dev server 选项放在 webpack 配置对象(webpack config object)中。而是，在创建选项时，将其作为第二个参数传递。
例如：
new WebpackDevServer(compiler, options)

