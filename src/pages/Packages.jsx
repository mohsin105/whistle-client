import React, { useState } from 'react';
import authApiClient from '../services/auth-api-client';

const Packages = () => {
    const [orderId,setOrderId]=useState(null);
    const [order, setOrder]= useState({});
    const [isLoading,setIsLoading]=useState(false);
    const [isPaymentLoading, setIsPaymentLoading] = useState(false);

    
    
    const handleOrderCreate= async()=> {
        setIsLoading(true)
        try {
            const response = await authApiClient.post('/orders/');
            console.log(response.data);
            setOrder(response.data);
            setOrderId(response.data.id);
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    };

    const handlePayment=async()=>{
        setIsPaymentLoading(true);
        try {
            const response=  await authApiClient.post('/payment/initiate/',{
                amount: '100',
                orderId:orderId
            });
            
            console.log(response.data);
            if(response.data.payment_url)
            {
                setIsPaymentLoading(false);
                window.location.href=response.data.payment_url;
            }
            else{
                alert("Payment Failed")
            }
        } catch (error) {
            console.log("Error during payment ",error);
        }
    };
    return (
        <div >

            <div className='container mx-auto space-y-8'>
                <h2 className='text-3xl text-center'>Premium Packages</h2>
                <div className='flex justify-center'>
                    <div className="card card-border border-violet-600 bg-base-100 w-5/6 shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">Lifetime Verified Member</h2>
                            <p className='text-lg'>Enjoy exclusice features by becoming a lifetime verified member: </p>
                            <ul className='list-disc list-inside space-y-3'>
                                <li>Blue Tick Badge – Stand out with a verified checkmark on your profile.</li>
                                <li>Lifetime Validity – One-time upgrade, no renewal required.</li>
                                <li>Priority Visibility – Your posts appear higher in feeds and search.</li>
                                <li>Comment Highlighting – Your comments appear at the top on popular posts.</li>
                                <li>Early Access – Get new features before regular users.</li>
                                <li>Direct Support – Faster response from the support team.</li>
                                <li>Ad-Free Browsing – Enjoy a distraction-free experience.</li>
                            </ul>
                            <p>Only at 100 taka</p>
                            <div className="card-actions justify-end">
                                {orderId && order.status!="ACTIVE"? (
                                    <button
                                        className='btn btn-info'
                                        onClick={handlePayment}
                                        disabled={isPaymentLoading}>
                                        Proceed to Payment
                                    </button>
                                ):orderId && order.status=="ACTIVE"?(
                                    <button 
                                        className='btn btn-active'>
                                        Package Already Active
                                    </button>
                                ):(

                                    <button 
                                        onClick={handleOrderCreate}
                                        className="btn btn-primary">
                                             Buy Now
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    {orderId && order && (
                        <div className="card card-dash bg-primary text-primary-content w-5/6">
                            <div className='text-2xl'>Your Packages: </div>
                            <div className="card-body">
                                <h2 className="card-title">Order Id: {order.id}</h2>
                                <p className='font-extrabold text-lg'>{order.package_name}</p>
                                <p>Created at: {order.created_at}</p>
                                <div className="card-actions justify-end">
                                <button className="btn">{order.status}</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Packages;