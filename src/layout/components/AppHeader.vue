<template>
  <div class="header-wrapper">
    <div class="sidebar-logo-container">
      <router-link key="expand" class="sidebar-logo-link" to="/">
        <h1 class="sidebar-title">{{ $t('message.systemName') }}</h1>
      </router-link>
      <sidebar class="sidebar-container" :routes="permission_routers" />
    </div>
    <div class="right-menu">
      <div class="right-menu-item">
        消息
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Sidebar } from './index'
import { getDictList } from '@/filters'

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      langList: []
    }
  },
  computed: {
    ...mapGetters([
      'permission_routers'
    ])
  },
  watch: {
    '$i18n.locale': {
      handler(val) {
        this.langList = getDictList('langList')
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-dropdown{
    top: 60px !important;
  }
  .header-wrapper{
    position: fixed;
    top: 0px;
    width: 100%;
    height: 64px;
    line-height: 64px;
    background-color: #0077ff;
  }
  .header-container{
    margin: 0 auto;
  }

  .sidebar-logo-container {
    height: 64px;
    display: inline-block;
    line-height: 64px;
    padding-left: 16px;
    overflow: hidden;

    & .sidebar-logo-link {
      height: 100%;
      width: 300px;
      float: left;
      & .sidebar-logo {
        width: 32px;
        height: 32px;
        vertical-align: middle;
        margin-right: 12px;
      }

      & .sidebar-title {
        display: inline-block;
        margin: 0;
        color: #fff;
        font-weight: 600;
        line-height: 50px;
        font-size: 18px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        vertical-align: middle;
      }
    }

    &.collapse {
      .sidebar-logo {
        margin-right: 0px;
      }
    }
  }

  .right-menu {
    float: right;
    height: 64px;
    line-height: 64px;

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 64px;
      line-height: 64px;
      font-size: 16px;
      color: #fff;
      vertical-align: text-bottom;

    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
</style>
