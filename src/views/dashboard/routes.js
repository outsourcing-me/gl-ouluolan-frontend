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
    title: 'Dashboard',
    hasSubMenus: false,
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
        title: 'Dashboard',
        permit: []
      }
    }
  ]
}
