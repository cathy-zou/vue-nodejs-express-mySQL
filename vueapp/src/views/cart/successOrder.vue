<template>
  <div class="success-order-container">
    <div class="success-image">
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="success-order-btns">
      <router-link :to="backToHome"><span class="back-to-home">返回首页</span></router-link>
      <router-link :to="backToCartList"><span>回到购物车</span></router-link>
    </div>
  </div>
</template>
<script>
import { routers } from '@/common/constant'
export default {
  data () {
    return {
      backToHome: routers.home,
      backToCartList: routers.cartlist
    }
  }
}
</script>
