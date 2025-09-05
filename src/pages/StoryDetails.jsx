import React, { Suspense, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import apiClient from '../services/api-client';
import CommentSection from '../components/Comments/CommentSection';

import useAuthContext from '../hooks/useAuthContext';
import authApiClient from '../services/auth-api-client';
import StoryImageGallery from '../components/StoryDetails/StoryImageGallery';

const StoryDetails = () => {
    const {storyId}=useParams();
    const [story,setStory]=useState({});
    const {user} =useAuthContext();
    const navigate = useNavigate()
    
    //read
    useEffect(()=>{
        apiClient.get(`/stories/${storyId}`)
        .then((data)=>{
            setStory(data.data);
            console.log(data);
            // console.log(story.author.full_name);
            // console.log(story.author.id);
        });
        // fetchStory();
    },[storyId]);

    // const fetchStory = async(storyId) => {
    //     
    //     try {       
    //         const response = await apiClient.get(`/stories/${storyId}`);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    //delete
    const handleStoryDelete = async()=>{
        try {
            await authApiClient.delete(`/stories/${storyId}`);
            alert('Story Deleted!!!');
            navigate('/');
        } catch (error) {
            console.log("Error Deleting Story ", error);
        }
    };
    
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
                        <div>
                            <p>{story.author?.full_name}</p>
                            <h2 className="card-title">{story.title}</h2>
                        </div>
                        {/* <button className="btn btn-soft btn-warning">Update Story</button> */}
                        {/* Update Delete Toggle Button  */}
                        {/* {user?.is_authenticated && user?.id === story.author.id && (

                        )} */}
                        <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1">...</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><Link to={`/dashboard/stories/${storyId}/update`}>Edit</Link></li>
                                <li><a onClick={handleStoryDelete}>Delete</a></li>
                            </ul>
                        </div>
                    </div>
                    <p>{story.content}</p>
                </div>
                {story.images?.length>0 && (
                    <figure>
                        <Suspense fallback={<div className='aspect-square bg-base-300 animate-pulse rounded-lg'></div>}>
                            <StoryImageGallery images={story.images}/>
                        </Suspense>
                    </figure>
                )}
                <div>
                    <CommentSection storyId={storyId}></CommentSection>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default StoryDetails;