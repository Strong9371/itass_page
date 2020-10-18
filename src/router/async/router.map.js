// 视图组件
const view = {
  tabs: () => import('@/layouts/tabs'),
  blank: () => import('@/layouts/BlankView'),
  page: () => import('@/layouts/PageView')
}

// 路由组件注册
const routerMap = {
  login: {
    authority: '*',
    path: '/login',
    component: () => import('@/pages/login')
  },
  root: {
    path: '/',
    name: '首页',
    redirect: '/login',
    component: view.tabs
  },
  dggfa:{
    name: '外呼首页',
    component: view.blank
  },
  myan: {
    name: '全局分析',
    component: () => import('@/pages/dggfa/myan')
  },
  moneys:{
    name: '报销',
    component: view.page
  },
  StepForm: {
    name: '发票助手',
    component: () => import('@/pages/moneys/bill')
  },
  setting:{
    name: '设置',
    component: view.page
  },
  SetPage: {
    name: '设置中心',
    component: () => import('@/pages/setting/setpage')
  },




  exception: {
    name: '异常页',
    icon: 'warning',
    component: view.blank
  },
  exp403: {
    authority: '*',
    name: 'exp403',
    path: '403',
    component: () => import('@/pages/exception/403')
  },
  exp404: {
    name: 'exp404',
    path: '404',
    component: () => import('@/pages/exception/404')
  },
  exp500: {
    name: 'exp500',
    path: '500',
    component: () => import('@/pages/exception/500')
  },

}
export default routerMap

