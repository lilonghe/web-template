import { lazy } from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineSecurityScan, AiOutlineProject } from 'react-icons/ai'

const routes = [
  {
    path: '/',
    component: lazy(() => import('./pages/home')),
    icon: <AiOutlineHome />,
    isNav: true,
    title: 'Home'
  },
  {
    path: '/project',
    component: lazy(() => import('./pages/project')),
    icon: <AiOutlineProject />,
    isNav: true,
    title: 'Project'
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
    path: '/private',
    component: lazy(() => import('./pages/private')),
    authority: 'private',
    icon: <AiOutlineSecurityScan />,
    isNav: true,
    title: 'Private'
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about')),
    icon: <AiOutlineUser />,
    isNav: true,
    title: 'About'
  },
  {
    path: '/403',
    component: lazy(() => import('./pages/exception/403'))
  }
]

export default routes
