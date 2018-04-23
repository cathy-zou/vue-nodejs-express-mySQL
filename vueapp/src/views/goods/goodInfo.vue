<template>
  <div class="good-info">
    <yd-slider autoplay="3000">
      <yd-slider-item v-for="(item, key) in list" :key="key">
        <yd-lightbox-img @click.native="viewImage(item)" :src="item.src"></yd-lightbox-img>
      </yd-slider-item>
    </yd-slider>
    <div class="good-price-container">
      <div class="price-info">
        <p>
          <span class="current-price"> ¥ 280</span>
          <span class="del-price">¥ 388</span>
        </p>
        <p class="delivery-free">运费：免运费</p>
      </div>
      <div>
        <yd-spinner max="999" unit="1" v-model="num"></yd-spinner>
      </div>
      <div class="btns-group">
        <yd-button type="danger" @click.native="handleBuy">立即下单</yd-button>
        <yd-button type="warning" @click.native="handleCart">加入购物车</yd-button>
      </div>
    </div>
    <div class="good-standard-container">
      <panels title="产品详情">
        <columns>
          <span slot="left">毛重</span>
          <span slot="right">XXX</span>
        </columns>
        <columns>
          <span slot="left">净重</span>
          <span slot="right">XXX</span>
        </columns>
        <columns>
          <span slot="left">产地</span>
          <span slot="right">XXX</span>
        </columns>
        <columns>
          <span slot="left">所在地</span>
          <span slot="right">XXX</span>
        </columns>
      </panels>
    </div>
    <div class="good-des">
      <img v-for="(item, key) in list" :key="key" :src="item.src" alt="">
    </div>
    <yd-popup v-model="isShow" position="center" width="90%">
      <img :src="viewImageSrc" alt="">
    </yd-popup>
  </div>
</template>
<script>
import { routers } from '@/common/constant'
import panels from '@/components/panel/panel'
import columns from '@/components/columns/columns'
export default {
  data () {
    return {
      num: 1,
      list: [
        {id: 1, src: 'http://static.ydcss.com/uploads/ydui/1.jpg', special: '相机：灵犀相通，妙不可言。'},
        {id: 2, src: 'http://static.ydcss.com/uploads/ydui/2.jpg', special: '体验：强劲性能，持久动力。'},
        {id: 3, src: 'http://static.ydcss.com/uploads/ydui/3.jpg', special: '设计：美不胜收，爱不释手。'}
      ],
      isShow: false,
      viewImageSrc: ''
    }
  },
  components: { panels, columns },
  methods: {
    handleBuy () {
      this.$router.push({path: routers.orderInfo})
    },
    handleCart () {
      console.log('加入购物车')
    },
    viewImage (item) {
      this.isShow = true
      this.viewImageSrc = item.src
      console.log('查看图片')
    }
  }
}
</script>
