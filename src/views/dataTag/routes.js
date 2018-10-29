export default {
  path: 'dataTag',
  name: 'dataTag',
  redirect: { name: 'dataTagList' },
  component: () => import('@/views/SubLayout.vue'),
  props: {
    crumbsDisabled: false
  },
  meta: {
    permit: [],
    title: '数据标注',
    menu: {
      name: '数据标注',
      icon: 'icon-dunpai'
    }
  },
  children: [
    {
      path: 'list',
      name: 'dataTagList',
      component: () => import('@/views/dataTag/DataTagList.vue'),
      meta: {
        title: '标注列表-数据标注',
        permit: [],
        menu: {
          name: '标注列表',
          icon: 'icon-dunpai'
        }
      }
    }
  ]
}
