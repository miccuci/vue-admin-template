<template>
  <div class="app-wrapper">
    <app-header />
    <div class="body-container">
      <app-main />
    </div>
    <div class="footer-container">{{ $t('messages.copyright') }}</div>
  </div>
</template>

<script>
import { AppHeader, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";
  .body-container{
    height: calc(100vh - 64px);
    overflow: auto;
    margin:64px auto;
  }
  .main-container{
    margin: 0 auto;
    height: 100%;
    position: relative;
  }
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .footer-container{
    width: 100%;
    position: fixed;
    bottom: 0;
    line-height: 24px;
    font-size: 12px;
    color: #999;
    text-align: center;
  }
</style>
