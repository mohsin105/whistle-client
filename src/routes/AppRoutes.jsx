import React from 'react';
import { Route, Routes } from 'react-router';
import NewsFeed from '../pages/NewsFeed';
import StoryDetails from '../pages/StoryDetails';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import ActivateAccount from '../components/Registration/ActivateAccount';
import MainLayout from '../layouts/MainLayout';
import AddStory from '../pages/AddStory';


const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route index element={<NewsFeed/>}></Route>
                <Route path='/:storyId' element={<StoryDetails/>}></Route>
                <Route path="register" element={<Registration/>}></Route>
                <Route path="login" element={<Login/>}></Route>
                <Route path='activate/:uid/:token' element={<ActivateAccount/>}></Route>
                <Route path='stories/add' element={<AddStory/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;