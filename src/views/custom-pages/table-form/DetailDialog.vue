<template>
  <el-dialog :title="isAdd?'新增题库':'编辑题库'" :visible.sync="dialogVisible" :before-close="onDialogClose" @opened="onDialogOpen">
    <el-form ref="dialogForm" :model="dialogForm" :rules="rules">
      <el-form-item label="题库名称：" prop="catgName">
        <el-input v-model="dialogForm.catgName" />
      </el-form-item>
      <el-form-item label="题库编码：" prop="typeCode">
        <el-input v-model="dialogForm.typeCode" />
      </el-form-item>
      <el-form-item label="题库分类：" prop="catgClass">
        <el-select v-model="dialogForm.catgClass" style="width:100%" placeholder="请选择题库分类">
          <el-option
            v-for="item in catgClassList"
            :key="item.dictCode"
            :label="item.dictName"
            :value="item.dictCode"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="说明：" prop="memo">
        <el-input v-model="dialogForm.memo" type="textarea" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="onDialogClose">取 消</el-button>
      <el-button type="primary" @click="onDialogClose('save')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogData: {
      type: Object,
      default: () => {}
    },
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogForm: {
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
      }
    }
  },
  computed: {
    isAdd: function() {
      return !this.dialogData.id
    }
  },
  methods: {
    onDialogOpen() {
      this.$refs['dialogForm'].clearValidate()
      if (!this.isAdd) {
        this.dialogForm = this.dialogData
      } else {
        this.dialogForm = this.$options.data().dialogForm
      }
    },
    onDialogClose(flag) {
      if (flag === 'save') {
        this.$refs['dialogForm'].validate((valid) => {
          if (valid) {
            this.$parent.dialogVisible = false
          }
        })
      } else {
        this.$parent.dialogVisible = false
      }
    }
  }
}
</script>

