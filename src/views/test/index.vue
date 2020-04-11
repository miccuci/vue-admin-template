<template>
  <div class="app-container">
    <el-input
      v-model="input"
      placeholder="请输入内容"
      clearable
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: 'value'
    }
  },
  methods: {
    onChange(val) {
      debugger
      console.log('change', val)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
