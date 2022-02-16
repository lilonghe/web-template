import { Button, Card } from "antd";
import { useEffect } from "react";
import useAuth from "@hooks/useAuth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AuthWrapper from '@components/auth/AuthWrapper';

export default function Home() {
    const dispatch = useDispatch();
    const { user } = useSelector(state=>state.session)
    const {AuthWrapper} = useAuth();

    useEffect(() => {
        dispatch.session.fetchUserInfo();
    }, []);

    console.log('home');

    return (
        <Card title="Home">
            <p>Welcome to the Home page, {user?.name}</p>
            <AuthWrapper authority="user-confirm">
                <Button>Confirm</Button>
            </AuthWrapper>
        </Card>
    )
}