<template>
  <div>
    <el-dialog :title="isAdd?'新增题库':'编辑题库'" :visible.sync="dialogVisible" :before-close="dialogClose">
      <el-form ref="questionForm" :model="form" :rules="rules">
        <el-form-item :label-width="formLabelWidth" label="题库名称：" prop="catgName">
          <el-input v-model="form.catgName"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="题库编码：" prop="typeCode">
          <el-input v-model="form.typeCode"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="题库分类：" prop="catgClass">
          <el-select v-model="form.catgClass" style="width:100%" placeholder="请选择题库分类">
            <el-option
              v-for="item in catgClassList"
              :key="item.dictCode"
              :label="item.dictName"
              :value="item.dictCode"/>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="说明：" prop="memo">
          <el-input v-model="form.memo" type="textarea"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogClose">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    // 题库编辑对象，新增时为空
    questionData: {
      type: Object,
      default: function() {
        return {}
      }
    },
    dialogVisible: {
      type: Boolean,
      default: false
    },
    dialogClose: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      form: {
        catgName: '',
        typeCode: '',
        catgClass: '',
        memo: ''
      },
      catgClassList: [],
      rules: {
        catgName: [
          { required: true, message: '请输入题库名称', trigger: 'blur' }
        ],
        typeCode: [
          { required: true, message: '请输入题库编码', trigger: 'blur' }
        ],
        catgClass: [
          { required: true, message: '请选择题库分类', trigger: 'blur' }
        ],
        memo: [
          { required: true, message: '请输入说明', trigger: 'blur' }
        ]
      },
      formLabelWidth: '120px'
    }
  },
  computed: {
    isAdd: function() {
      return !this.questionData.id
    }
  },
  watch: {
    dialogVisible: function(newValue, oldValue) {
      if (newValue === true) {
        console.log('this.questiondata', this.questionData)
        if (this.isAdd) {
          this.$refs['questionForm'].resetFields()
        } else {
          this.form = this.questionData
        }
      }
    }
  },
  created() {
  },
  methods: {
    getDict(typeCode, callback) {
    },
    handleSubmit() {
      this.dialogClose(this.form, this.isAdd ? 'add' : 'update')
    }
  }
}
</script>

<style scoped>
</style>
