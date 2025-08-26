import React from 'react';
import { Route, Routes } from 'react-router';
import NewsFeed from '../pages/NewsFeed';
import StoryDetails from '../pages/StoryDetails';
import Registration from '../pages/Registration';
import Login from '../pages/Login';


const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<NewsFeed/>}></Route>
            <Route path='/:storyId' element={<StoryDetails/>}></Route>
            <Route path="register" element={<Registration/>}></Route>
            <Route path="login" element={<Login/>}></Route>
        </Routes>
    );
};

export default AppRoutes;