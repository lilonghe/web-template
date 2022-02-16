import { Dropdown, Layout, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import styles from './basicLayout.module.less';
import { useState } from 'react';

import IconFold from '@assets/fold.svg';
import IconUnfold from '@assets/unfold.svg';
import { Link, useLocation } from "react-router-dom";

export default function BasicLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    return (
        <Layout>
            <Layout.Sider 
                trigger={null}
                collapsed={collapsed}
                theme="light" 
                className={styles.sider}>
                <div className={styles.logo}>
                    后台管理模板
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[location.pathname.split('/')[1] || 'home']}
                    className={styles.menu}
                >
                    <Menu.Item key="home" icon={<img src={IconFold} className="icon" />}>
                        <Link to='/'>Home</Link>  
                    </Menu.Item>
                    <Menu.Item key="about" icon={<img src={IconUnfold} className="icon" />}>
                        <Link to='/about'>About</Link>  
                    </Menu.Item>
                    <Menu.Item key="private" icon={<img src={IconUnfold} className="icon" />}>
                        <Link to='/private'>Private</Link>  
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout>
                <Layout.Header className={styles.header}>
                    <img 
                        onClick={toggleCollapsed}
                        src={collapsed ? IconUnfold : IconFold} 
                        className={styles.collapseIcon} />
                    <Dropdown overlay={<Menu>
                        <Menu.Item>Exit</Menu.Item>
                    </Menu>}>
                        <Avatar />
                    </Dropdown>
                </Layout.Header>
                <div className={styles.contentWrapper}>
                    <Layout.Content className={styles.mainContent}>
                        {children}
                    </Layout.Content>
                </div>
            </Layout>
            
        </Layout>
    )
}