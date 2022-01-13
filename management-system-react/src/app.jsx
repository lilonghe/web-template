import 'antd/dist/antd.css';
import './app.module.less';
import BasicLayout from './components/layout/basicLayout';
import Home from './pages/home';

export function App() {
    return <BasicLayout>
        <Home />
    </BasicLayout>
}