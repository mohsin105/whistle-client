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
        <div>
            <div className='text-4xl font-bold text-center'>Register Here</div>
            
            {errorMessage && <ErrorAlert errorMessage={errorMessage}/>}
            {successMessage && <SuccessAlert successMessage={successMessage}/>}
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">First Name</label>
                    <input 
                        {...register("first_name")}
                        type="text" 
                    />
                </div>
                <div>
                    <label htmlFor="">Last Name</label>
                    <input 
                        {...register("last_name")}
                        type="text" 
                    />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input 
                        {...register("email",{
                            required:"Email Field is Required!"
                        })}
                        type="text" 
                    />
                    {errors.email && (<FieldErrorAlert message={errors.email.message}/>)}
                </div>
                <div>
                    <label htmlFor="">Bio</label>
                    <input 
                        {...register("bio")}
                        type="textarea" 
                    />
                </div>
                <div>
                    <label htmlFor="">Location</label>
                    <input 
                        {...register("location")}
                        type="text" 
                    />
                </div>
                <div>
                    <label htmlFor="">Phone Number</label>
                    <input 
                        {...register("phone_number")}
                        type="number" 
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
                        type="text" 
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
                        type="text" 
                    />
                    {errors.confirm_password && (<FieldErrorAlert message={errors.confirm_password.message}/>)}
                </div>
                <button type='submit' className='btn btn-primary w-full'>Create Account</button>
                <div>
                    Already Have an account <Link to={"/login"}>Sign In</Link>
                </div>
            </form>
        </div>
    );
};

export default Registration;