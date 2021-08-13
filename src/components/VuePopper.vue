<template>
  <div>
    <template slot="btn">
      <el-input id="reference" v-model="keyword" size="small" />
    </template>
    <template slot="body">
      <div id="popper">
        <slot />
      </div>
    </template>
  </div>
</template>

<script>
import Popper from 'popper.js'

export default {
  data() {
    return {
      keyword: 'value'
    }
  },
  mounted() {
    new Popper(document.getElementById('reference'), document.getElementById('popper'))
  }
}
</script>

<style lang="scss" scoped>

</style>
