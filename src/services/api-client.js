import axios from 'axios';
import React from 'react';

export default axios.create(
    {
        baseURL:"https://whistle-pi.vercel.app/api/v1/"
    }
);