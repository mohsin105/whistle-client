import React, { useEffect, useState } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import apiClient from '../../services/api-client';
import StoryList from '../NewsFeed/StoryList';

const Dashboard = () => {
    const {user} = useAuthContext();
    const [myStories, setMyStories] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        fetchMyStories();
    },[user]);
    
    const fetchMyStories =async()=>{
        setLoading(true);
        try {
            const response = await apiClient.get(`/stories/?search=${user.first_name}`);
            setMyStories(response.data.results);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div>Cover Photo</div>
            <div>Profile Image</div>
            <h1>Your Stories</h1>
            <div>
                <StoryList stories={myStories} loading={loading}/>
            </div>
        </div>
    );
};

export default Dashboard;