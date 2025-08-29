import React from 'react';
import EditCommentForm from './EditCommentForm';

const CommentCard = ({comment}) => {
    return (
        <div>
            Comment Card
            <div className="card w-11/12 bg-base-100 card-sm shadow-sm border-gray-400 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">{comment.author}</h2>
                    <p className='text-md'>{comment.content}</p>
                    <div className="justify-end card-actions">
                        <div className='flex gap-2'>
                            <button className="btn btn-primary px-4">Edit</button>
                            <button className='btn btn-warning px-2'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <EditCommentForm/> */}
        </div>
    );
};

export default CommentCard;