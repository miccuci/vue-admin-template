<template>
  <div class="app-container">
    <div style="height:400px;">name: {{ name }}</div>
    <custom-select :options="options" :default-value="selectVal" @query="onQuery" @change="onSelect">
      <template v-slot="slotProps">
        <span>{{ slotProps.option.label }}</span>
        <span style="margin-left:8px;float:right;font-size:13px;">{{ slotProps.option.value }}</span>
      </template>
    </custom-select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CustomSelect from '@/components/CustomSelect'
export default {
  name: 'Dashboard',
  components: {
    CustomSelect
  },
  data() {
    return {
      selectVal: '选项1',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }, {
        value: '选项6',
        label: '蚵仔煎1'
      }, {
        value: '选项7',
        label: '龙须面1'
      }, {
        value: '选项8',
        label: '北京烤鸭1'
      }, {
        value: '选项9',
        label: '蚵仔煎2'
      }]
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
