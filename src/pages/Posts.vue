<!--
 * @Description: 服务端预取数据展示文章列表
 * @Author: sunwenlong
 * @Date: 2020-09-29 11:17:05
 * @LastEditors: sunwenlong
 * @LastEditTime: 2020-09-29 14:00:13
-->
<template>
    <div class='posts'>
        <h1>posts list</h1>
        <ul>
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex';

export default {
    name: 'Posts',
    metaInfo: {
        title: '文章'
    },
    data() {
        return {};
    },
    computed: {
        ...mapState(['posts']),
    },
    methods: {
        ...mapActions(['getPosts']),
    },
    // vue ssr 为服务端提供的特殊的生命周期函数
    serverPrefetch() {
        // 发起action 返回Promise
        return this.getPosts();
    }
    
}
</script>