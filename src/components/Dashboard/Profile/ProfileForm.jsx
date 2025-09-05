import React from 'react';
import FieldErrorAlert from '../../FieldErrorAlert';

const ProfileForm = ({register, errors, isEditing}) => {
    return (
        <div>
            <div>
                <label >First Name</label>
                <input
                    {...register('first_name',{
                        required:"First Name is required"
                    })}
                    type="text"
                    disabled={!isEditing}
                    className='input input-accent' 
                />
                {errors.first_name && (<FieldErrorAlert message={errors.first_name.message}/>)}
            </div>
            <div>
                <label >Last Name</label>
                <input 
                    {...register("last_name")}
                    type="text"
                    disabled={!isEditing}
                    className='input input-bordered ' 
                />
            </div>
            
            <div>
                <label >Email</label>
                <input
                    {...register('email')} 
                    type="text"
                    disabled={true}
                    className='input input-primary' 
                />
            </div>
            <div>
                <label >Bio</label>
                <input
                    {...register('bio')} 
                    type="text"
                    disabled={!isEditing}
                    className='' 
                />
            </div>
            <div>
                <label >Location</label>
                <input
                    {...register("location")} 
                    type="text"
                    disabled={!isEditing}
                    className='input input-primary' 
                />
            </div>
            <div>
                <label >Phone Number</label>
                <input 
                    {...register("phone_number")}
                    type="text"
                    disabled={!isEditing}
                    className='input input-primary' 
                />
            </div>
            
        </div>
    );
};

export default ProfileForm;