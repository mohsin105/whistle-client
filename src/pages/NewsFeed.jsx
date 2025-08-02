// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import StoryCard from '../components/StoryCard';

const NewsFeed = () => {
    const [stories, setStories]=useState([]);
    useEffect(()=>{
        apiClient.get('/stories/')
        .then((data)=>setStories(data.data))
    },[]);
    return (
        <div className='w-1/2 mx-auto text-center'>
            This is NewsFeed
            {stories.map((story)=> (
                <StoryCard 
                    key={story.id}
                    story={story}
                    /> 
            ))}
        </div>
    );
};

export default NewsFeed;