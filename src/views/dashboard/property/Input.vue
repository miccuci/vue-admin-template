<template>
  <el-form-item
    :prop="config.propertyId"
    :label="config.propertyName"
    :rules="config.required&&isEdit?[{ required: true,trigger: 'blur',message: $t('message.input')}]:[]"
  >
    <el-input v-if="isEdit" :value="config.value" @input="onInput" />
    <span v-else>{{ config.value }}</span>
  </el-form-item>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onInput(val) {
      this.$emit('on-change', val)
    }
  }
}
</script>
