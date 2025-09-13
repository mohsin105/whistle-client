import React from 'react';
import { Link } from 'react-router';

const PaymentSuccess = () => {
    return (
        <div>
            Payment Success. Return To <Link to={'/dashboard'}>Dashboard</Link> 
        </div>
    );
};

export default PaymentSuccess;