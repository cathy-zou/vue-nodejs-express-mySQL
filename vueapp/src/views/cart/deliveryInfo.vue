<template>
  <div class="delivery-info-container">
    <div class="delivery-header">
      <i>管理收货信息</i>
      <router-link :to="addDeliveryLink">
        <span>新增收货信息</span>
      </router-link>
    </div>
    <div class="delivery-body">
      <yd-radio-group v-model="radio2">
        <ul>
          <li v-for="(item, key) in 5" :key="key">
            <div class="delivery-info-header">
              <yd-radio val="1">默认地址</yd-radio>
            </div>
            <div class="delivery-info-body">
              <columns>
                <span slot="left">收件人</span>
                <span slot="right">xxx</span>
              </columns>
              <columns>
                <span slot="left">地址</span>
                <span slot="right">xxxxxxx address</span>
              </columns>
              <columns>
                <span slot="left">联系电话</span>
                <span slot="right">15879865487</span>
              </columns>
            </div>
          </li>
        </ul>
      </yd-radio-group>
    </div>
  </div>
</template>
<script>
import { routers } from '@/common/constant'
import columns from '@/components/columns/columns'
export default {
  data () {
    return {
      radio2: '1',
      addDeliveryLink: routers.deliveryModify
    }
  },
  components: { columns }
}
</script>
