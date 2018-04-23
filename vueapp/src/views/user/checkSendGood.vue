<template>
  <div class="check-send-good-container">
    <panels :title="headerTitle">
      <yd-list theme="4">
        <yd-list-item type="link" :href="toGoodInfo + '?id=' + item.id" v-for="(item, key) in list" :key="key">
          <img slot="img" :src="item.img">
          <span slot="title">{{item.title}}</span>
          <yd-list-other slot="other">
            <div class="price-container">
              <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
              <span class="list-del-price">¥{{item.productprice}}</span>
            </div>
            <div class="btns-container">
              <yd-button type="primary" @click.native="handleMark" v-show="isSendList">提醒发货</yd-button>
              <yd-button type="warning" @click.native="checkDelivery" v-show="isSentList">查看物流</yd-button>
            </div>
          </yd-list-other>
        </yd-list-item>
      </yd-list>
    </panels>
  </div>
</template>
<script>
import panels from '@/components/panel/panel'
import { routers } from '@/common/constant'

export default {
  data () {
    return {
      toGoodInfo: routers.goodInfo,
      headerTitle: undefined,
      list: [
        {
          id: 1,
          img: 'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
          title: '标题标题标题标题标题',
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          id: 2,
          img: 'http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg',
          title: '骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫',
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          id: 3,
          img: 'http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg',
          title: '条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖',
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          id: 4,
          img: 'http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg',
          title: '夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫',
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          id: 5,
          img: 'http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg',
          title: '2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服',
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          id: 6,
          img: 'http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg',
          title: '男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男',
          marketprice: 56.23,
          productprice: 89.36
        }
      ]
    }
  },
  components: { panels },
  created () {
    if (this.isSendList) {
      this.headerTitle = '待发货商品'
    } else if (this.isSentList) {
      this.headerTitle = '已发货商品'
    } else {
      this.headerTitle = '历史购买商品'
    }
  },
  computed: {
    isSendList () {
      return routers.sendList === this.$route.path
    },
    isSentList () {
      return routers.sentList === this.$route.path
    },
    isBoughtList () {
      return routers.boughtList === this.$route.path
    }
  },
  methods: {
    handleMark () {
      this.$dialog.confirm({
        title: '提示',
        mes: '是否马上提醒商家发货！',
        opts: [
          {
            txt: '取消',
            color: false,
            callback: () => {
              this.$dialog.toast({mes: '你点了取消', timeout: 1000})
            }
          },
          {
            txt: '确定',
            color: true,
            callback: () => {
              this.$dialog.toast({mes: '已提醒商家发货', timeout: 1000})
              this.$router.push({path: routers.userInfo})
            }
          }
        ]
      })
    },
    checkDelivery () {
      this.$router.push({path: routers.checkDelivery})
    }
  }
}
</script>
