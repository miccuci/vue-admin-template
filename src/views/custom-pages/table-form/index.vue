<template>
  <div>
    <div>
      <el-button type="primary" size="medium" @click="handleCreate">新增题库</el-button>
      <span style="float:right;">
        <el-input
          v-model.trim="listQuery.catgName"
          size="medium"
          style="width: 200px;"
          placeholder="题库名称"
          @keyup.enter.native="handleQuery"
        />
        <el-button type="primary" size="medium" @click="fetchData">查询</el-button>
      </span>
    </div>
    <el-table
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      style="margin-top: 16px;"
    >
      <el-table-column
        label="题库"
        prop="catgName"
        width="200"
      />
      <el-table-column
        label="题库分类"
        prop="catgClass"
        width="200"
      >
        <template slot-scope="scope">
          {{ scope.row.catgClass }}
        </template>
      </el-table-column>
      <el-table-column
        label="题库描述"
        prop="memo"
      />
      <el-table-column
        align="center"
        label="操作"
        width="200"
      >
        <template slot-scope="scope">
          <el-button type="default" size="mini" @click="handleUpdate(scope.row)">修改</el-button>
          <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <detail-dialog
      :dialog-data="currentData"
      :dialog-visible="dialogVisible"
    />
  </div>
</template>

<script>
import DetailDialog from './DetailDialog'
export default {
  components: { DetailDialog },
  data() {
    return {
      list: [{
        id: '111',
        date: '2016-05-02',
        catgName: '三基考试',
        catgClass: '单选题型',
        memo: 'testaaa'
      }, {
        id: '222',
        date: '2016-05-04',
        catgName: '王小虎',
        catgClass: '多选题型',
        memo: '测试说明'
      }, {
        id: '333',
        date: '2016-05-01',
        catgName: '王小虎',
        catgClass: '判断题型',
        memo: '补充说明'
      }, {
        id: '444',
        date: '2016-05-03',
        catgName: '王小虎',
        catgClass: '简答题型',
        memo: '说明备注'
      }],
      currentData: {},
      dialogVisible: false,
      wardCode: '',
      listQuery: {
        catgName: ''
      }
    }
  },
  methods: {
    fetchData() {

    },
    handleQuery(val) {
      this.listQuery.catgName = val
      this.fetchData()
    },
    handleDelete(row) {
      this.$confirm('您确定删除本条记录吗?', '提示', {
        cancelButtonText: '取消',
        confirmButtonText: '确定',
        type: 'warning'
      }).then(() => {

      })
    },
    // 初始化修改对话框
    handleUpdate(row) {
      this.currentData = row
      this.dialogVisible = true
    },
    handleCreate() {
      this.currentData = {}
      this.dialogVisible = true
    }
  }
}
</script>
