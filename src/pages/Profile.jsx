import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ProfileForm from '../components/Dashboard/Profile/ProfileForm';
import ProfileButton from '../components/Dashboard/Profile/ProfileButton';
import useAuthContext from '../hooks/useAuthContext';
import { Link, useNavigate } from 'react-router';
import ProfileImages from '../components/Dashboard/Profile/ProfileImages';
import PasswordChangeForm from '../components/Dashboard/Profile/PasswordChangeForm';

const Profile = () => {
    const {register, handleSubmit, setValue, watch,formState:{errors, isSubmitting}} = useForm();
    const [isEditing, setIsEditing] = useState(false);
    const {user,updateUserProfile,changePassword } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [isProfileImageEditing, setIsProfileImageEditing]= useState(false);
    const [isCoverPhotoEditing, setIsCoverPhotoEditing]= useState(false);
    // const navigate= useNavigate();
    
    useEffect(()=>{
        if(user){
            console.log(user);
            Object.keys(user).forEach((key)=>setValue(key, user[key]));
        } 
    },[user, setValue]);
    
    const onSubmit = async(data) => {
        console.log(data);
        try {
            const profilePayLoad= {'first_name':data.first_name,
                'last_name':data.last_name,
                'bio':data.bio,
                'location':data.location,
                'phone_number':data.phone_number,
            };
            await updateUserProfile(profilePayLoad);

            //password change
			if(data.current_password && data.new_password){
				await changePassword({current_password:data.current_password, 
				new_password: data.new_password});
			}
            setIsEditing(false);
            // alert("Profile Updated!!!");
        } catch (error) {
            console.log(error);
        }
    };

    const handleImageUpdate=async()=>{
        // console.log(isProfileImageEditing);
        // console.log(isCoverPhotoEditing);
        if(!images.length) return alert("Please select image first");
        setLoading(true);
        try {
            console.log("After submitting image: ",images);
            for(const image of images){
                const formdata= new FormData();
                if(isProfileImageEditing)
                {
                    formdata.append("profile_image",image);
                }
                if(isCoverPhotoEditing)
                {
                    formdata.append("cover_photo",image);
                }
                await updateUserProfile(formdata);
            }
            alert("Image uploaded successfully!");
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    };

    
    
    return (
        <div>
            <ProfileImages 
                handleImageUpdate={handleImageUpdate}
                setImages={setImages}
                user={user}
                setIsCoverPhotoEditing={setIsCoverPhotoEditing}
                setIsProfileImageEditing={setIsProfileImageEditing}/>
            <h1 className='text-4xl font-bold text-center'>Profile Information</h1>
            <div className='card card-body w-2/3 mx-auto '>
                <div className='flex justify-center'>

                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                        className='space-y-4  w-full md:w-1/2'
                    >

                        <ProfileForm 
                            register={register} 
                            errors={errors} 
                            isEditing={isEditing}
                        />
                        {isEditing && (

                            <PasswordChangeForm 
                                register={register} 
                                isEditing={isEditing} 
                                watch={watch} 
                                errors={errors}/>
                        )}
                        <ProfileButton 
                            isEditing={isEditing} 
                            isSubmitting={isSubmitting} 
                            setIsEditing={setIsEditing}
                        />
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default Profile;