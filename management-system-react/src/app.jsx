import 'antd/dist/antd.css';
import './app.module.less';
import BasicLayout from './components/layout/basicLayout';
import Home from './pages/home';
import { SessionContextProvider } from './contexts/session';

export function App() {
    return (
        <SessionContextProvider>
            <BasicLayout>
                <Home />
            </BasicLayout>
        </SessionContextProvider>
        
    );
}