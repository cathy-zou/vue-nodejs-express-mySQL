<template>
  <yd-layout>
    <!--头部-->
    <yd-navbar slot="navbar" title="Vue">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="handleBack"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <!--内容-->
    <app-main></app-main>
  </yd-layout>
</template>
<style lang="scss" scoped>
</style>
<script>
import { routers } from '@/common/constant'
import { appMain } from '@/views/layout'
export default {
  data () {
    return {
      toHome: routers.home
    }
  },
  components: { appMain },
  created () {
  },
  methods: {
    handleBack () {
      this.$router.back()
    }
  }
}
</script>
