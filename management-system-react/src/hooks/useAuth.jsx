import { Suspense, useCallback } from "react";
import config from '../config';
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function checkPermission(authority, permissions, mode) {
    if (authority) {
        if (typeof authority === 'string') {
            if (permissions.includes(authority)) {
                return true;
            }
        } else if (Array.isArray(authority)) {
            /**
             * 并且和或者的关系，默认为并且
             * 并且：permissionA && permissionB
             * 或者：permissionA || permissionB
             */
            if (mode === config.PERMISSION_AUTH_MODE) {
                if (authority.every(item => permissions.includes(item))) {
                    return true;
                }
            } else {
                if (authority.find(item => permissions.includes(item))) {
                    return true;
                }
            }
        }
    } else {
        return true
    }
    return false;
}

export default function useAuth() {
    const session = useSelector(state=>state.session);

    const AuthWrapper = ({children, authority = '', mode = config.PERMISSION_AUTH_MODE}) => {
        if (checkPermission(authority, session.permissions, mode)) {
            return children;
        }
        
        return null;
    }

    const AuthRoute = useCallback(() => ({ route, mode = config.PERMISSION_AUTH_MODE}) => {
        const { authority } = route;
        if (checkPermission(authority, session.permissions, mode)) {
            return <Suspense fallback={<>...</>}><route.component /></Suspense>
        } else {
            return <Navigate replace to='/403' />
        }
            
    },[]);

    return { AuthWrapper, AuthRoute };
}