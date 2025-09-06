import React from 'react';
import Button from '../../Button';

const ProfileButton = ({isEditing, isSubmitting, setIsEditing}) => {
    return (
        <div>
            {isEditing? (
                <div>
                    <button 
                        type='submit'
                        disabled={isSubmitting}
                        className='btn btn-active px-8'
                    >
                        {isSubmitting? "Saving": "Save Changes" }
                    </button>
                    
                    <button
                        type='button'
                        onClick={()=>setIsEditing(false)}
                        className='btn btn-info px-8'>
                            Cancel
                    </button>
                </div>
            ):(
                <div>
                    <a 
                        
                        onClick={()=>setIsEditing(true)} 
                        className='btn btn-neutral px-8'>
                            Edit Profile
                    </a>
                </div>
            )}
            

            
        </div>
    );
};

export default ProfileButton;