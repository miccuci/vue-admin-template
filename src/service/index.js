import apis from './apis'
import { get, post } from '@/service/request.js'

function getUrl(path, baseUrl = 'BASE_API') {
  const url = `${window.globalConfig[baseUrl]}/${apis[path]}`
  if (apis[path]) {
    return url
  } else {
    return `${window.globalConfig[baseUrl]}/${path}`
  }
}

export { get, post, getUrl }
