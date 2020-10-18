import Vue from 'vue'
import App from './App.vue'
import {initRouter} from './router'
import './theme/index.less'
import Antd from 'ant-design-vue'
import Viser from 'viser-vue'
import '@/mock'
import store from './store'
import 'animate.css/source/animate.css'
import Plugins from '@/plugins'
import {initI18n} from '@/utils/i18n'
import bootstrap from '@/bootstrap'
import VueClipboard from 'vue-clipboard2'

const router = initRouter(store.state.setting.asyncRoutes)
const i18n = initI18n('CN', 'US')

Vue.use(VueClipboard)
Vue.use(Antd)
Vue.config.productionTip = false
Vue.use(Viser)
Vue.use(Plugins)

bootstrap({router, store, i18n, message: Vue.prototype.$message})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')

var devInnerHeight = 1211.0 // 开发时的InnerHeight
var devDevicePixelRatio = 1.0// 开发时的devicepixelratio
var devScaleFactor = 1.3 // 开发时的ScaleFactor
var scaleFactor = require('electron').screen.getPrimaryDisplay().scaleFactor
var zoomFactor = (window.innerHeight / devInnerHeight) * (window.devicePixelRatio / devDevicePixelRatio) * (devScaleFactor / scaleFactor)
require('vue').webFrame.setZoomFactor(zoomFactor)