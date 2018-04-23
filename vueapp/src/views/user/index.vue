<template>
  <div class="user-container">
    <div class="userInfo-container">
      <div class="userInfo-image-container">
        <img src="../../assets/logo.png" alt="">
      </div>
      <div class="userInfo-info-container">
        <table>
          <tr>
            <td>昵称:</td>
            <td>{{userInfo.name}}</td>
          </tr>
          <tr>
            <td>性别:</td>
            <td>{{userInfo.gender | genderFilter}}</td>
          </tr>
          <tr>
            <td>年龄:</td>
            <td>{{userInfo.age}}</td>
          </tr>
        </table>
      </div>
    </div>
    <yd-grids-group :rows="4">
      <yd-grids-item :link="item.link" v-for="(item, key) in list" :key="key">
        <span slot="text">{{item.name}}</span>
      </yd-grids-item>
    </yd-grids-group>
    <footers></footers>
  </div>
</template>

<script type="text/babel">
import footers from '../layout/footer'
import { routers } from '@/common/constant'

export default {
  data () {
    return {
      userInfo: {},
      list: [
        { name: '购物车', link: routers.cartlist },
        { name: '待发货', link: routers.sendList },
        { name: '已发货', link: routers.sentList },
        { name: '已购商品', link: routers.boughtList }
      ]
    }
  },
  components: { footers },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get('http://localhost:3000/user/getUser?id=' + 1).then((res) => {
        this.userInfo = res.data.data[0]
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
