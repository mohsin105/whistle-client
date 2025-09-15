// import React, { useEffect } from 'react';
import { NavLink } from 'react-router';
// import defaultImage from '../assets/default_story.jpg'
import { AiTwotoneLike } from "react-icons/ai";

const StoryCard = ({story}) => {
    // useEffect(()=>{
    //     console.log(story);
    // },[]);
    return (
        <div className=' bg-amber-50 w-5/6 mx-auto'>
            <NavLink 
                to={`/${story.id}`}
                className=''>
                <div className="card bg-[#C1E8FF] w-full  shadow-xl text-left mt-10 p-2">
                    <div className="card-body">
                        <p className='font-bold'>{story.author.full_name}</p>
                        <h2 className="card-title text-lg">{story.title}</h2>
                        <p>{story.content}</p>
                    </div>
                    <figure className='rounded-md p-2'>
                        {story.images?.length>0 && (
                            <img
                            src={story.images[0].image }
                            alt="Shoes"
                            className='rounded-md' />
                        )}
                        
                    </figure>
                </div>
                <div className='flex justify-between bg-[#B3CFE5] rounded-b-md p-4'>
                    <div className='flex gap-2 items-center'>
                        <AiTwotoneLike className='text-2xl' />
                        <span>{story.like_count}</span>
                    </div>
                    <div>
                        <span className='mr-2'>{story.comment_count}</span>
                        <span>comments</span>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default StoryCard;