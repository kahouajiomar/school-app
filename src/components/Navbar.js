import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import logo from '../assets/logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';
const { Header: Navbar } = Layout;

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState([]);
    useEffect(() => {
        const { pathname } = location;
        if (pathname === '/') setSelectedKeys(['0']);
        if (pathname === '/work') setSelectedKeys(['1']);
    }, [location])

    return (
        <Navbar className="header">
            <div className="logo" >
                <img src={logo} alt="logo"/>
            </div>
            <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys}>
                <Menu.Item key="0" onClick={() => navigate('/')}>Home</Menu.Item>
                <Menu.Item key="1" onClick={() => navigate('/work')}>Work</Menu.Item>
            </Menu>
        </Navbar>
    )
}

export default NavBar;