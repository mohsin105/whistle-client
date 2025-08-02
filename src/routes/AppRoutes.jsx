import React from 'react';
import { Route, Routes } from 'react-router';
import NewsFeed from '../pages/NewsFeed';
import StoryDetails from '../pages/StoryDetails';


const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<NewsFeed/>}></Route>
            <Route path='/:storyId' element={<StoryDetails/>}></Route>
        </Routes>
    );
};

export default AppRoutes;