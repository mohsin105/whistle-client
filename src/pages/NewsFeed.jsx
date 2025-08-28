// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import StoryCard from '../components/StoryCard';
import { Link, NavLink } from 'react-router';

const NewsFeed = () => {
    const [stories, setStories]=useState([]);
    useEffect(()=>{
        apiClient.get('/stories/')
        .then((data)=>setStories(data.data))
    },[]);
    return (
        <div className='w-1/2 mx-auto text-center'>
            This is NewsFeed
            <div className='flex justify-center'>
                <div className="card w-3/4 bg-base-100 card-sm shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Share Your Story</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="justify-end card-actions">
                        <NavLink to={'/stories/add'}>
                            <button className="btn btn-primary">Create Story</button>
                        </NavLink>

                        </div>
                    </div>
                </div>
            </div>
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