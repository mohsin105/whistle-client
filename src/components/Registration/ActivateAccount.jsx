import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import apiClient from '../../services/api-client';
import SuccessAlert from '../SuccessAlert';
import ErrorAlert from '../ErrorAlert';

const ActivateAccount = () => {
    const {uid, token} = useParams();
    const [message,setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate= useNavigate()
    useEffect(()=>{
        apiClient.post("/auth/users/activation/",{uid,token})
        .then((res)=>{
            console.log(res.data);
            setMessage("Account Activated Successfully. Proceed To Login");
            setTimeout(()=>navigate("/login",3000));
        })
        .catch((error)=>{
            console.log(error);
            setErrorMessage("Something Went Wrong. Please check your activation link");
        })
    },[]);
    
    return (
        <div>
            <h2>Activate Account</h2>
            <div>
                {message && (<SuccessAlert successMessage={message}/>)}
            </div>
            <div>
                {errorMessage && (<ErrorAlert errorMessage={errorMessage}/>)}
            </div>
        </div>
    );
};

export default ActivateAccount;