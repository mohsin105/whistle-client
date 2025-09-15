import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { Link } from 'react-router';

const Sidebar = () => {
    const {user} = useAuthContext();
    return (

        <div>
            {user? (
                <div>
                    <li><Link to={'/dashboard/profile'}>Profile</Link></li>
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                    <li><Link to={'/dashboard/profile'}>Change Profile Picture</Link></li>
                    <li><Link to={'/dashboard/profile'}>Change Password</Link></li>
                    <li><Link to={'/dashboard/packages/'}>Premium MemberShip</Link></li>
                    <li><Link to={''}>Contact</Link></li>
                    <li><Link to={''}>Help</Link></li>

                </div>
            ):(

                <div>
                    <li><Link to={'/register'}>Sign Up</Link></li>
                    <li><Link to={'login'}>Sign In</Link></li>
                    <li><Link to={''}>Features</Link></li>
                    <li><Link to={''}>Contact</Link></li>
                    <li><Link to={''}>Help</Link></li>
                    <li><Link to={''}>About Whistle</Link></li>

                </div>
            )}
        </div>
    );
};

export default Sidebar;