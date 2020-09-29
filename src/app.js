/*
 * @Description: 通用app入口
 * @Author: sunwenlong
 * @Date: 2020-09-27 16:35:15
 * @LastEditors: sunwenlong
 * @LastEditTime: 2020-09-29 11:16:46
 */
import Vue from 'vue';
import App from './App.vue';
import {createRouter} from './router';
import VueMeta from 'vue-meta';
import {createStore} from './store';


Vue.use(VueMeta);

Vue.mixin({
    metaInfo: {
        titleTemplate: '%s - Vue SSR',

    }
})

export function createApp() {
    const router = createRouter();
    const store = createStore();
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return {app, router, store}
}