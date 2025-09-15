import React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import { Link, Outlet } from 'react-router';
import Footer from './Footer';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  relative ">
                    {/* Page content here */}
                    <div className='flex  sticky items-center top-0 z-20'>

                        <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden bg-gray-100  w-fit ">
                            <div class="space-y-1">
                                <div class="w-6 h-1 bg-gray-600 rounded"></div>
                                <div class="w-6 h-1 bg-gray-600 rounded"></div>
                                <div class="w-6 h-1 bg-gray-600 rounded"></div>
                            </div>
                        </label>
                        <Navbar/>
                    </div>
                    <Outlet/>
                </div>
                <div className="drawer-side z-30">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4">
                        <div className="">
                            <Link to={'/'} className="btn btn-ghost text-xl">Whistle</Link>
                        </div>
                    {/* Sidebar content here */}
                        <Sidebar/>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default DashboardLayout;