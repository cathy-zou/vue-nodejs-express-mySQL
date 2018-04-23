<template>
  <div class="home-container">
    <yd-search v-model="search" :on-submit="handleSearch"></yd-search>
    <yd-rollnotice autoplay="2000">
      <yd-rollnotice-item v-bind:key="item.id" v-for="item in notice"><span style="color:#F00;"> 荐 </span>{{item.content}}</yd-rollnotice-item>
    </yd-rollnotice>
    <yd-slider autoplay="3000">
      <yd-slider-item v-for="(item, key) in introduceList" :key="key">
        <router-link :to="toGoodInfo + '?id=' + item.id">
          <yd-lightbox-img :src="item.urlImage"></yd-lightbox-img>
        </router-link>
      </yd-slider-item>
    </yd-slider>
    <yd-grids-group :rows="3">
      <yd-grids-item v-bind:key="item.id" v-for="item in navs">
        <img slot="icon" :src="item.iconUrl">
        <span slot="text">{{item.name}}</span>
      </yd-grids-item>
    </yd-grids-group>
    <yd-infinitescroll :callback="loadList" ref="infinitescroll">

      <yd-list theme="1" slot="list">
        <yd-list-item type="link" :href="toGoodInfo + '?id=' + item.id" v-for="(item, key) in list" :key="key">
          <img slot="img" :src="item.img">
          <span slot="title">{{item.title}}</span>
          <yd-list-other slot="other">
            <div>
              <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
              <span class="list-del-price">¥{{item.productprice}}</span>
            </div>
            <div>content</div>
          </yd-list-other>
        </yd-list-item>
      </yd-list>

      <!-- 数据全部加载完毕显示 -->
      <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

      <!-- 加载中提示，不指定，将显示默认加载中图标 -->
      <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

    </yd-infinitescroll>
    <footers></footers>
  </div>
</template>

<script type="text/babel">
import footers from '../layout/footer'
import { routers } from '@/common/constant'

export default {
  data () {
    return {
      toGoodInfo: routers.goodInfo,
      page: 1,
      pageSize: 10,
      search: '',
      notice: [],
      navs: [],
      list: [],
      introduceList: []
    }
  },
  created () {
    this.getNotice()
    this.getIntroduceList()
    this.getGoodTypeList()
    this.loadList()
  },
  components: { footers },
  methods: {
    handleSearch () {
      console.log('搜索')
      this.$router.push({path: routers.goodlist, query: {search: this.search}})
    },
    loadList () {
      this.$http.post('http://localhost:3000/goodList/getList', {
        page: this.page,
        pagesize: this.pageSize
      }).then(res => {
        const _list = res.data.data

        this.list = [...this.list, ..._list]

        if (_list.length < this.pageSize || this.page === 3) {
          /* 所有数据加载完毕 */
          this.$refs.infinitescroll.$emit('ydui.infinitescroll.loadedDone')
          return
        }
        /* 单次请求数据完毕 */
        this.$refs.infinitescroll.$emit('ydui.infinitescroll.finishLoad')

        this.page++
      }).catch(err => {
        console.log(err)
      })
    },
    getNotice () {
      this.$http.get('http://localhost:3000/notice/getNotice').then(res => {
        this.notice = res.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    getIntroduceList () {
      this.$http.get('http://localhost:3000/goodList/getIntroduceList').then(res => {
        console.log(res.data)
        this.introduceList = res.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    getGoodTypeList () {
      this.$http.get('http://localhost:3000/goodType/getGoodsTypeList').then(res => {
        this.navs = res.data.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
