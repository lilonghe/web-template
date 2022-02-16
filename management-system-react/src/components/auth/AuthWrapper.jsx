import { checkPermission } from './auth';

export default function AuthRoute({ children }) {
    const { authority } = route;
    if (checkPermission(authority)) {
        return children
    }
    return null;
}