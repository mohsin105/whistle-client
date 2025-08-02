import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Sidebar from './Sidebar';

const MainLayout = () => {
    return (
        <div>
            MainLayOut
            <NavBar/>
            <Sidebar/>
            <Outlet/>
            <Footer/>

        </div>
    );
};

export default MainLayout;