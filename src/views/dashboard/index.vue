<template>
  <div>
    <property ref="propertyList" :list="propertyList" :is-edit="true" />
  </div>
</template>

<script>
import Property from './property/index'
import { propertyList } from '@/configs'
export default {
  name: 'Dashboard',
  components: {
    Property
  },
  data() {
    return {
      propertyList
    }
  },
  methods: {
  }
}
</script>
