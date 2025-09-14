import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselSlide from './CarouselSlide';
// This component is for data for Each carousel slide and sending those data to them 
const HomeCarousel = () => {
    const slides=[

    ];
    return (
        <div>
            <Swiper>
                <SwiperSlide>
                    <CarouselSlide></CarouselSlide>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomeCarousel;