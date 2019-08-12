<template>
  <dropdown ref="custom-select" :unscroll="'.app-container'" :align="align" :y="y">
    <template slot="btn">
      <el-input v-model="queryParams.keyword" size="small" @keyup.enter.native="handleQuery" />
    </template>
    <template slot="body">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <div class="body-container">
          <div
            v-for="item in options"
            :key="item.value"
            :class="{selected:item.selected}"
            class="option"
            @click="()=>onSelect(item)"
          >
            <slot :option="item">
              <span>{{ item.label }}</span>
            </slot>
          </div>
        </div>
      </el-scrollbar>
      <div class="footer-container border-top">
        <div class="page-text">第 {{ `${queryParams.pageNo} / ${Math.ceil(queryParams.total/queryParams.pageSize)}` }} 页</div>
        <el-pagination
          style="display:inline-block"
          background
          prev-text="上一页"
          next-text="下一页"
          :current-page.sync="queryParams.pageNo"
          :page-size="queryParams.pageSize"
          layout="prev, next"
          :total="queryParams.total"
          @current-change="handleCurrentChange"
        />
      </div>
    </template>
  </dropdown>
</template>

<script>
import Dropdown from 'bp-vuejs-dropdown'
export default {
  components: {
    Dropdown
  },
  props: {
    defaultValue: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      queryParams: {
        keyword: '',
        pageNo: 1,
        pageSize: 10,
        total: 20
      },
      value: '',
      align: 'bottom',
      y: 8 // bottom: 8; top: -8
    }
  },
  watch: {
    defaultValue: {
      immediate: true,
      handler(val) {
        this.value = val
        this.onSelect({ value: val })
      }
    }
  },
  methods: {
    onSelect(data) {
      this.options.forEach(item => {
        if (item.value === data.value) {
          this.queryParams.keyword = item.label
          this.$emit('change', item.value)
          item.selected = true
        } else {
          item.selected = false
        }
      })
      if (this.$refs['custom-select']) {
        this.$refs['custom-select'].isHidden = true
      }
    },
    handleQuery() {
      this.queryParams.pageNo = 1
      this.$emit('query', this.queryParams)
    },
    handleCurrentChange() {
      this.$emit('query', this.queryParams)
    }
  }
}
</script>

<style lang="scss">
.page-text{
  display: inline-block;
  font-size: 12px;
  position: relative;
  font-weight: 400;
  color: #606266;
}
.bp-dropdown__icon{
  position: relative;
  left: -18px;
}
.bp-dropdown__btn{
  padding: 0px;
  border: 0px;
  background: none;
}
.bp-dropdown__body{
  border: 1px solid #DCDFE6;
  padding: 6px 0;
  max-height: 300px;
  .body-container{
    max-height: 240px;
    overflow-y: auto;
  }
  .footer-container{
    text-align: center;
    margin-top: 4px;
    padding: 4px;
    line-height: 28px;
  }
}
</style>
<style lang="scss" scoped>
.option{
  line-height: 32px;
  padding:0 8px;
}
.option:hover{
  background-color: #f5f7fa;
}
.selected{
  color: #409eff;
}
</style>

