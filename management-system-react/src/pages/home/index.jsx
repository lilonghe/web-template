import { Button, Card } from "antd";
import { sessionContext } from "@contexts/session";
import { useContext, useEffect } from "react";
import useAuth from "@hooks/useAuth";

export default function Home() {
    const {session, dispatch} = useContext(sessionContext);
    const {AuthWrapper} = useAuth();

    useEffect(() => {
        dispatch({
            type: 'SAVE_USER',
            payload: {
                name: 'John Doe',
            }
        });
        dispatch({
            type: 'SAVE_PERMISSIONS',
            payload: ['user-confirm'],
        });
    }, []);

    return (
        <Card title="Home">
            <p>Welcome to the Home page, {session.user?.name}</p>
            <AuthWrapper authority="user-confirm">
                <Button>Confirm</Button>
            </AuthWrapper>
        </Card>
    )
}