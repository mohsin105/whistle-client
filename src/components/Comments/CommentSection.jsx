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
        fetchReviews();
    },[]);

    //Read Operation
    const fetchReviews = async()=>{
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
    const handleUpdateReview =()=>{

    };

    const onSubmit= async(data)=>{
        console.log(data);
        try {
            const response = await authApiClient.post(`/stories/${storyId}/comments/`,data);
            console.log(response);
            fetchReviews();
        } catch (error) {
            console.log("Error submitting comment", error);
        }
    };

    //Delete Operation
    const handleDeleteReview =()=> {

    };
    return (
        <div>
            <div>
                {loading? (
                    <div className="flex justify-center py-8">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                ):(

                    <CommentList 
                        comments={comments}>
                    </CommentList>
                )}
            </div>
            <div>
                <CommentForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

export default CommentSection;