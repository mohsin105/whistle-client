import React, { Suspense, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { AiFillLike, AiTwotoneLike } from "react-icons/ai";
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
    const [isLiked, setIsLiked]= useState(null);
    // console.log(user.id);
    //read
    useEffect(()=>{
        authApiClient.get(`/stories/${storyId}`)
        .then((data)=>{
            setStory(data.data);
            console.log(data.data);
            if(data.data.is_liked==true)
            {
                setIsLiked(true);
            }
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

    const handleLike= async()=>{
        try {
            const response = await authApiClient.post(`/stories/${storyId}/like/`,{});
            console.log(response.data.status);
            if(response.data.status==='Like Succesfull')
            {
                setIsLiked(true);
            }
            else if(response.data.status==='Unlike Successfull') setIsLiked(false);

        } catch (error) {
            console.log("Error while liking ", error);
        }
    };
    
    return (
       
        <div className='w-full md:w-3/4 mx-auto my-4 flex justify-center'>

            <div className="card bg-base-100 w-3/4 shadow-sm">
                <div>
                    <div className="card-body bg-[#C1E8FF] rounded-t-md">
                        <div className='flex justify-between'>
                            <div>
                                <p className='font-bold'>{story.author?.full_name}</p>
                                <h2 className="card-title drop-shadow-2xl">{story.title}</h2>
                            </div>
                            
                            {/* Update Delete Toggle Button  */}
                            <Suspense fallback={<div className='aspect-square bg-base-300 animate-pulse rounded-lg'></div>}>

                                {user?.id === story.author?.id && (

                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn m-1">...</div>
                                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                            <li><Link to={`/dashboard/stories/${storyId}/update`}>Edit</Link></li>
                                            <li><a onClick={handleStoryDelete}>Delete</a></li>
                                        </ul>
                                    </div>
                                )}
                            </Suspense>
                        </div>
                        <p className=' text-md drop-shadow-2xl'>{story.content}</p>
                        <div>
                            {story.images?.length>0 && (
                                <figure>
                                    <Suspense fallback={<div className='aspect-square bg-base-300 animate-pulse rounded-lg'></div>}>
                                        <StoryImageGallery images={story.images}/>
                                    </Suspense>
                                </figure>
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center bg-[#B3CFE5] p-4'>
                    <div className='flex items-center gap-2'>
                        <a onClick={handleLike}>
                            {isLiked? <AiFillLike className='text-4xl'/>:<AiTwotoneLike className='text-4xl'/>}
                            
                                
                        </a>
                        <span>{story.like_count}</span>
                    </div>
                    <div>
                        <span className='mr-2'>{story.comment_count || 0}</span>
                        <span>comments</span>
                    </div>
                </div>
                <div className='bg-[#B3CFE5] p-2'>
                    <CommentSection storyId={storyId}></CommentSection>
                </div>
            </div>
        </div>
    );
};

export default StoryDetails;