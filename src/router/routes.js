import { flatten } from 'lodash'
const routes = require.context('../views', true, /routes\.js$/)

export default [
  {
    path: '/',
    name: 'root',
    redirect: { name: 'index' },
    component: () => import('@/views/Layout.vue'),
    children: flatten(routes.keys().map(key => routes(key).default)),
  },
  {
    path: '*',
    redirect: '/',
  },
]
