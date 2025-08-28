import React from 'react';
import { Link } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';

const NavBar = () => {
    const {user, logoutUser} = useAuthContext();
    return (
        <div>
            Navbar
            <a onClick={logoutUser}>Log Out</a>
            <div>
                {user && (<p>{user.first_name} {user.last_name} Logged In</p>)}
            </div>
        </div>
    );
};

export default NavBar;