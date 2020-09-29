/*
 * @Description: 客户端入口
 * @Author: sunwenlong
 * @Date: 2020-09-27 16:37:31
 * @LastEditors: sunwenlong
 * @LastEditTime: 2020-09-29 12:53:33
 */

import {createApp} from './app';

const {app, router, store} = createApp();

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
    app.$mount('#app');
})

// app.$mount('#app');

