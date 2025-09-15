import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import apiClient from '../../services/api-client';
import useAuthContext from '../../hooks/useAuthContext';
import CommentForm from './CommentForm';
import authApiClient from '../../services/auth-api-client';

const CommentSection = ({storyId}) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const {user} = useAuthContext();
    const [editComment, setEditComment] = useState(null);
    const [editingId, setEditingId] = useState(null);

    useEffect(()=>{
        fetchComments();
    },[]);

    //Read Operation
    const fetchComments = async()=>{
        setLoading(true);
        try {
            const response = await apiClient.get(`/stories/${storyId}/comments/`);
            console.log(response.data);
            setComments(response.data);
        } catch (error) {
            console.log('Error Fetching Review', error);
        }finally{
            setLoading(false);
        }
    };
    //Update Operation
    const handleUpdateComment =async(commentId)=>{
        try {
            await authApiClient.put(`/stories/${storyId}/comments/${commentId}/`, editComment);
            setEditingId(null);
            fetchComments();
        } catch (error) {
            console.log("Error Updating Comment",error);
        }
    };
    //Create Operation: -> 
    const onSubmit= async(data)=>{
        console.log(data);
        try {
            const response = await authApiClient.post(`/stories/${storyId}/comments/`,data);
            console.log(response);
            fetchComments();
        } catch (error) {
            console.log("Error submitting comment", error);
        }
    };

    //Delete Operation
    const handleDeleteComment = async(commentId)=> {
        try {
            await authApiClient.delete(`/stories/${storyId}/comments/${commentId}/`);
            fetchComments();
        } catch (error) {
            console.log("Error Deleting Comment: ",error)
        }
    };
    return (
        <div >
            <div>
                {loading? (
                    <div className="flex justify-center py-8">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                ):(!loading && comments.length===0)?(
                    <div>
                        No Comment yet. Be the first to comment!!!
                    </div>
                ):(
                    <div>
                        <p className='font-semibold'>All Comments</p>
                        <CommentList 
                            comments={comments}
                            user={user}
                            editingId={editingId}
                            setEditingId={setEditingId}
                            editComment={editComment}
                            setEditComment={setEditComment}
                            handleUpdateComment={handleUpdateComment}
                            handleDeleteComment={handleDeleteComment}>
                        </CommentList>
                    </div>
                )}
            </div>
            {user && (

                <div className='p-4'>
                    <CommentForm onSubmit={onSubmit}/>
                </div>
            )}
        </div>
    );
};

export default CommentSection;