import React from 'react';

const CarouselSlide = ({title,subtitle,image}) => {
    return (
        <section className='flex items-center justify-center px-4 md:px-8'>
            <div className='max-w-6xl w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8'>
                {/* Test Section */}

                <div className='flex flex-col '>
                    <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-xl md:text-3xl font-bold text-gray-900">
                            {title}
                        </h1>
                        <p className="text-gray-600 my-4">{subtitle}</p>
                        
                    </div>
                </div>
                {/* Image section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img 
                        src={image} 
                        alt="" 
                        className="object-contain min-h-full md:max-w-md drop-shadow-lg"/>
                </div>
            </div>
        </section>
    );
};

export default CarouselSlide;