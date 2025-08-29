import React from 'react';
import CommentCard from './CommentCard';

const CommentList = ({comments}) => {
    return (
        <div>
            Comment List
            {comments.map(comment=>(
                <CommentCard key={comment.id} comment={comment}/>
            ))}
        </div>
    );
};

export default CommentList;