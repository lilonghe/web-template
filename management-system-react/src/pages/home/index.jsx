import { Card } from "antd";
import { sessionContext } from "@contexts/session";
import { useContext, useEffect } from "react";

export default function Home() {
    const {session, dispatch} = useContext(sessionContext);

    useEffect(() => {
        dispatch({
            type: 'SAVE_USER',
            payload: {
                name: 'John Doe',
            }
        })
    }, []);

    return (
        <Card title="Home">
            <p>Welcome to the Home page, {session.user?.name}</p>
        </Card>
    )
}