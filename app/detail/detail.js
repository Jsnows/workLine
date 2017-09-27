/**
 *  引入框架
 */
import Vue from 'vue'
import store from './store'
import zepto from 'zepto'
import eui from 'element-ui'
/**
 *  引入根组件
 */
import App from './App'
import router from './router'
/**
 *  start
 */
Vue.use(eui)
new Vue({
	el: '#mountRoot',
	store,
	router,
	components: { App }
})
