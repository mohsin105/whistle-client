import React, { useEffect, useState } from 'react';
import authApiClient from '../services/auth-api-client';
import apiClient from '../services/api-client';

const useAuth = () => {
    const [user,setUser]=useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const getToken=()=>{
        const token= localStorage.getItem("authToken");
        return token? JSON.parse(token):null;
    }
    const [authToken, setAuthToken] = useState(getToken());
    
    useEffect(()=>{
        if(authToken)fetchCurrentUser();
    },[authToken]);
    
    
    const registerUser=async(userData)=>{
        try {
            await apiClient.post("/auth/users/",userData);
            return{success:true, message:"Registration Successfull. Check Your email to activate account"};
        } catch (error) {
            console.log(error);
            handleApiError(error);
        }
    };
    
    
    const loginUser = async(userData)=>{
        try {
            const response= await apiClient.post("/auth/jwt/create", userData);
            setAuthToken(response.data);
            localStorage.setItem("authToken", JSON.stringify(response.data));
            return{success:true, message: "Login Successful"}
        } catch (error) {
            console.log(error);
            handleApiError(error);
        }
    };
    
    
    const signOutUser=()=>{

    };
    
    //fetching current user function
    const fetchCurrentUser=async()=>{
        try {
            const response = await authApiClient.get("/auth/users/me");
            console.log(response.data);
            setUser(response.data);
        } catch (error) {
            console.log(error);
            handleApiError(error);
        }
    };

    const handleApiError = (error, defaultMessage="Something went wrong") => {
        console.log(error);
        //field specific error
        if(error.response && error.response.data){
            const errorMsg=Object.values(error.response.data).flat().join("\n")
            setErrorMessage(errorMsg);
            return{success:false, message:errorMsg};
        }
        //No field specific error captured, but still error occurred
        setErrorMessage(defaultMessage);
        return{success:false, message:defaultMessage}
    };

    const changePassword =async()=>{

    }

    const updateUserProfile = async() => {

    }
    
    
    return {user,registerUser, loginUser, signOutUser,errorMessage, changePassword, updateUserProfile };
};

export default useAuth;