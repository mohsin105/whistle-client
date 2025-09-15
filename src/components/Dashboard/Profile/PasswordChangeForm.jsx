import React, { useState } from 'react';

const PasswordChangeForm = ({register,errors,watch,isEditing}) => {
    const [isPasswordSectionOpen ,setIsPasswordSectionOpen ]=useState(false);
    const [showPassword,setShowPassword]=useState(false);
    return (
        <div>
            <button 
                type="button" 
			    onClick={()=>setIsPasswordSectionOpen(!isPasswordSectionOpen ) }
                className='btn btn-warning'>
                Change Password
            </button>
            <div>
                {isPasswordSectionOpen && (
                    <div>
                        <div>
                            <label>Current Password</label>
                            <div>
                                <input 
                                    {...register("password",{required:"Current Password is required"})}
                                    type={showPassword? "text":"password"}
                                    disabled={!isEditing}
                                    className='input input-accent w-full' 
                                />
                                {errors.password && (<p>{errors.password.message}</p>)}

                            </div>
                        </div>
                        <div>
                            <label>New Password</label>
                            <div>
                                <input
                                    {...register("new password",{required:"New password is required"})}
                                    type={showPassword? "text":"password"}
                                    disbled={!isEditing}
                                    className='input input-accent w-full' 
                                />
                                {errors.new_password && (<p>{errors.password.message}</p>)}
                            </div>
                        </div>
                        <div>
                            <label>Confirm Password</label>
                            <div>
                                <input
                                    {...register("confirm_password",{
                                                            required:"Confirm Password is required",
                                                            validate: (value)=>value===watch("new_password") || "Password do not match"})}
                                    type="password"
                                    disabled={!isEditing}
                                    className='input input-accent w-full' 
                                />
                                
                            </div>
                        </div>
                        {/*Show password controller checkbox*/}
                        {isEditing && (
                            <label>
                                <span>Show password</span>
                                <input
                                    type="checkbox"
                                    checked={showPassword} 
                                    onChange={()=>setShowPassword(!showPassword)}
                                />
                            </label>
                            
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PasswordChangeForm;