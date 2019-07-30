// set function parseTime,formatTime to filter
import dayjs from 'dayjs'

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
