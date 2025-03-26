# 电商购物平台

使用Vue搭建的在线电商平台，包括首页，商品详情，购物车，支付，登录注册等多个模块。

## 	项目亮点

1.	通过使用自定义懒加载指令，对图片和组件进行按需加载，成功将LCP平均缩短了30%；
2.	通过强制销毁重建组件实例，使组件的生命周期钩子重新调用，解决了分类数据无法更新的问题；
3.	通过二次封装Axios配置请求拦截器，将token添加到请求头上，从而完成用户认证的功能；
4.	通过封装复杂的sku电商组件，抽离商品种类选择的业务逻辑，成功实现了商品规格选择的业务功能；


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
