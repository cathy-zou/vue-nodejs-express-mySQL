<template>
  <div class="delivery-modify-container">
    <panels title="修改收货详情">
      <div slot="subtitle">
        <yd-button @click.native="handleCancel" type="hollow">取消</yd-button>
        <yd-button @click.native="handleSave" type="primary">保存</yd-button>
      </div>
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">收件人姓名：</span>
          <yd-input slot="right" required v-model="deliveryInfo.name" max="20" placeholder="请输入收件人姓名"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">联系电话：</span>
          <yd-input regex="mobile" slot="right" type="number" v-model="deliveryInfo.mobile" placeholder="请输入联系电话"></yd-input>
        </yd-cell-item>
        <yd-cell-item arrow>
          <span slot="left">所在地区：</span>
          <input slot="right" type="text" @click.stop="show1 = true" v-model="deliveryInfo.model1" readonly placeholder="请选择收货地址">
        </yd-cell-item>
        <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
        <yd-cell-item class="delivery-des">
          <yd-textarea slot="right" v-model="deliveryInfo.des" placeholder="您有什么想要跟店家说的...." maxlength="100"></yd-textarea>
        </yd-cell-item>
      </yd-cell-group>
    </panels>
  </div>
</template>
<script>
import panels from '@/components/panel/panel'
import { routers } from '@/common/constant'
import District from 'ydui-district/dist/jd_province_city_area_id'
export default {
  data () {
    return {
      deliveryInfo: {
        name: '',
        mobile: '',
        model1: '',
        des: ''
      },
      show1: false,
      district: District
    }
  },
  components: { panels },
  methods: {
    result1 (ret) {
      this.deliveryInfo.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3
    },
    handleSave () {
      console.log(this.deliveryInfo)
      this.$router.push({path: routers.orderInfo})
    },
    handleCancel () {
      this.$router.push({path: routers.orderInfo})
    }
  }
}
</script>
