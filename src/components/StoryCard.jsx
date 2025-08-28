import React, { useEffect } from 'react';
import { NavLink } from 'react-router';
import defaultImage from '../assets/default_story.jpg'

const StoryCard = ({story}) => {
    useEffect(()=>{
        console.log(story);
    },[]);
    return (
        <div className='flex justify-center bg-amber-50'>
            <NavLink to={`/${story.id}`}>
                <div className="card bg-base-100 w-96 shadow-xl text-center my-10 p-2">
                    <div className="card-body">
                        <h2 className="card-title">{story.title}</h2>
                        <p>{story.content}</p>
                    </div>
                    <figure>
                            <img
                            src={story.images?.length>0 ? story.images[0].image : defaultImage }
                            alt="Shoes" />
                        
                    </figure>
                    <div className='flex justify-between mx-4 my-2'>
                        <div>
                            <p>{story.like_count}</p>
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