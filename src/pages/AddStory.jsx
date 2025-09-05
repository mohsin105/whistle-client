import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FieldErrorAlert from '../components/FieldErrorAlert';
import authApiClient from '../services/auth-api-client';

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
        <div className='w-2/3 mx-auto '>
            <h1 className='text-center'>Create New Story</h1>
            <div className='flex justify-center'>

                {(!storyId)? (
                    <form 
                        onSubmit={handleSubmit(handleStoryAdd)}
                        className='space-y-2 w-full bg-gray-50 text-center'
                    >
                        <div className='space-x-2'>
                            <label htmlFor="">Title</label>
                            <input 
                                {...register("title",{
                                    required:"Title is required!!"
                                })}
                                type="text"
                                className='input input-primary ' 
                            />
                            {errors.title && (<FieldErrorAlert message={errors.title.message}/>)}
                        </div>
                        <div className='space-x-2'>
                            <label htmlFor="">Content</label>
                            <input 
                                {...register("content",{
                                    required:"Content is required!!!"
                                })}
                                type="textarea"
                                className='textarea input input-primary' 
                            />
                            {errors.content && (<FieldErrorAlert message={errors.content.message}/>)}
                        </div>
                        <button 
                            type='submit'
                            className="btn btn-soft btn-primary">
                            Post Story
                        </button>
                    </form>
                ) : (
                    // Image Upload 
                    <div>
                        <input 
                            type="file"
                            multiple
                            accept='image/*'
                            className="file-input file-input-bordered w-full"
                            onChange={handleImageChange} 
                        />
                        {previewImages.length>0 && (
                            <div className='size-48 flex gap-2'>
                                {previewImages.map((src,indx)=>
                                    <img src={src} alt="preview" key={indx}/>
                                )}
                            </div>
                        )}
                        <button 
                            disabled={isLoading}
                            onClick={handleUploadImage}
                            >Upload Image
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddStory;