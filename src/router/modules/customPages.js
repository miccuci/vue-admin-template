/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const customPages = {
  path: '/custompages',
  component: Layout,
  redirect: '/custompages/tableform',
  name: 'custompages',
  meta: {
    title: '自定义页面',
    icon: 'example'
  },
  children: [
    {
      path: 'tableform',
      component: () => import('@/views/custom-pages/table-form/index'),
      name: 'tableform',
      meta: { title: '列表-表单', icon: 'form' }
    }, {
      path: 'table',
      name: 'Table',
      component: () => import('@/views/custom-pages/table/index'),
      meta: { title: 'Table', icon: 'table' }
    },
    {
      path: 'tree',
      name: 'Tree',
      component: () => import('@/views/custom-pages/tree/index'),
      meta: { title: 'Tree', icon: 'tree' }
    }, {
      path: 'test',
      name: 'Test',
      component: () => import('@/views/test/index'),
      meta: { title: 'test', icon: 'tree' }
    }, {
      path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
      meta: { title: 'External Link', icon: 'link' }
    }
  ]
}

export default customPages
