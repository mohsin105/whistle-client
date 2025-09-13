import axios from 'axios';
import React from 'react';

export default axios.create(
    {
        baseURL:"https://whistle-pi.vercel.app/api/v1/"
        // baseURL:"http://127.0.0.1:8000/api/v1/"
    }
);