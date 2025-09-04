import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Sidebar from './Sidebar';
import useAuthContext from '../hooks/useAuthContext';
import Navbar from '../components/Dashboard/Navbar';

const MainLayout = () => {
    const {user} = useAuthContext();
    return (
        <div>
            MainLayOut
            {user? <Navbar/> : <NavBar/>}
            
            <Sidebar/>
            <Outlet/>
            <Footer/>

        </div>
    );
};

export default MainLayout;