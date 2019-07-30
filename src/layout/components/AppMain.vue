<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
    <div class="footer-container">Copyright ©️ 2018 卫宁健康 版权所有</div>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #f0f2f5;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
.footer-container{
  text-align: center;
  line-height: 40px;
  height: 40px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}

</style>
