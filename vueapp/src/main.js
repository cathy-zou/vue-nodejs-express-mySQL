// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui' /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import * as filter from '@/common/filters'
import axios from 'axios'

import 'vue-ydui/dist/ydui.rem.css'

/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
// 引入该项目样式
import './style/index.scss'

Vue.use(YDUI)
Vue.prototype.$http = axios

Vue.config.productionTip = false

Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
