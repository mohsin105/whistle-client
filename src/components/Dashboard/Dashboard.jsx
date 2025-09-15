import React, { useEffect, useState } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import apiClient from '../../services/api-client';
import StoryList from '../NewsFeed/StoryList';
import defaultCover from "../../assets/default_cover.jpg"
import defaultProfileImage from "../../assets/Default_pfp.jpg"
import Pagination from '../NewsFeed/Pagination';


const Dashboard = () => {
    const {user} = useAuthContext();
    const [myStories, setMyStories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    
    useEffect(()=>{
        fetchMyStories();
    },[user,currentPage]);
    
    const fetchMyStories =async()=>{
        setLoading(true);
        try {
            const response = await apiClient.get(`/stories/?search=${user.first_name}&page=${currentPage}`);
            setMyStories(response.data.results);
            setTotalPages(Math.ceil(response.data.count/response.data.results.length));
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div>
                {/* Cover Photo */}
                <div className='h-[33vh] md:h-[40vh] w-full bg-yellow-200'>
                    <img 
                        src={user && user.cover_photo? user.cover_photo: defaultCover}
                        alt="cover_image"
                        className='w-full h-full object-cover' />
    
                </div>
                {/* Profile Picture */}
                <div className='relative -top-24 left-8 size-48 bg-yellow-200 rounded-full shadow-2xl '>
                    <img 
                        src={user && user.profile_image? user.profile_image:defaultProfileImage}
                        alt="profile_image" 
                        className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <h1 className='text-3xl text-center my-4'>Your Stories</h1>
            <div>
                <StoryList stories={myStories} loading={loading}/>
            </div>
            <div className='mt-4 flex justify-center'>
                <Pagination
                    currentPage={currentPage}
                    handlePageChange={setCurrentPage}
                    totalPages={totalPages}
                />
            </div>
        </div>
    );
};

export default Dashboard;