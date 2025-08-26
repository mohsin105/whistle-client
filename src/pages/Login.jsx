import React from 'react';
import { useForm } from 'react-hook-form';
import FieldErrorAlert from '../components/FieldErrorAlert';
import useAuthContext from '../hooks/useAuthContext';
import { useNavigate } from 'react-router';
import ErrorAlert from '../components/ErrorAlert';


const Login = () => {
    const {register,handleSubmit, formState:{errors}} = useForm();
    const {loginUser,errorMessage} = useAuthContext();
    const navigate = useNavigate();

    const onSubmit = async(data) =>{
        try {
            const response = await loginUser(data);
            console.log(response);
            if (response.success) navigate("/");
        } catch (error) {
            console.log("Login Error ",error);
        }
    };

    return (
        <div>
            <div className='text-4xl'>Login Page</div>
            
            {errorMessage && (<ErrorAlert errorMessage={errorMessage}/>)}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Email</label>
                    <input 
                        {...register("email",{
                            required:"Email is required!!"
                        })}
                        type="text" 
                    />
                    {errors.email && (<FieldErrorAlert message={errors.email.message}/>)}
                </div>
                <div>  
                    <label htmlFor="">Password</label>
                    <input 
                        {...register("password",{
                            required:"Password is required"
                        })}
                        type="password" 
                    />
                    {errors.password && (<FieldErrorAlert message={errors.password.message}/>)}
                </div>
                <button type='submit' className='btn btn-primary w-full'>Sign In</button>
            </form>
        </div>
    );
};

export default Login;