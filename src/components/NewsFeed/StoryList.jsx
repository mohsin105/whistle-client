import React from 'react';
import StoryCard from '../StoryCard';
import Loader from '../Loader';

const StoryList = ({stories, loading}) => {
    return (
        <div>
            {loading? (
                <Loader/>
            ):(
                <div>
                    {stories.map((story)=> (
                        <StoryCard 
                            key={story.id}
                            story={story}
                        /> 
                    ))}
                </div>
            )}
        </div>
    );
};

export default StoryList;