div<template>
  <div class="user-select-input">
    <el-select
      v-model="selectList"
      value-key="id"
      filterable
      remote
      multiple
      :loading="loading"
      popper-class="user-bridge-input"
      style="width:100%"
      :remote-method="remoteMethod"
      v-bind="$attrs"
      v-on="$listeners"
      @visible-change="remoteMethod"
      @change="onSelect"
    >
      <div>
        <div v-if="options.type !== config.userBridgeTypeList[2]">
          <div v-if="options.type === config.userBridgeTypeList[0]" class="mini-title" style="cursor:pointer" @click="userVisible=!userVisible">
            <span>{{ $('fields.users') }}</span>
            <i :class="!userVidible?'el-icon-arrow-right':'el-icon-arrow-down'" />
          </div>
          <el-option
            v-for="(item,index) in list.filter(ele=>ele.type===config.userTypeList[0]&&!ele.isHidden)"
            v-show="userVisible"
            :key="index"
            :disabled="options.disabledList.indexOf(item.id)>-1"
            :label="item.name||item.id"
            :value="item"
          >
            <div style="float:left">
              <img :src="item.headIcon||defaultIcon" class="user-input-img" alt="">
              <div>
                <div>{{ item.name+item.id }}</div>
                <div class="tip-info">{{ item.orgName }}</div>
              </div>
            </div>
          </el-option>
        </div>

        <div v-if="options.type !== config.userBridgeTypeList[2]">
          <div v-if="options.type === config.userBridgeTypeList[0]" class="mini-title" style="cursor:pointer" @click="groupVisible=!groupVisible">
            <span>{{ $('fields.users') }}</span>
            <i :class="!userVidible?'el-icon-arrow-right':'el-icon-arrow-down'" />
          </div>
          <el-option
            v-for="(item,index) in list.filter(ele=>ele.type===config.userTypeList[0]&&!ele.isHidden)"
            v-show="groupVisible"
            :key="index"
            :disabled="options.disabledList.indexOf(item.id)>-1"
            :label="item.name||item.id"
            :value="item"
          >
            <div style="float:left">
              <img :src="item.headIcon||defaultIcon" class="user-input-img" alt="">
              <div>
                <div>{{ item.name+item.id }}</div>
                <div class="tip-info">{{ item.orgName }}</div>
              </div>
            </div>
          </el-option>
        </div>

        <div>
          <el-option
            v-for="(item,index) in list.filter(ele=>ele.isHidden)"
            :key="index"
            style="visibility:hidden;height:0px !important"
            :label="item.name"
            :value="item"
          />
        </div>
      </div>
    </el-select>
  </div>
</template>

<script>
import { get } from '@/service'
import config from '@/configs'
import defaultIcon from '@/assets/imgs/avator_default.png'
import publicGroup from '@/assets/imgs/public-group.svg'

export default {
  props: {
    options: {
      type: Object,
      default: () => ({
        type: 0, // 0 全部，1 用户 2 群组
        disabledList: [], // 禁选idlist
        selectValue: [] // 默认选中
      })
    }
  },
  data() {
    return {
      defaultIcon,
      publicGroup,
      config,
      loading: false,
      userVisible: false,
      groupVisible: false,
      list: [],
      selectList: []
    }
  },
  watch: {
    'options.selectValue': {
      handler(val) {
        const tempList = val && val.length ? val.map(item => ({ ...item, isHidden: true })) : []
        this.list = this.list.concat(tempList)
        this.selectList = val
      },
      immediate: true
    }
  },
  methods: {
    remoteMethod(query) {
      if (query === true) {
        query = ''
      } else if (query === false) {
        return
      }
      this.list = []
      if (this.options.type !== config.userBridgeTypeList[2]) {
        this.loading = true
        get('userBridgeList', { keyword: query }).then(res => {
          this.loading = false
          const tempList = res.map(item => ({
            id: item.userId,
            name: item.userName,
            headIcon: item.headIcon,
            type: 0
          }))
          this.list = this.list.concat(tempList)
        })
      }
      if (this.options.type !== config.userBridgeTypeList[1]) {
        this.loading = true
        get('groupBridgeList', { keyword: query }).then(res => {
          this.loading = false
          const tempList = res.map(item => ({
            id: item.id,
            name: item.groupName,
            headIcon: item.headIcon,
            type: 1
          }))
          this.list = this.list.concat(tempList)
        })
      }
    },
    onSelect(val) {
      if (!this.options.multiple) {
        this.selectList = val.slice(val.length - 1)
      }
      this.$emit('change', this.selectList)
    }
  }
}
</script>

<style lang="scss">
.user-bridge-input{
  width: 600px !important;
  padding: 0px 8px;
  .el-select-dropdown__item{
    padding: 0 8px;
    height: 40px !important;
    line-height: 20px !important;
  }
  .el-select-dropdown__item.selected::after{
    top: 10px;
  }
}
.user-select-input{
  .el-tag{
    max-height: 100%;
  }
  .el-select__tags-text{
    overflow: hidden;
    display: inline-block;
    width: calc(100% - 14px);
  }
  .el-tag__close{
    right: -4px !important;
    top: -6px !important;
  }
}
.user-input-img{
  float: left;
  margin-top: 4px;
  margin-right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 28px;
}
</style>
