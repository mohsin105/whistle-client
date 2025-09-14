import React from 'react';
import heroImage from "../../assets/home_bg.png"
import heroBg from "../../assets/hero_bg.jpg"
const HeroArea = () => {
    return (
        <div className=' relative'>

            <section 
                className='flex'
                style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                
                <div className='flex flex-col basis-1/2 my-auto ml-10 h-full text-white'>
                    
                    <h1 className='text-4xl font-bold drop-shadow-2xl'>Welcome to Whistle</h1>. 
                    <h3 className='text-3xl drop-shadow-2xl'>Stay Connected. Share Moments. Whistle</h3>
                </div>
                {/* Image */}
                <div className='basis-1/2 z-20'>
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent to-black' style={{ opacity: 0.3 }}></div>
                    <img src={heroImage} alt="" />
                </div>
                {/* Gradient Overlay
                <div className="absolute inset-0 z-10" style={{
                    background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)'
                }}></div> */}
            </section>
        </div>
    );
};

export default HeroArea;