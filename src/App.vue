<!--
 * @Description: 
 * @Author: sunwenlong
 * @Date: 2020-09-27 16:34:26
 * @LastEditors: sunwenlong
 * @LastEditTime: 2020-09-29 11:29:56
-->
<template>
    <div id='app'>
        <ul>
            <li><router-link to="/">home</router-link></li>
            <li><router-link to="/about">about</router-link></li>
            <li><router-link to="/posts">posts</router-link></li>
        </ul>
        <!-- 路由出口 -->
        <router-view/>
    </div>
</template>
<script>
export default {
    name: 'App',
    components: {},
    data() {
        return {
            message: 'vue ssr'
        };
    },
    methods: {
        click: () => {
            console.log('点击')
        }
    },
    
}
</script>