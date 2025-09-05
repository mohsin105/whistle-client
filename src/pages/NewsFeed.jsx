// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import StoryCard from '../components/StoryCard';
import { Link, NavLink } from 'react-router';
import Loader from '../components/Loader';
import StoryList from '../components/NewsFeed/StoryList';
import Pagination from '../components/NewsFeed/Pagination';
import FilterSection from '../components/NewsFeed/FilterSection';

const NewsFeed = () => {
    const [stories, setStories]=useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    // const [filterQuery, setFilterQuery] = useState("");
    useEffect(()=>{
        fetchStories();
    },[currentPage]);
    
    const fetchStories = async()=>{
        setLoading(true);
        try {
            const response = await apiClient.get(`/stories/?page=${currentPage}`);
            const actualData = response.data;
            setStories(actualData.results);
            console.log(actualData);
            // console.log(actualData.results);
            setTotalPages(Math.ceil(actualData.count/actualData.results.length));
            // console.log(Math.ceil(actualData.count/actualData.results.length));
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    };
    
    return (
        <div className='w-1/2 mx-auto text-center'>
            This is NewsFeed
            <div>
                <FilterSection
                      searchQuery={searchQuery}
                      sortOrder={sortOrder}  
                      handleSearchChange={setSearchQuery}
                      handleSorting={setSortOrder}
                />
            </div>
            <div className='flex justify-center'>
                <div className="card w-3/4 bg-base-100 card-sm shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Share Your Story</h2>
                        <p>Let your whistle reach others</p>
                        <div className="justify-end card-actions">
                        <NavLink to={'/dashboard/stories/add'}>
                            <button className="btn btn-primary">Create Story</button>
                        </NavLink>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <StoryList stories={stories} loading={loading} />
            </div>
            <div className='mt-4'>
                <Pagination
                    currentPage={currentPage}
                    handlePageChange={setCurrentPage}
                    totalPages={totalPages}
                />
            </div>
            
        </div>
    );
};

export default NewsFeed;