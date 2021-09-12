<template>
  <el-menu
    :default-active="activeMenu"
    mode="horizontal"
    background-color="#0077ff"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <sidebar-item v-for="(route,index) in routes" :key="index" :item="route" :base-path="route.path" />
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  }
}
</script>
