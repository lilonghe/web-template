import { lazy } from 'react'

const routes = [
  {
    path: '/',
    component: lazy(() => import('./pages/home'))
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about'))
  },
  {
    path: '/private',
    component: lazy(() => import('./pages/private')),
    authority: 'private'
  },
  {
    path: '/project/:id',
    component: lazy(() => import('./pages/project/detail')),
    children: [
      {
        path: 'info',
        title: 'info',
        component: lazy(() => import('./pages/project/detail/info'))
      },
      {
        path: 'setting',
        title: 'setting',
        component: lazy(() => import('./pages/project/detail/setting'))
      }
    ]
  },
  {
    path: '/403',
    component: lazy(() => import('./pages/exception/403'))
  }
]

export default routes
