<template>
  <div class="app-container">
    <div>
      <el-button type="default" size="medium" @click="handleCreate">新增题库</el-button>
      <span style="float:right;">
        <el-input
          v-model.trim="listQuery.catgName"
          size="medium"
          class="width"
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
          {{ scope.row.catgClass+'111' }}
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
    <question-dialog
      :question-data="questionData"
      :dialog-visible="dialogVisible"
      :dialog-close="dialogClose"
    />
  </div>
</template>

<script>
import QuestionDialog from './QuestionDialog'
export default {
  components: { QuestionDialog },
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
      questionData: {},
      dialogVisible: false,
      wardCode: '',
      listQuery: {
        catgName: ''
      }
    }
  },
  computed: {
  },

  created() {
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
      this.questionData = row
      this.dialogVisible = true
    },
    handleCreate() {
      this.questionData = {}
      this.dialogVisible = true
    },
    dialogClose(questionData, flag) { // flag = 'add'表示新增,'update'表示修改,null表示取消
      if (flag === 'add') {
        console.log('add')
      } else if (flag === 'update') {
        console.log('update')
      }
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss">
 .width{
   width: 200px;
   border: 1px solid red;
 }
</style>
<style lang="scss" scoped>

</style>
