// 该文件专门用于创建整个应用的路由器
import {createRouter,createWebHashHistory} from 'vue-router'
//引入组件
import About from '../components/About'
import Home from '../components/Home'
import TestRouter from '../components/TestRouter'

//创建并暴露一个路由器
export default createRouter({
	history: createWebHashHistory(),
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home
		},
		{
			name:'TestRouter',
			path:'/testRouter',
			component:TestRouter
		}
	]
})

