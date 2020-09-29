/*
 * @Description: 
 * @Author: sunwenlong
 * @Date: 2020-09-29 11:02:08
 * @LastEditors: sunwenlong
 * @LastEditTime: 2020-09-29 11:32:46
 */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            posts: []
        }),

        mutations: {
            setPosts (state, data) {
                state.posts = data;
            }
        },

        actions: {
            // 在服务端渲染期间务必让action返回一个Promise，服务端渲染时会等待数据返回
            async getPosts(context) {
                const {commit} = context;
                const {data} = await axios.get('https://cnodejs.org/api/v1/topics');
                commit('setPosts', data.data)
            }
        }
    })
}