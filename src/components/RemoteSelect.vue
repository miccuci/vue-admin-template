<template>
  <div>
    <el-select
      v-model="value"
      filterable
      popper-class="remote-select"
      :filter-method="remoteMethod"
      v-bind="$attrs"
      @change="onSelect"
      v-on="$listeners"
    >
      <el-option
        v-for="item in list"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
      <div class="pagination border-top">
        <el-pagination
          small
          :current-page="queryParams.pageNo"
          :page-size="queryParams.pageSize"
          :total="queryParams.total"
          :pager-count="5"
          layout="prev, pager, next"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-select>
  </div>
</template>

<script>
import { getSelectList } from '@/api/custom'
export default {
  props: {
    defaultValue: {
      type: String,
      default: ''
    },
    remoteUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      queryParams: { // 表格查询参数
        pageNo: 1,
        pageSize: 10,
        total: 0,
        keyword: ''
      },
      list: [],
      value: ''
    }
  },
  watch: {
    defaultValue: {
      handler(newValue) {
        this.value = newValue
      },
      immediate: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getSelectList(this.queryParams, this.remoteUrl).then(response => {
        this.list = response.data.items
        this.queryParams.total = response.data.total
      })
    },
    remoteMethod(query) {
      this.queryParams.keyword = query
      this.fetchData()
    },
    handleSizeChange(val) {
      this.queryParams.pageNo = 1
      this.queryParams.pageSize = val
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.queryParams.pageNo = val
      this.fetchData()
    },
    onSelect(val) {
      this.queryParams.keyword = ''
      this.queryParams.pageNo = 1
      this.fetchData()
      this.$emit('onSelect', val)
    }
  }
}
</script>

<style lang="scss">
.remote-select{
  min-width: 240px !important;
  .pagination{
    position: absolute;
    bottom: 0px;
    text-align: center;
    width: 100%;
    background-color: #fff;
  }
  .el-pagination{
    padding: 0px;
  }
  .el-select-dropdown__list{
    margin-bottom: 24px;
  }
}
</style>
