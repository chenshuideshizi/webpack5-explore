# webpack5 explore

webpack5 初探


> WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.

```js
  performance: {
    hints: false,
  },
```

### postcss

#### postcss autoprefixer 与  postcss-preset-env 的区别
- autoprefixer 添加了 vendor 浏览器前缀，它使用 Can I Use 上面的数据。
- postcss-preset-env 允许你使用未来的 CSS 特性。

参考：https://github.com/postcss/postcss/blob/main/docs/README-cn.md


### babel

> We noticed you're using the `useBuiltIns` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the `corejs` option.

安装 corejs 并配置版本


### webpack

> index.js:138 HtmlWebpackPlugin.evaluateCompilationResult

对项目的 webpack 版本进行降级，降到 v5.22.0 以下。

或 update html-webpack-plugin@4.x.x -> @5.x.x

参考：

https://github.com/jantimon/html-webpack-plugin/issues/1603

https://github.com/webpack/webpack/issues/12689

#### proxy 一直不生效

解决办法：添加 secure: false

```
      proxy: {
        '/api': {
          target: 'http://rtspodhy.commu.gmtech.top',
          changeOrigin: true,
          secure: false
        }
      }
```


#### Content not from webpack is served from 

