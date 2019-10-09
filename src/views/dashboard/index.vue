<template>
  <div class="app-container">
    <div style="height:400px;">name: {{ name }}</div>
    <remote-select
      remote-url="/select/list"
      size="small"
      @onSelect="onSelect"
    />
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
