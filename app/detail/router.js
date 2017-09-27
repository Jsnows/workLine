import Vue from 'vue'
import Router from 'vue-router'
import bar  from 'components/bar/bar'

/**
 *  需要引入的路由模板
 *  example : import Hello from 'router/hello/App.vue'
 */



Vue.use(Router);

export default new Router({
	routes: [
	    {
			path: '/',
			name: 'nav',
			component: bar
	    }
	]
})
