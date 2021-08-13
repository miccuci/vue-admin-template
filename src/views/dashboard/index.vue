<template>
  <div class="app-container">
    <div style="height:800px;">name: {{ name }}</div>
    <remote-select
      remote-url="/select/list"
      size="small"
      @onSelect="onSelect"
    />
    <el-popover v-model="visible" placement="bottom" title="标题" width="200" trigger="manual">
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期" />
        <el-table-column width="100" property="name" label="姓名" />
        <el-table-column width="300" property="address" label="地址" />
      </el-table>
      <div slot="reference" style="width:200px" @click="visible = !visible">
        <el-input v-model="input" size="mini" />
      </div>
    </el-popover>
    <!-- <custom-select :options="options" :default-value="selectVal" @query="onQuery" @change="onSelect">
      <template v-slot="slotProps">
        <span>{{ slotProps.option.label }}</span>
        <span style="margin-left:8px;float:right;font-size:13px;">{{ slotProps.option.value }}</span>
      </template>
    </custom-select> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import CustomSelect from '@/components/CustomSelect'
import RemoteSelect from '@/components/RemoteSelect'
export default {
  name: 'Dashboard',
  components: {
    RemoteSelect
  },
  data() {
    return {
      selectVal: '选项1',
      visible: false,
      input: '',
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      options: []
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    onSelect(val) {
      console.log('object', val)
    },
    onQuery(params) {
      this.options = this.options.slice(0, 4)
    }
  }
}
</script>
