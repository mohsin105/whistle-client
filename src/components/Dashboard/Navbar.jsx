import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { Link } from 'react-router';

const Navbar = () => {
    const {user, logoutUser} = useAuthContext();
    return (
        <div className="navbar bg-base-100 shadow-2xl">
            <div className="flex-1">
                <Link to={'/newsfeed'} className="btn btn-ghost text-xl">Whistle</Link>
            </div>
            <div className="flex gap-2">
                {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            src={user?.profile_image} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to={'/dashboard'}>Dashboard</Link></li>
                        <li>
                        <Link 
                            to={'/dashboard/profile'} className="justify-between">
                            Profile
                            <span className="badge">{user.first_name}</span>
                        </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a onClick={logoutUser}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;