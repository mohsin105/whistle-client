import React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import { Outlet } from 'react-router';
import Sidebar from '../components/Dashboard/Sidebar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/> {/*Placeholder for components that are controlled from AppRoutes */}
            <Sidebar/>
        </div>
    );
};

export default DashboardLayout;