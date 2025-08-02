import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import apiClient from '../services/api-client';

const StoryDetails = () => {
    const {storyId}=useParams();
    const [story,setStory]=useState(null);
    
    useEffect(()=>{
        apiClient.get(`/stories/${storyId}`)
        .then((data)=>setStory(data.data))
    },[storyId]);
    
    return (
        <div>
            Story Details:
            <h2>{story.title}</h2> 
        </div>
    );
};

export default StoryDetails;