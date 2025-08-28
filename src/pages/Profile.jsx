import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ProfileForm from '../components/Dashboard/Profile/ProfileForm';
import ProfileButton from '../components/Dashboard/Profile/ProfileButton';

const Profile = () => {
    const {register, handleSubmit,watch, setValue, formState:{errors, isSubmitting}} = useForm();
    const [isEditing, setIsEditing] = useState(false);
    
    const onSubmit = () => {

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