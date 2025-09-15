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
                <div className="card w-11/12 bg-[#d9e5ec] card-sm my-2 shadow-sm border-gray-400 mx-auto">
                    <div className="card-body">
                        <h2 className="card-title">{comment.author.full_name}</h2>
                        <p className='text-md'>{comment.content}</p>
                        <div className="justify-end card-actions">
                            {user && user.id === comment.author.id &&(
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn m-1">...</div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><a
                                            onClick={onEditClick} 
                                            >Edit</a></li>
                                        <li><a
                                            onClick={onDeleteClick}
                                            >Delete</a></li>
                                    </ul>
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