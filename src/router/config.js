import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'
import PageView from '@/layouts/PageView'

// 路由配置
const options = {
	routes: [{
			path: '/login',
			name: '登录页',
			component: () => import('@/pages/login')
		},
		{
			path: '*',
			name: '404',
			component: () => import('@/pages/exception/404'),
		},
		{
			path: '/403',
			name: '403',
			component: () => import('@/pages/exception/403'),
		},
		{
			path: '/',
			name: '首页',
			component: TabsView,
			redirect: '/login',
			children: [{
				path: 'dggfa',
				name: '外呼首页',
				meta: {
					icon: 'line-chart'
				},
				component: BlankView,
				children: [{
					path: 'myan',
					name: '全局分析',
					meta: {
						icon: 'dashboard'
					},
					component: () => import('@/pages/dggfa/myan'),
				}]
			},
				{
					path: 'moneys',
					name: '报销',
					meta: {
						icon: 'money-collect'
					},
					component: PageView,
					children: [{
						path: 'StepForm',
						name: '发票助手',
						meta: {
							icon: 'red-envelope'
						},
						component: () => import('@/pages/moneys/bill'),
					}]
				},
				{
					path: 'setting',
					name: '设置',
					meta: {
						icon: 'setting'
					},
					component: PageView,
					children: [{
						path: 'SetPage',
						name: '设置中心',
						meta: {
							icon: 'edit'
						},
						component: () => import('@/pages/setting/setpage'),
					}]
				},





				{
					path: 'exception',
					name: '异常页',
					meta: {
						icon: 'warning',
					},
					component: BlankView,
					children: [{
							path: '404',
							name: 'Exp404',
							component: () => import('@/pages/exception/404')
						},
						{
							path: '403',
							name: 'Exp403',
							component: () => import('@/pages/exception/403')
						},
						{
							path: '500',
							name: 'Exp500',
							component: () => import('@/pages/exception/500')
						}
					]
				},

			]
		},
	]
}

export default options
