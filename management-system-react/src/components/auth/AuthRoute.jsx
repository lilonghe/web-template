import { Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { checkPermission } from './auth';

export default function AuthRoute({ route }) {
    const { authority } = route;
    if (checkPermission(authority)) {
        return <Suspense fallback={<>...</>}><route.component /></Suspense>
    } else {
        return <Navigate replace to='/403' />
    }
}