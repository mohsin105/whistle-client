import React, { useState } from 'react';
import defaultCover from "../../../assets/default_cover.jpg"
import defaultProfileImage from "../../../assets/Default_pfp.jpg"
import ProfileImageChange from './ProfileImageChange';

const ProfileImages = ({handleImageUpdate,setImages,user,setIsCoverPhotoEditing,setIsProfileImageEditing}) => {
    const [isImageEditing, setIsImageEditing] = useState(false);
    return (
        <div>
            {/* Cover Photo */}
            <div className='h-[33vh] md:h-[40vh] w-full bg-yellow-200'>
                <img 
                    src={user && user.cover_photo? user.cover_photo: defaultCover}
                    alt="cover_image"
                    className='w-full h-full object-cover' />

            </div>
            <div className='flex justify-between'>
                {/* Profile Picture */}
                <div className='relative -top-24 left-8 size-48 bg-yellow-200 rounded-full shadow-2xl '>
                    <img 
                        src={user && user.profile_image? user.profile_image:defaultProfileImage}
                        alt="profile_image" 
                        className='w-full h-full object-cover rounded-full'/>
                </div>
                {/* Update Button  */}
                <div className="dropdown dropdown-end relative -top-12 bottom-0">
                    <div tabIndex={0} role="button" className="btn m-1">Update</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>
                            <a 
                                onClick={()=>{
                                    setIsImageEditing(true);
                                    setIsProfileImageEditing(true);
                                    setIsCoverPhotoEditing(false);
                            }}> 
                                Profile Photo</a>
                        </li>
                        <li>
                            <a onClick={()=>{
                                setIsImageEditing(true);
                                setIsCoverPhotoEditing(true);
                                setIsProfileImageEditing(false);
                            }}> 
                            Cover Photo</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                {isImageEditing && (<ProfileImageChange 
                    isImageEditing={isImageEditing}
                    setIsImageEditing={setIsImageEditing}
                    handleImageUpdate={handleImageUpdate}
                    setImages={setImages}
                    setIsCoverPhotoEditing={setIsCoverPhotoEditing}
                    setIsProfileImageEditing={setIsProfileImageEditing}
                    />) }
            </div>
        </div>
    );
};

export default ProfileImages;