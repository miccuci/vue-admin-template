<template>
  <section class="app-container">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
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
.app-container{
  background-color: #fff;
  padding: 16px;
  overflow-x: hidden;
  height: calc(100vh - 112px);
}
</style>
