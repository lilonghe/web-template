import 'antd/dist/antd.css';
import './app.module.less';
import BasicLayout from './components/layout/basicLayout';
import { SessionContextProvider } from './contexts/session';
import routes from './routes';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense } from 'react';

export function App() {
    return (
        <SessionContextProvider>
            <Router >
                <BasicLayout>
                    <Routes>
                        {routes.map(route => <Route key={route.path} {...route} 
                            element={route.component ?
                                <Suspense fallback={<>...</>}><route.component /></Suspense> :
                                route.element
                            } />)}
                    </Routes>
                </BasicLayout>
            </Router>
            
        </SessionContextProvider>
        
    );
}