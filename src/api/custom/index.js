import request from '@/utils/request'

export function getSelectList(params, url) {
  return request({
    url: url,
    method: 'post',
    data: params
  })
}
