import React from 'react';

const EditCommentForm = ({editComment,setEditComment,onCancel, onSave}) => {
    return (
        <div>
            Edit Comment Form
            <div>
                <label htmlFor="">Update Comment</label>
                <textarea 
                    value={editComment.content}
                    onChange={e=> setEditComment({...editComment,content:e.target.value})}/>
            </div>
            <div>

                <button 
                    onClick={onSave}
                    className='btn btn-active px-4'>
                        Save Changes
                </button>
                <button
                    onClick={onCancel}
                    className='btn btn-warning px-4'>
                        Cancel
                </button>
            </div>
        </div>
    );
};

export default EditCommentForm;