import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FieldErrorAlert from '../components/FieldErrorAlert';
import useAuthContext from '../hooks/useAuthContext';
import { NavLink, useNavigate } from 'react-router';
import ErrorAlert from '../components/ErrorAlert';


const Login = () => {
    const {register,handleSubmit, formState:{errors}} = useForm();
    const {loginUser,errorMessage} = useAuthContext();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async(data) =>{
        setLoading(true);
        try {
            const response = await loginUser(data);
            console.log(response);
            if (response.success) navigate("/newsfeed");
        } catch (error) {
            console.log("Login Error ",error);
        }finally{
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center'>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-2xl">Login</legend>
                {errorMessage && (<ErrorAlert errorMessage={errorMessage}/>)}
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="label">Email</label>
                    <input 
                        {...register("email",{
                            required:"Email is required!!"
                        })}
                        type="email" 
                        className="input" 
                        placeholder="Email" />
                    {errors.email && (<FieldErrorAlert message={errors.email.message}/>)}
                    
                    <label className="label">Password</label>
                    <input 
                        {...register("password",{
                            required:"Password is required"
                        })}
                        type="password" 
                        className="input" 
                        placeholder="Password" />
                    {errors.password && (<FieldErrorAlert message={errors.password.message}/>)}

                    <button 
                        disabled={loading}
                        className="btn btn-neutral mt-4">
                            {loading? "Signing In..." : "Sign In"}
                    </button>
                </form>
                <div>
                    No Account yet? <NavLink to={"/register"} className='link link-info'>Create New Account</NavLink>
                </div>
            </fieldset>
        </div>
    );
};

export default Login;


// 