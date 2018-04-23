<template>
  <div class="cart-container">
    <yd-checkbox-group v-model="checkList">
      <ul class="cart-list">
        <li class="cart-item" v-for="(item, index) in list" v-bind:key="index">
          <router-link :to="ToGoodInfo + '?id=' + item.id">
            <div class="cart-header">
              <yd-checkbox :val="'xxx店铺'"></yd-checkbox>
            </div>
            <div class="cart-body">
              <div class="cart-image-item">
                <img src="../../assets/logo.png" alt="">
              </div>
              <div class="cart-info">
                <h6>xxxxxxxxxxxxxxxxxxxxxxxx品牌</h6>
                <p>都好好玩大河网ID还哦配合我dwadawdawdawdawdawdawd待会打我回答我会大大我等哈打完我好嗲和我都怕和我嗲还多我我回答很稳定</p>
                <div class="price-container">
                  <span><i>单价</i> ¥ 5.00</span>
                  <yd-spinner max="999" unit="1" v-model="item.spinner1"></yd-spinner>
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </yd-checkbox-group>
    <!--下单底部-->
    <footer class="order-item">
      <i>合计</i>
      <yd-countup
        endnum="1200"
        duration="3"
        decimals="2"
        separator=","
        prefix="¥"
        suffix="元"
      ></yd-countup>
      <router-link :to="toOrderInfo">
        <yd-button type="danger">立即购买</yd-button>
      </router-link>
    </footer>
  </div>
</template>

<script type="text/babel">
import { routers } from '@/common/constant'

export default {
  data () {
    return {
      toOrderInfo: routers.orderInfo,
      ToGoodInfo: routers.goodInfo,
      list: [{ id: 1, spinner1: 1 }, { id: 2, spinner1: 3 }, { id: 3, spinner1: 5 }, { id: 4, spinner1: 4 }],
      checkList: []
    }
  },
  methods: {
  }
}
</script>
