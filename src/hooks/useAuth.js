import React, { useEffect, useState } from 'react';

const useAuth = () => {
    const [user,setUser]=useState(null);
    useEffect(()=>{
        fetchCurrentUser();
    },[]);
    const registerUser=()=>{};
    const signInUser=()=>{};
    const signOutUser=()=>{};
    const fetchCurrentUser=()=>{};
    return {user,registerUser, signInUser, signOutUser, };
};

export default useAuth;