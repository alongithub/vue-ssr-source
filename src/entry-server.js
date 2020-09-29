/*
 * @Description: 服务端入口
 * @Author: sunwenlong
 * @Date: 2020-09-27 16:39:24
 * @LastEditors: sunwenlong
 * @LastEditTime: 2020-09-29 11:39:08
 */
import {createApp} from './app';

// vue实例的工厂
// 每个客户端请求到的都是一个新的vue实例，防止状态污染
// export default content => {
//     const {app} = createApp();

//     // 服务端路由，数据预取

//     return app;
// }

export default async context => {
    const {app, router, store} = createApp();

    const meta = app.$meta();

    router.push(context.url);

    context.meta = meta;

    await new Promise(router.onReady.bind(router));

    context.rendered = () => {
        // renderer 会把 content.state中的数据内联到页面模板中
        // 最终发送给客户端的页面中会包含一段脚本：window.__INITIAL_STATE__ = context.state;
        // 客户端就要把页面中的window.__INITIAL_STATE__ 取出来填充到客户端store中去
        context.state = store.state;
    }

    return app;
}

// export default context => {
//   // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
//     // 以便服务器能够等待所有的内容在渲染前，
//     // 就已经准备就绪。
//   return new Promise((resolve, reject) => {
//     const { app, router } = createApp()

//     // 设置服务器端 router 的位置
//     router.push(context.url)

//     // 等到 router 将可能的异步组件和钩子函数解析完
//     router.onReady(() => {
//       const matchedComponents = router.getMatchedComponents()
//       // 匹配不到的路由，执行 reject 函数，并返回 404
//       if (!matchedComponents.length) {
//         return reject({ code: 404 })
//       }

//       // Promise 应该 resolve 应用程序实例，以便它可以渲染
//       resolve(app)
//     }, reject)
//   })
// }