import React from 'react';
import FieldErrorAlert from '../../FieldErrorAlert';

const ProfileForm = ({register, errors, isEditing}) => {
    return (
        <div className='space-y-4'>
            <div>
                <label className='font-semibold'>First Name</label>
                <input
                    {...register('first_name',{
                        required:"First Name is required"
                    })}
                    type="text"
                    disabled={!isEditing}
                    className='input input-accent w-full' 
                />
                {errors.first_name && (<FieldErrorAlert message={errors.first_name.message}/>)}
            </div>
            <div>
                <label className='font-semibold'>Last Name</label>
                <input 
                    {...register("last_name")}
                    type="text"
                    disabled={!isEditing}
                    className='input input-bordered w-full' 
                />
            </div>
            
            <div>
                <label className='font-semibold'>Email</label>
                <input
                    {...register('email')} 
                    type="text"
                    disabled={true}
                    className='input input-primary w-full' 
                />
            </div>
            <div>
                <label className='font-semibold'>Bio</label>
                <textarea
                    {...register('bio')} 
                    type="textarea"
                    disabled={!isEditing}
                    className='textarea input input-primary w-full' 
                />
            </div>
            <div>
                <label className='font-semibold'>Location</label>
                <textarea
                    {...register("location")} 
                    type="textarea"
                    disabled={!isEditing}
                    className='textarea input input-primary w-full' 
                />
            </div>
            <div>
                <label className='font-semibold'>Phone Number</label>
                <input 
                    {...register("phone_number")}
                    type="text"
                    disabled={!isEditing}
                    className='input input-primary w-full' 
                />
            </div>
            
        </div>
    );
};

export default ProfileForm;