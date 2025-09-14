import React from 'react';

const FeatureCards = () => {
    const features = [
        {
            title: "Real-Time Stories",
            description: "Share short stories, updates, and posts instantly with your followers."
        },
        {
            title: "Verified Membership",
            description: "Get a verified badge and exclusive features as a lifetime verified member."
        },
        {
            title: "Interactive Comments",
            description: "Engage with other users through threaded comments and reactions."
        },
        {
            title: "Profile Customization",
            description: "Personalize your profile with images, bio, and social links."
        },
        {
            title: "Trending Feed",
            description: "Discover popular posts and trending content curated just for you."
        },
        {
            title: "Secure Authentication",
            description: "Login safely with email verification, JWT tokens, and Djoser authentication."
        },
    ];

    return (
        <div className='w-5/6 mx-auto'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                
                {features.map((feature, indx)=>(
                    <div 
                        key={indx}
                        className='bg-gray-200 p-6  border-2 shadow-2xl rounded-lg'>
                        <h4 className='text-xl font-semibold'>{feature.title}</h4>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureCards;