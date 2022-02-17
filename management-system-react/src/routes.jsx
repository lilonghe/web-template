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
    path: '/list',
    component: lazy(() => import('./pages/list')),
    children: [
      {
        path: ':id',
        component: lazy(() => import('./pages/list/detail'))
      }
    ]
  },
  {
    path: '/403',
    component: lazy(() => import('./pages/exception/403'))
  }
]

export default routes
