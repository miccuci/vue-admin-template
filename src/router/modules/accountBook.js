/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const accountBook = {
  path: '/accountbook',
  component: Layout,
  name: 'accountbook',
  meta: {
    title: '记账本',
    icon: 'example'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/account-book/index'),
      name: 'index',
      meta: { title: '记账本', icon: 'form' }
    }
  ]
}

export default accountBook
