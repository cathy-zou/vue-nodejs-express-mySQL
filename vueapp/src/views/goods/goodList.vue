<template>
  <div class="good-list-container">
    <yd-pullrefresh :callback="loadList" ref="pullrefresh">
      <yd-list theme="4">
        <yd-list-item type="link" :href="toGoodInfo + '?id=' + item.id" v-for="(item, key) in list" :key="key">
            <img slot="img" :src="item.img">
            <span class="good-title" slot="title">{{item.title}}</span>
            <yd-list-other slot="other">
              <div class="price-container">
                <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
                <span class="list-del-price">¥{{item.productprice}}</span>
              </div>
              <div>xxx店铺</div>
            </yd-list-other>
        </yd-list-item>
      </yd-list>
    </yd-pullrefresh>
  </div>
</template>

<script type="text/babel">
import { routers } from '@/common/constant'
export default {
  data () {
    return {
      toGoodInfo: routers.goodInfo,
      page: 1,
      pageSize: 10,
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
  created () {
    this.loadList()
  },
  computed: {
    query () {
      return this.$route.query.search
    }
  },
  methods: {
    loadList () {
      this.$http.post('http://localhost:3000/goodList/getList', {
        page: this.page,
        pagesize: this.pageSize,
        query: this.query
      }).then(res => {
        const _list = res.data.data

        this.list = [...this.list, ..._list]
        this.$dialog.toast({
          mes: _list.length > 0 ? '为您更新了' + _list.length + '条内容' : '已是最新内容'
        })
        this.$refs.pullrefresh.$emit('ydui.pullrefresh.finishLoad')
        this.page++
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
