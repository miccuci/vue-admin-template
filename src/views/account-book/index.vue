<template>
  <div class="account-book">
    <div class="title-wrap">
      <span class="title-wrap__prefix" />
      <span>记账本</span>
    </div>
    <div style="margin-bottom:16px">
      <span>
        医疗保险：
        <el-select v-model="queryParams.orgStatus" size="small" style="width:120px;margin-right:8px" clearable filterable @change="onSearch">
          <el-option label="全部" :value="null" />
          <el-option label="启用" value="98360" />
          <el-option label="停用" value="98361" />
        </el-select>
        <el-input v-model="queryParams.keyword" placeholder="请输入检索内容..." size="small" style="width:200px" @keyup.enter.native="onSearch" />
      </span>
    </div>

    <el-table :data="list" border style="width: 100%" class="account-book">
      <el-table-column
        prop="date"
        width="100"
        label="日期"
      />
      <el-table-column
        prop="account"
        width="60"
        label="记账凭证"
      />
      <el-table-column
        prop="name"
        min-width="160"
        label="药品名称"
      />
      <el-table-column
        prop="specification"
        width="120"
        label="规格"
      />
      <el-table-column
        prop="unit"
        width="60"
        label="计数单位"
      />
      <el-table-column
        prop="summary"
        min-width="160"
        label="摘要"
      />
      <el-table-column label="借方">
        <el-table-column align="right" prop="borrowAmount" width="80" label="数量" />
        <el-table-column align="right" prop="borrowPrice" width="80" label="单价" />
        <el-table-column align="right" prop="borrowSum" width="120" label="金额" />
      </el-table-column>
      <el-table-column label="贷方">
        <el-table-column align="right" prop="loanAmount" width="80" label="数量" />
        <el-table-column align="right" prop="loanPrice" width="80" label="单价" />
        <el-table-column align="right" prop="loanSum" width="120" label="金额" />
      </el-table-column>
      <el-table-column
        prop="overage"
        width="120"
        label="余额"
        align="right"
      />
    </el-table>
    <div class="clearfix">
      <el-pagination
        :page-sizes="[10,20,30, 50]"
        :current-page="queryParams.pageNo"
        :page-size="queryParams.pageSize"
        :total="queryParams.total"
        style="float:right;margin:8px 0px"
        size="small"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
/* import getUrl from '@/api'
import { post } from '@/service/request.js' */

export default {
  data() {
    return {
      loading: false, // 表格数据加载loading
      queryParams: { // 表格查询参数
        medInstiInsurId: '',
        keyword: '',
        pageNo: 1,
        pageSize: 10,
        total: 0
      },
      currentData: {},
      list: [] // 表格数据源
    }
  },
  created() {
    this.fetchData()
    for (let i = 0; i < 10; i++) {
      this.list.push({
        date: '2019-07-12',
        account: '2',
        name: '复方氨基酸',
        specification: '500ml:67g',
        unit: '瓶',
        summary: '上期结转',
        borrowAmount: '10,000',
        borrowPrice: '271.00',
        borrowSum: '27,130,000.00',
        loanAmount: '10,000',
        loanPrice: '271.00',
        loanSum: '27,130,000.00',
        overage: '20,000.00'
      })
    }
  },
  methods: {
    // 获取表格数据
    async fetchData() {
      /* this.loading = true
      const url = getUrl('selfPay', 'list')
      const res = await post(url, { ...this.queryParams, pageNo: this.queryParams.pageNo - 1 })
      this.loading = false
      this.list = res.data.map(item => {
        return { ...item, isEdit: false }
      })
      if (res.count && res.count !== '-1') {
        this.queryParams.total = Number(res.count)
      } */
    },
    onSearch() {
      this.queryParams.pageNo = 1
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
    hasEditItem() {
      if (this.list.every(item => !item.isEdit)) {
        return true
      } else {
        this.$message.error('当前表格中有待保存数据，请先保存后操作')
        return false
      }
    },
    onEdit(row) {
      if (this.hasEditItem()) {
        this.currentData = { ...row }
        row.isEdit = true
      }
    },
    onSave(row) {
      delete row.isAdd
      row.isEdit = false
    },
    onCancel(row) {
      Object.assign(row, this.currentData)
      row.isEdit = false
    }
  }
}
</script>

<style lang="scss">
.account-book{
  .el-table{
    border: 4px double red;
    .el-table__body td{
      border-left: 1px solid red;
      border-bottom: 1px solid #389e0d;
    }
    .el-table__header th{
      border-left: 1px solid red;
    }
    .el-table__header th{
      border-bottom: 1px solid red;
    }
  }
  .el-table__header {
    tr th{
      font-weight: 500;
      font-size: 18px;
      padding: 0;
      height: 36px;
      background: #fff;
      color: #389e0d;
    }
  }
  .el-table__body{
    .is-right>.cell{
      text-align: right !important;
    }
    .cell{
      padding: 2px;
    }
  }
  .el-table td, .el-table th {
    padding: 0 !important;
  }
}
</style>
