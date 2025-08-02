import React from 'react';
import { NavLink } from 'react-router';

const StoryCard = ({story}) => {
    return (
        <NavLink to={`/${story.id}`}>

            <div className="card bg-base-100 w-96 shadow-xl text-center my-10 p-2">
                <div className="card-body">
                    <h2 className="card-title">{story.title}</h2>
                    <p>{story.content}</p>
                </div>
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
    );
};

export default StoryCard;