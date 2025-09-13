import React, { useState } from 'react';

const ProfileImageChange = ({isImageEditing, setIsImageEditing,handleImageUpdate,setImages,setIsCoverPhotoEditing,setIsProfileImageEditing}) => {
    const [previewImages, setPreviewImages]= useState([]);
    
    const handleImageChange=(e)=>{
        const files=Array.from(e.target.files);
        console.log(files);
        setImages(files);
        setPreviewImages(files.map((file)=> URL.createObjectURL(file)));
    };
    
    return (
        <div>
            Change Profile and Cover Photo
            <input 
                type="file"
                accept='image/*'
                className='file-input file-input-bordered w-full' 
                onChange={handleImageChange}/>
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
            <div className='space-x-4 my-4'>
                <button 
                    onClick={handleImageUpdate}
                    className='btn btn-accent px-8'>Submit</button>
                <button 
                    onClick={()=> {
                        setIsImageEditing(false);
                        setIsCoverPhotoEditing(false);
                        setIsProfileImageEditing(false);
                    }}
                    className='btn btn-active px-8'>Cancel</button>
            </div>
        </div>
    );
};

export default ProfileImageChange;