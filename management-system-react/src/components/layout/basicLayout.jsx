import { Dropdown, Layout, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import styles from './basicLayout.module.less';
import { useState } from 'react';

import IconFold from '@assets/fold.svg';
import IconUnfold from '@assets/unfold.svg';
import IconMenuView from '@assets/menu-view.svg';
import IconMenuFile from '@assets/menu-file.svg';

export default function BasicLayout({ children }) {

    const [collapsed, setCollapsed] = useState(false);

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
                    <Avatar>Logo</Avatar>
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    className={styles.menu}
                >
                    <Menu.SubMenu key="sub1" title="subnav 1" icon={<img src={IconMenuView} className={"icon"} />}>
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="sub2" title="subnav 2" icon={<img src={IconMenuFile} className={"icon"} />}>
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </Menu.SubMenu>
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
                <Layout.Content className={styles.mainContent}>
                    {children}
                </Layout.Content>
            </Layout>
            
        </Layout>
    )
}