// set function parseTime,formatTime to filter
import dayjs from 'dayjs'
import dictData from '../configs/dictData'

export function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/*
全局过滤器日期格式化
使用示例： date|dateFormat('YYYY-MM-DD HH:mm:ss')
*/
export function dateFormat(time, format) {
  if (time) {
    return dayjs(time).format(format)
  }
  return ''
}

export function getDictList(dictDataKey) {
  return dictData[dictDataKey].map(item => ({
    name: window.$vue.$t(`dict.${item.name}`),
    value: item.value
  }))
}

export function getDictData(key, dictDataKey) {
  return key ? window.$vue.$t(`dict.${dictData[dictDataKey][key]}`) : ''
}
