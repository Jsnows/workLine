<template>
    <div>
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">处理中心</el-menu-item>
            <el-menu-item index="3">
                <a href="javascript:;" target="_blank">订单管理</a>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    /**
     *  引入工具类库 或 Navtive API
     *  example : import widget from 'gapi/widget'
     */

    /**
     *  引入mutation-types
     *  example : import * as bar from './bar'
     */

    export default {
        data: function() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created () {
            
        }
    }

    
</script>

<!-- CSS 样式 -->
<!-- <style src="static/css/global.css"></style> -->


