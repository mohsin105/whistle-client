import React, { useState } from 'react';
import { Swiper,  SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Thumbs } from "swiper/modules";

const StoryImageGallery = ({images}) => {
    const displayImages = images.length>0 ? images: null
    const {thumbsSwiper} = useState(null);
    return (
        <div className='rounded-lg overflow-hidden'>
            <Swiper
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{
                    swiper:thumbsSwiper && !thumbsSwiper.destroyed? thumbsSwiper: null
                }}
            >
                {displayImages && (<div>{displayImages.map((imgObj, indx)=>(
                    <SwiperSlide key={indx}>
                        <img
                            src={imgObj.image}
                            alt="Shoes" 
                        />
                    </SwiperSlide>
                ))}</div>)}
            
            {/* 
            <img
                src={images?.length>0 ? images[0].image: defaultImage }
                alt="Shoes" 
            />
            
            */}
            </Swiper>
        </div>
    );
};

export default StoryImageGallery;


