import React from 'react';
import { Route, Routes } from 'react-router';
import NewsFeed from '../pages/NewsFeed';
import StoryDetails from '../pages/StoryDetails';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import ActivateAccount from '../components/Registration/ActivateAccount';
import MainLayout from '../layouts/MainLayout';
import AddStory from '../pages/AddStory';
import Profile from '../pages/Profile';
import PrivateRoute from '../components/PrivateRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import UpdateStory from '../pages/UpdateStory';


const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route index element={<NewsFeed/>}></Route>
                <Route path='/:storyId' element={<StoryDetails/>}></Route>
                <Route path="register" element={<Registration/>}></Route>
                <Route path="login" element={<Login/>}></Route>
                <Route path='activate/:uid/:token' element={<ActivateAccount/>}></Route>
                
            </Route>
            {/* Private Route  */}
            <Route path='dashboard' element={
                <PrivateRoute>
                    <DashboardLayout/>
                </PrivateRoute>
            }>
                <Route path='profile' element={<Profile/>}/>
                <Route path='stories/add' element={<AddStory/>}/>
                <Route path='stories/:storyId/update' element={<UpdateStory/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;