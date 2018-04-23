<template>
  <!--底部-->
  <yd-tabbar>
    <yd-tabbar-item title="首页" :link="toHome" :active="router === toHome">
      <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="购物车" :link="toCartList" :active="router === toCartList">
      <yd-icon name="shopcart" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="个人中心" :link="toUserInfo" :active="router === toUserInfo">
      <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
  </yd-tabbar>
</template>
<script>
import { routers } from '@/common/constant'

export default {
  data () {
    return {
      toHome: routers.home,
      toCartList: routers.cartlist,
      toUserInfo: routers.userInfo
    }
  },
  computed: {
    router () {
      return this.$route.path
    }
  }
}
</script>
