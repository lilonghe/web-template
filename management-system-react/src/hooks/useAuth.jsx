import { useContext } from "react";
import { sessionContext } from "@contexts/session";

export default function useAuth() {
    const {session} = useContext(sessionContext);

    const AuthWrapper = ({children, authority = '', mode='and'}) => {
        if (authority) {
            if (typeof authority === 'string') {
                if (session.permissions.includes(authority)) {
                    return children;
                }
            } else if (Array.isArray(authority)) {
                /**
                 * 并且和或者的关系，默认为并且
                 * 并且：permissionA && permissionB
                 * 或者：permissionA || permissionB
                 */
                if (mode === 'and') {
                    if (authority.every(item => session.permissions.includes(item))) {
                        return children;
                    }
                } else {
                    if (authority.find(item => session.permissions.includes(item))) {
                        return children;
                    }
                }
            }
        } else {
            return children;
        }
        return null;
    }

    return { AuthWrapper };
}