export default {
  path: 'dashboard',
  name: 'dashboard',
  redirect: { name: 'dashboardIndex' },
  component: () => import('@/views/SubLayout.vue'),
  props: {
    crumbsDisabled: false
  },
  meta: {
    permit: [],
    title: '数据标注平台',
    noSubMenus: true,
    menu: {
      name: 'Dashboard',
      routeName: 'dashboardIndex',
      icon: 'icon-dunpai'
    }
  },
  children: [
    {
      path: 'index',
      name: 'dashboardIndex',
      component: () => import('@/views/dashboard/Index.vue'),
      meta: {
        title: 'Dashboard-数据标注平台',
        permit: []
      }
    }
  ]
}
