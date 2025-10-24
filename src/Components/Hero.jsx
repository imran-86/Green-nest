import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
    const slides = [
        {
            id: 1,
            image: "https://cdn.pixabay.com/photo/2025/03/29/10/59/ryoan-ji-9500830_1280.jpg",
            slogan: "Bring Nature Home"
        },
        {
            id: 2,
            image: "https://cdn.pixabay.com/photo/2015/04/10/17/03/pots-716579_1280.jpg",
            slogan: "Grow Your Indoor Oasis"
        },
        {
            id: 3,
            image: "https://cdn.pixabay.com/photo/2023/05/30/07/03/tree-8027764_1280.jpg",
            slogan: "Breathe Life Into Your Space"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            slogan: "Nature's Beauty, Indoors"
        }
    ];

    return (
        <section className="relative h-screen">
            <Swiper
                modules={[Autoplay]}
                effect="fade"
                speed={500}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div 
                            className="relative h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                           <div className="absolute inset-0  bg-opacity-20"></div>
                            <div className="absolute inset-0 flex items-center justify-center  ">
                                <h1 className="text-white font-bold text-4xl md:text-6xl text-center px-4 border-b-4 border-green-500 py-3">
                                    {slide.slogan}
                                </h1>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;