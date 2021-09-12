<template>
  <el-form ref="propertyForm" v-loading="loading" style="margin-top:16px" :model="propertyForm" label-width="140px" size="small">
    <div class="title-wrap">
      <span class="title-wrap-prefix" />
      <span>{{ $t('fields.property') }}</span>
      <span class="title-wrap__suffix">{{ $t('message.propertyMessage') }}</span>
    </div>
    <el-row :gutter="80">
      <el-col v-for="(item,index) in propertyList" :key="index" style="float:left" :span="12">
        <component
          :is="item.type"
          :is-edit="isEdit"
          :config="item"
          @on-change="(val)=>onChange(val,item)"
        />
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import Input from './Input'
import { propertyList } from '@/configs'
export default {
  components: {
    'self-input': Input/* ,
    'self-select': Select,
    'self-treeselect': Treeselect */
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }

  },
  data() {
    return {
      propertyList,
      loading: false,
      propertyForm: {}
    }
  },
  /* computed: {
    propertyList() {
      if (this.isEdit) {
        return this.list
      } else {
        return this.list.filter(item => {
          if (item.value) {
            return item
          }
        })
      }
    }
  }, */
  watch: {
    propertyList: {
      deep: true,
      immediate: true,
      handler(val) {
        val.forEach(item => {
          this.$set(this.propertyForm, item.propertyId, item.value)
        })
      }
    }
  },
  /* created() {
    this.$bus.on('onDocTypeChange', (typeId, docId) => {
      this.loading = true
      this.propertyForm = {}
      get('docTypePropertyList', { typeId, docId }).then(res => {
        this.loading = false
        this.list = res
      })
    })
  }, */
  methods: {
    onChange(val, item) {
      item.value = val
      this.propertyForm[item.propertyId] = val
    }
  },
  getPropertyData() {
    const tempForm = this.propertyForm
    const propertyFormList = []
    for (const key in tempForm) {
      if (tempForm[key] instanceof Array) {
        tempForm[key].forEach(item => {
          propertyFormList.push({
            propertyId: key,
            propertyValue: item.label,
            propertyValueId: item.id
          })
        })
      } else if (tempForm[key] instanceof Object) {
        propertyFormList.push({
          propertyId: key,
          propertyValue: tempForm[key].label,
          propertyValueId: tempForm[key].id
        })
      } else {
        propertyFormList.push({
          propertyId: key,
          propertyValue: tempForm[key]
        })
      }
    }
    return propertyFormList
  }
}
</script>

<style lang="scss" scoped>

</style>
