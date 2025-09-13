import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthContext from '../hooks/useAuthContext';
import ErrorAlert from '../components/ErrorAlert';
import SuccessAlert from '../components/SuccessAlert';
import FieldErrorAlert from '../components/FieldErrorAlert';
import { Link } from 'react-router';

const Registration = () => {
    const {register, handleSubmit, formState:{errors}, watch} = useForm();
    const {registerUser, errorMessage} = useAuthContext();
    const {successMessage, setSuccessMessage} = useState("");
    
    const onSubmit= async(data) => {
        delete data.confirm_password;
        try {
            const response = await registerUser(data);
            if(response.success)
            {
                setSuccessMessage(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='w-5/6 mx-auto p-4 bg-gray-50'>
            <div className='card'>
                <div className='text-4xl font-bold text-center my-2'>Register Here</div>
                <div>
                    {errorMessage && <ErrorAlert errorMessage={errorMessage}/>}
                    {successMessage && <SuccessAlert successMessage={successMessage}/>}
                </div>
                <div className=' flex justify-center'>

                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                        className='space-y-2  bg-gray-100 shadow-xl rounded-lg p-8'>
                        <div>
                            <label htmlFor="">First Name</label>
                            <input 
                                {...register("first_name")}
                                type="text"
                                className='input'
                                placeholder='Your First Name' 
                            />
                        </div>
                        <div>
                            <label htmlFor="">Last Name</label>
                            <input 
                                {...register("last_name")}
                                type="text"
                                className='input input-primary' 
                                placeholder='Your Last Name' 
                            />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input 
                                {...register("email",{
                                    required:"Email Field is Required!"
                                })}
                                type="text" 
                                className='input input-primary'
                                placeholder='email' 
                            />
                            {errors.email && (<FieldErrorAlert message={errors.email.message}/>)}
                        </div>
                        <div>
                            <label htmlFor="">Bio</label>
                            <input 
                                {...register("bio")}
                                type="textarea" 
                                className='input input-primary'
                                placeholder='Enter your Bio' 
                            />
                        </div>
                        <div>
                            <label htmlFor="">Location</label>
                            <input 
                                {...register("location")}
                                type="text"
                                className='input input-primary'
                                placeholder='Location'  
                            />
                        </div>
                        <div>
                            <label htmlFor="">Phone Number</label>
                            <input 
                                {...register("phone_number")}
                                type="text"
                                className='input input-primary'
                                placeholder='Phone Number'  
                            />
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <input 
                                {...register("password",{
                                    required:"Password Field is required!",
                                    minLength:{
                                        value:8,
                                        message:"Password Must be 8 characters long"
                                    }
                                })}
                                type="password"
                                className='input input-primary'
                                placeholder='Password'  
                            />
                            {errors.password && (<FieldErrorAlert message={errors.password.message}/>)}
                        </div>
                        <div>
                            <label htmlFor="">Confirm Password</label>
                            <input
                                {...register("confirm_password",{
                                    required:"Confirm Password Field is Required!",
                                    validate:(value) => value ===watch("password") || "Password Do Not Match",
                                })} 
                                type="password" 
                                className='input input-primary'
                                placeholder='Confirm Password' 
                            />
                            {errors.confirm_password && (<FieldErrorAlert message={errors.confirm_password.message}/>)}
                        </div>
                        <button type='submit' className='btn btn-primary w-full my-2'>Create Account</button>
                        <div className='flex gap-2 '>
                            Already Have an account 
                            <Link to={"/login"}>
                                <span className='link link-info'>Sign In</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;