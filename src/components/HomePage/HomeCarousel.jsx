import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselSlide from './CarouselSlide';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import verficationImg from "../../assets/verification.jpg"
import profileEditImg from "../../assets/profile_edit.jpg"
import premiumMemberImg from "../../assets/premium_member.jpg"
import shareStoryImg from "../../assets/share_story2.jpg"

// This component is for data for Each carousel slide and sending those data to them 
const HomeCarousel = () => {
    const slides=[
        {
        title: "Share your story as you go",
        subtitle: "Where-ever you are, whenever you want",
        image: shareStoryImg,
        },
        {
        title: "Enhanced Security",
        subtitle: "Email-based verification on registration",
        image: verficationImg,
        },
        {
        title: "Customize your profile as you wish",
        subtitle: "Where-ever you are, whenever you want",
        image: profileEditImg,
        },
        {
        title: "Share your moments with snapshots",
        subtitle: "Where-ever you are, whenever you want",
        image: verficationImg,
        },
        {
        title: "Enjoy exclusive features",
        subtitle: "Be a verified member to be enjoy exclusive features only for you",
        image: premiumMemberImg,
        },
    ];
    return (
        <div>
            <Swiper
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >
                    {slides.map((slide, indx)=>(

                    <SwiperSlide key={indx}>
                        <CarouselSlide
                            title={slide.title}
                            subtitle={slide.subtitle}
                            image={slide.image}/>
                    </SwiperSlide>
                        
                    ))}
            </Swiper>
        </div>
    );
};

export default HomeCarousel;