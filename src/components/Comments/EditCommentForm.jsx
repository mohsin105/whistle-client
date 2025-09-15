import React from 'react';

const EditCommentForm = ({editComment,setEditComment,onCancel, onSave}) => {
    return (
        <div>
            
            <div className='bg-gray-200 rounded-md p-2 my-2'>
                <label htmlFor="">Update Comment</label>
                <textarea 
                    value={editComment.content}
                    onChange={e=> setEditComment({...editComment,content:e.target.value})}
                    className='w-full border rounded-md p-2 my-2'/>
            </div>
            <div className='flex justify-end space-x-2'>

                <button 
                    onClick={onSave}
                    className='btn btn-active px-4'>
                        Save Changes
                </button>
                <button
                    onClick={onCancel}
                    className='btn btn-error px-4'>
                        Cancel
                </button>
            </div>
        </div>
    );
};

export default EditCommentForm;