import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import apiClient from '../services/api-client';
import CommentSection from '../components/Comments/CommentSection';
import CommentForm from '../components/Comments/CommentForm';

const StoryDetails = () => {
    const {storyId}=useParams();
    const [story,setStory]=useState([]);
    
    useEffect(()=>{
        apiClient.get(`/stories/${storyId}`)
        .then((data)=>{
            setStory(data.data);
            console.log(data.data);
        })
    },[storyId]);
    
    return (
        <div>
            Story Details:
            {/* <h3>{story.author.first_name}</h3>
            <h2></h2> 
            <p></p> */}
            <div className='w-1/2 mx-auto flex justify-center'>

                <div className="card bg-base-100 w-3/4 shadow-sm">
                    <div className="card-body">
                        <div className='flex justify-between'>
                            <h2 className="card-title">{story.title}</h2>
                            <button className="btn btn-soft btn-warning">Update Story</button>
                        </div>
                        <p>{story.content}</p>
                    </div>
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    </figure>
                    <div>
                        <CommentSection storyId={storyId}></CommentSection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryDetails;