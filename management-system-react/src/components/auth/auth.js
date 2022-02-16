import { useSelector } from 'react-redux';

export function checkPermission(authority) {
    const { permissions } = useSelector(state=>state.session);

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