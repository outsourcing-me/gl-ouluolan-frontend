export default [
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/Index.vue'),
    meta: {
      title: '首页-欧罗兰艺术漆',
      skipAuth: true,
      permit: [],
      menu: {
        name: '首 页',
      },
    },
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import('@/views/AboutUs.vue'),
    meta: {
      title: '关于我们-欧罗兰艺术漆',
      skipAuth: true,
      permit: [],
      menu: {
        name: '关于我们',
      },
    },
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/Product.vue'),
    meta: {
      title: '产品展示-欧罗兰艺术漆',
      skipAuth: true,
      permit: [],
      menu: {
        name: '产品展示',
      },
    },
  },
  {
    path: '/case',
    name: 'case',
    component: () => import('@/views/Case.vue'),
    meta: {
      title: '成功案例-欧罗兰艺术漆',
      skipAuth: true,
      permit: [],
      menu: {
        name: '成功案例',
      },
    },
  },
  {
    path: '/investment',
    name: 'investment',
    component: () => import('@/views/Investment.vue'),
    meta: {
      title: '招商加盟-欧罗兰艺术漆',
      skipAuth: true,
      permit: [],
      menu: {
        name: '招商加盟',
      },
    },
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/News.vue'),
    meta: {
      title: '新闻中心-欧罗兰艺术漆',
      skipAuth: true,
      permit: [],
      menu: {
        name: '新闻中心',
      },
    },
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import('@/views/ContactUs.vue'),
    meta: {
      title: '联系我们-欧罗兰艺术漆',
      skipAuth: true,
      permit: [],
      menu: {
        name: '联系我们',
      },
    },
  },
]
