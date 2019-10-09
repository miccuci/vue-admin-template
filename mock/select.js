/*
const data = Mock.mock({
  'items|31': [{
    id: '@id',
    value: '@id',
    label: '测试' + '@string(1, 3)'
  }]
}) */
const data = []
for (let i = 0; i < 81; i++) {
  data.push({
    id: 'id' + i,
    value: 'id' + i,
    label: '测试' + i
  })
}

export default [
  {
    url: '/select/list',
    type: 'post',
    response: config => {
      const list = data.filter(item => item.label.indexOf(config.body.keyword) > -1)
      const total = list.length
      const items = list.slice((config.body.pageNo - 1) * 10, (config.body.pageNo) * 10)
      return {
        code: 20000,
        data: {
          total, items
        }
      }
    }
  }
]
