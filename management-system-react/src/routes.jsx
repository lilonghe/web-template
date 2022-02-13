import { lazy } from 'react';

const routes = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('./pages/home')),
    },
    {
        path: '/about',
        exact: true,
        component: lazy(() => import('./pages/about')),
    }
];

export default routes;