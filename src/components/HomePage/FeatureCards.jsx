import React from 'react';
import featureBg from "../../assets/default_cover.jpg"

const FeatureCards = () => {
    const gradients = [
        "from-pink-100 to-blue-100",          // your original
        "from-blue-200 to-indigo-300",      // soft purple to indigo
        "from-cyan-200 to-teal-100",         // fresh green to teal
        "from-pink-200 to-orange-100",      // warm yellow to orange
    ];
    const features = [
        {
            title: "Real-Time Stories",
            description: "Share short stories, updates, and posts instantly with your followers.",
        },
        {
            title: "Verified Membership",
            description: "Get a verified badge and exclusive features as a lifetime verified member.",
        },
        {
            title: "Interactive Comments",
            description: "Engage with other users through threaded comments and reactions.",
        },
        {
            title: "Profile Customization",
            description: "Personalize your profile with images, bio, and social links.",
        },
        {
            title: "Trending Feed",
            description: "Discover popular posts and trending content curated just for you.",
        },
        {
            title: "Secure Authentication",
            description: "Login safely with email verification, JWT tokens, and Djoser authentication.",
        },
    ];

    return (
        <div 
             style={{ backgroundImage: `url(${featureBg})` }}
            className='w-5/6 mx-auto rounded-xl shadow-2xl p-2'>
            <h2 
                className='mb-4 bg-sky-600 text-center text-4xl flex justify-center items-center text-white p-6 rounded-lg shadow-blue-200  '>
                Features
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                
                {features.map((feature, indx)=>(
                    <div 
                        key={indx}
                        className={`bg-gray-200 p-6  border-2 shadow-2xl rounded-lg tansition-shadow duration 300 
		cursor-pointer bg-gradient-to-br ${gradients[indx%gradients.length]}`}>
                        <h4 className='text-xl font-semibold'>{feature.title}</h4>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureCards;