import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let Layout = resolve => { require(['@/views/layout/layout'], resolve) }
export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: 'home',
      children: [
        { name: '首页', path: 'home', component: resolve => { require(['@/views/home'], resolve) } }
      ]
    },
    {
      path: '/user',
      redirect: 'userInfo',
      component: Layout,
      children: [
        { name: '个人中心', path: 'userInfo', component: resolve => { require(['@/views/user'], resolve) } },
        { name: '待发货列表', path: 'sendList', component: resolve => { require(['@/views/user/checkSendGood'], resolve) } },
        { name: '已发货列表', path: 'sentList', component: resolve => { require(['@/views/user/checkSendGood'], resolve) } },
        { name: '历史购买列表', path: 'boughtList', component: resolve => { require(['@/views/user/checkSendGood'], resolve) } },
        { name: '查看物流', path: 'checkDelivery', component: resolve => { require(['@/views/user/checkDelivery'], resolve) } }
      ]
    },
    {
      path: '/cart',
      redirect: 'cartList',
      component: Layout,
      children: [
        { name: '购物车', path: 'cartList', component: resolve => { require(['@/views/cart'], resolve) } },
        { name: '订单详情', path: 'orderInfo', component: resolve => { require(['@/views/cart/orderInfo'], resolve) } },
        { name: '管理收货详情', path: 'deliveryInfo', component: resolve => { require(['@/views/cart/deliveryInfo'], resolve) } },
        { name: '修改收货详情', path: 'deliveryModify', component: resolve => { require(['@/views/cart/deliveryModify'], resolve) } },
        { name: '成功订单', path: 'successOrder', component: resolve => { require(['@/views/cart/successOrder'], resolve) } },
        { name: '失败订单', path: 'failOrder', component: resolve => { require(['@/views/cart/failOrder'], resolve) } }
      ]
    },
    {
      path: '/goods',
      component: Layout,
      redirect: 'goodList',
      children: [
        { name: '商品列表', path: 'goodList', component: resolve => { require(['@/views/goods/goodList'], resolve) } },
        { name: '商品详情', path: 'goodInfo', component: resolve => { require(['@/views/goods/goodInfo'], resolve) } }
      ]
    }
  ]
})
