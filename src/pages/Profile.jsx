import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ProfileForm from '../components/Dashboard/Profile/ProfileForm';
import ProfileButton from '../components/Dashboard/Profile/ProfileButton';
import useAuthContext from '../hooks/useAuthContext';

const Profile = () => {
    const {register, handleSubmit, setValue, formState:{errors, isSubmitting}} = useForm();
    const [isEditing, setIsEditing] = useState(false);
    const {user,updateUserProfile } = useAuthContext();
    
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
            // alert("Profile Updated!!!");
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div>
            <h1>Profile Information</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <ProfileForm register={register} errors={errors} isEditing={isEditing}/>

                <ProfileButton isEditing={isEditing} isSubmitting={isSubmitting} setIsEditing={setIsEditing}/>
            </form>
        </div>
    );
};

export default Profile;