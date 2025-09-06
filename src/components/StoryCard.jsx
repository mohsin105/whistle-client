// import React, { useEffect } from 'react';
import { NavLink } from 'react-router';
import defaultImage from '../assets/default_story.jpg'
import { AiTwotoneLike } from "react-icons/ai";

const StoryCard = ({story}) => {
    // useEffect(()=>{
    //     console.log(story);
    // },[]);
    return (
        <div className='flex justify-center bg-amber-50'>
            <NavLink to={`/${story.id}`}>
                <div className="card bg-base-100 w-96 shadow-xl text-left my-10 p-2">
                    <div className="card-body">
                        <p>{story.author.full_name}</p>
                        <h2 className="card-title">{story.title}</h2>
                        <p>{story.content}</p>
                    </div>
                    <figure>
                            <img
                            src={story.images?.length>0 ? story.images[0].image : defaultImage }
                            alt="Shoes" />
                        
                    </figure>
                    <div className='flex justify-between mx-4 my-2'>
                        <div className='flex gap-2'>
                            <AiTwotoneLike />
                            <span>{story.like_count}</span>
                        </div>
                        <div>
                            <span className='mr-2'>{story.comment_count}</span>
                            <span>comments</span>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default StoryCard;