import React from 'react';
import EditCommentForm from './EditCommentForm';

const CommentCard = ({comment,user,isEditing,editingId, editComment,setEditComment,onEditClick,onCancelEditClick,onSaveEditClick,onDeleteClick}) => {
    // console.log("Main Comment: ",comment);
    // console.log("Editing id: ",editingId )
    // console.log("Is editing: ",isEditing);
    // console.log("Edit Comment: ",editComment);
    return (
        <div>
            {/* Comment Card */}
            {!isEditing? (
                <div className="card w-11/12 bg-base-100 card-sm shadow-sm border-gray-400 mx-auto">
                    <div className="card-body">
                        <h2 className="card-title">{comment.author.full_name}</h2>
                        <p className='text-md'>{comment.content}</p>
                        <div className="justify-end card-actions">
                            {user && user.id === comment.author.id &&(

                                <div className='flex gap-2'>
                                    <button
                                        onClick={onEditClick} 
                                        className="btn btn-primary px-4">
                                            Edit
                                    </button>
                                    <button 
                                        onClick={onDeleteClick}
                                        className='btn btn-warning px-2'>
                                            Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (

                <EditCommentForm
                    editComment={editComment}
                    setEditComment={setEditComment}
                    onCancel={onCancelEditClick}
                    onSave={()=>onSaveEditClick(comment.id)}/>
            )}
        </div>
    );
};

export default CommentCard;