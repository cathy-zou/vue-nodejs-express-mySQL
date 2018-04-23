<template>
  <div class="order-info">
    <panels title="收货详情">
      <span class="modify-address" slot="subtitle">
        <router-link :to="{path: toDeliveryInfo}">收货详情管理</router-link>
      </span>
      <columns>
        <span slot="left">收货人</span>
        <span slot="right">AAA</span>
      </columns>
      <columns>
        <span slot="left">收货地址</span>
        <span slot="right">收货地址addressaddress</span>
      </columns>
      <columns>
        <span slot="left">手机号码</span>
        <span slot="right">13980671865</span>
      </columns>
      <columns>
        <span slot="left">备注</span>
        <span slot="right">没有什么备注XXXXXXXXXXXXXXX</span>
      </columns>
    </panels>
    <panels title="支付方式">
      <yd-radio-group v-model="radio1">
        <div class="radio-item">
          <yd-radio val="支付宝"></yd-radio>
        </div>
        <div class="radio-item">
          <yd-radio val="微信"></yd-radio>
        </div>
        <div class="radio-item">
          <yd-radio val="银行卡"></yd-radio>
        </div>
      </yd-radio-group>
    </panels>
    <yd-preview :buttons="btns">
      <yd-preview-header>
        <div slot="left">付款金额</div>
        <div slot="right">¥2.40</div>
      </yd-preview-header>

      <yd-preview-item>
        <div slot="left">商品A</div>
        <div slot="right">单价：10 总价：10 * 3 = 30</div>
      </yd-preview-item>
      <yd-preview-item>
        <div slot="left">商品B</div>
        <div slot="right">单价：10 总价：10 * 3 = 30</div>
      </yd-preview-item>
      <yd-preview-item>
        <div slot="left">商品C</div>
        <div slot="right">单价：10 总价：10 * 3 = 30</div>
      </yd-preview-item>
    </yd-preview>
  </div>
</template>

<script type="text/babel">
import { routers } from '@/common/constant'
import columns from '@/components/columns/columns'
import panels from '@/components/panel/panel'
export default {
  data () {
    return {
      toDeliveryInfo: routers.deliveryInfo,
      radio1: '',
      btns: [
        {
          color: '#F00',
          text: '取消',
          link: {path: routers.cartlist}
        },
        {
          text: '确定',
          click: () => {
            this.$dialog.confirm({
              title: '确定要下单吗？',
              mes: '请确定收货信息是否正确',
              opts: [
                {
                  txt: '取消',
                  color: false,
                  callback: () => {
                    this.$router.push({path: routers.failOrder})
                  }
                },
                {
                  txt: '确定',
                  color: true,
                  callback: () => {
                    this.$dialog.toast({mes: '下单成功', timeout: 1000})
                    this.$router.push({path: routers.successOrder})
                  }
                }
              ]
            })
          }
        }
      ]
    }
  },
  components: { panels, columns }
}
</script>
