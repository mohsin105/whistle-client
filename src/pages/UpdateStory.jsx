import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router';
import FieldErrorAlert from '../components/FieldErrorAlert';
import apiClient from '../services/api-client';
import authApiClient from '../services/auth-api-client';

const UpdateStory = () => {
    const {register, handleSubmit,setValue ,formState:{errors,isSubmitting}} = useForm();
    const {storyId} = useParams();
    const [story , setStory]= useState([]);
    useEffect(()=>{
        console.log(storyId);
        apiClient.get(`stories/${storyId}`)
        .then(data=> setStory(data.data));
    },[storyId]);
    
    useEffect(()=>{
        if(story)
        {
            Object.keys(story).forEach((key)=>setValue(key, story[key]));
        }
    },[story]);

    const handleStoryUpdate= async(data)=>{
        console.log(data);
        try {
            const response= await authApiClient.put(`/stories/${storyId}`, data);
            console.log(response.data);
        } catch (error) {
            console.log("Error updating story", error);
        }
        
    };

    // const handleImageUpdateChange =()=>{};

    // const handleUploadNewImage = () =>{};
    return (
        <div className='w-full sm:w-2/3 mx-auto  bg-gray-100 rounded p-8'>

            <p className='text-center text-3xl font-bold my-4'>
                Update Your Story
            </p>
            <div className='card card-body '>
                <div className='flex justify-center'>

                    <form 
                        onSubmit={handleSubmit(handleStoryUpdate)}
                        className='space-y-2 w-full md:w-3/5 bg-gray-50 text-center p-4 rounded-lg shadow-sm'
                    >
                        <div className='space-x-2 flex flex-col md:flex-row justify-between'>
                            <label htmlFor="">Title</label>
                            <input 
                                {...register('title',{
                                    required:"Title Cannot be empty"
                                })}
                                type="text"
                                className='input input-primary' 
                            />
                            {errors.title && (<FieldErrorAlert message={errors.title.message}/>)}
                        </div>
                        <div className='space-x-2 flex flex-col md:flex-row justify-between'>
                            <label htmlFor="">Content</label>
                            <textarea 
                                {...register("content",{
                                    required:"Content cannot be empty"
                                })}
                                type="textarea"
                                rows={10}
                                className='textarea' 
                            />
                            {errors.content && (<FieldErrorAlert message={errors.content.message}/>)}
                        </div>
                        {/* Buttons  */}
                        <div className='space-x-2'>

                            {isSubmitting?(
                                <button
                                    type='button'
                                    disabled={true}
                                    className='btn px-8 font-bold my-2'>
                                    Saving...
                                </button>
                            ) : (

                                <button 
                                    className='btn px-8 font-bold my-2'
                                    type='submit'
                                >Save Changes</button>
                            )}
                            <Link to={`/${storyId}`}>
                                <button className='btn px-8 font-bold my-2'>Return</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateStory;