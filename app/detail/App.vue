<template>
    <div>
        <router-view></router-view>
        <div class="div">
            <div class="block" @click="divClick()">
                <span class="demonstration">{{'进度：'+value1}}</span>
                <el-slider v-model="value1"></el-slider>
            </div>
        </div>
    </div>
        
</template>

<script>
    /**
     *  引入工具类库 
     *  example : import apiName from 'api/apiName'
     */
    
    /**
     *  引入组件 以及 组件mutation
     *  example : import comName from 'components/com-name/com-name'
     *  example : import * as comname_mt from 'components/com-name/com-name-mutation-types'
     */

    /**
     *  组件实例对象
     */
    export default {
        components: {

        },
        data: function() {
            return {
                value1: 0,
            }
        },
        computed: {

        },
        methods: {
            divClick(){}
        },
        beforeCreate() {

        },
        created() {

        }
        
    }

    
</script>

<!-- CSS 样式 -->
<!-- <style src="static/css/global.css"></style> -->
<style src="element-ui-css/index.css"></style>
<style src="static/css/_global.scss" lang="scss"></style>
<style src="static/css/change_eui_slider.scss" lang="scss"></style>



