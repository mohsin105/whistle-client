import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FieldErrorAlert from '../components/FieldErrorAlert';
import authApiClient from '../services/auth-api-client';
import { Link } from 'react-router';

const AddStory = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [storyId, setStoryId] = useState(null);
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleStoryAdd = async(data)=> {
        console.log(data);
        try {
            const response = await authApiClient.post("/stories/",data);
            console.log(response.data);
            setStoryId(response.data.id);
        } catch (error) {
            console.log("Error while Creating new Story:",error)
        }
    };
    
    const handleImageChange =(e) =>{
        const files= Array.from(e.target.files);
        console.log(files);
        setImages(files);
        setPreviewImages(files.map((file) => URL.createObjectURL(file)));
    };
    

    const handleUploadImage = () =>{
        if(!images.length) return alert("Please Select Images first!!");
        setIsLoading(true);
        try {
            for(const image of images){
                const formdata= new FormData();
                formdata.append("image", image);
                authApiClient.post(`/stories/${storyId}/images/`, formdata)
            }
            alert("Image Uploaded Successfully!!!")
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    };

    return (
        <div className='w-2/3 mx-auto  bg-gray-100 rounded p-8'>
            <h1 className='text-center text-3xl font-bold my-4'>Create New Story</h1>
            <div className='flex justify-center'>

                {(!storyId)? (
                    <form 
                        onSubmit={handleSubmit(handleStoryAdd)}
                        className='space-y-2 w-full md:w-3/5 bg-gray-50 text-center p-4 rounded-lg shadow-sm'
                    >
                        <div className='space-x-2 flex flex-col md:flex-row justify-between '>
                            <label htmlFor="" >Title</label>
                            <input 
                                {...register("title",{
                                    required:"Title is required!!"
                                })}
                                type="text"
                                className='input input-primary w-full  md:w-5/6 ' 
                            />
                        </div>
                            {errors.title && (<FieldErrorAlert message={errors.title.message}/>)}
                        <div className='space-x-2 flex flex-col md:flex-row justify-between'>
                            <label htmlFor="">Content</label>
                            <textarea 
                                {...register("content",{
                                    required:"Content is required!!!"
                                })}
                                type="textarea"
                                className='textarea textarea-primary w-full md:w-5/6'
                                rows={10} 
                            />
                        </div>
                            {errors.content && (<FieldErrorAlert message={errors.content.message}/>)}
                        <button 
                            type='submit'
                            className="btn btn-soft btn-primary">
                            Post Story
                        </button>
                    </form>
                ) : (
                    // Image Upload 
                    <div className='space-y-4 w-full p-4'>
                        <h3 className='bg-indigo-200 font-bold p-4 text-center rounded'>Upload Image to your story</h3>
                        <input 
                            type="file"
                            multiple
                            accept='image/*'
                            className="file-input file-input-bordered w-full"
                            onChange={handleImageChange} 
                        />
                        <div>

                            {previewImages.length>0 && (
                                <div className='size-48 flex   gap-2'>
                                    {previewImages.map((src,indx)=>
                                        <img 
                                            src={src} 
                                            alt="preview" 
                                            key={indx}
                                            className='rounded '/>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className='space-x-4'>

                            <button 
                                disabled={isLoading}
                                onClick={handleUploadImage}
                                className="btn btn-soft btn-primary my-4"
                                >Upload Image
                            </button>
                            <Link 
                                to={`/${storyId}`}
                                className="btn btn-soft btn-info my-4">
                                    Post without Image
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddStory;