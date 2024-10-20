import { LazyExoticComponent, ReactNode, lazy } from 'react'
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineSecurityScan,
  AiOutlineUser,
} from 'react-icons/ai'

export interface IMyRoute {
  path: string
  component?: LazyExoticComponent<any>
  children?: IMyRoute[]
  title?: string
  icon?: ReactNode
  isNav?: boolean
  isGroup?: boolean
  authority?: string | string[]
}

const routes: IMyRoute[] = [
  {
    path: '/',
    component: lazy(() => import('./pages/home')),
    icon: <AiOutlineHome />,
    isNav: true,
    title: '首页',
  },
  {
    path: '/project',
    component: lazy(() => import('./pages/project')),
    icon: <AiOutlineProject />,
    isNav: true,
    title: '项目',
  },
  {
    path: '/project/:id',
    component: lazy(() => import('./pages/project/detail')),
    children: [
      {
        path: 'info',
        title: 'info',
        component: lazy(() => import('./pages/project/detail/info')),
      },
      {
        path: 'setting',
        title: 'setting',
        component: lazy(() => import('./pages/project/detail/setting')),
      },
    ],
  },
  {
    isGroup: true,
    isNav: true,
    icon: <AiOutlineProject />,
    title: '父级导航',
    path: '/parent',
    children: [
      {
        path: '/parent/child',
        title: 'Child',
        isNav: true,
        component: lazy(() => import('./pages/child')),
      },
    ],
  },
  {
    path: '/private',
    component: lazy(() => import('./pages/private')),
    authority: 'private',
    icon: <AiOutlineSecurityScan />,
    isNav: true,
    title: '私有页面',
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about')),
    icon: <AiOutlineUser />,
    isNav: true,
    title: '关于',
  },
  {
    path: '/403',
    component: lazy(() => import('./pages/exception/403')),
  },
]

export default routes
