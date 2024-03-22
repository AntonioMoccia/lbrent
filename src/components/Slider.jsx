'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import { SLIDER } from '../constants'



import 'swiper/css';


function Slider() {
    return (
        <div className='w-full'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    SLIDER.map((slide, i) => {
                        return (
                            <SwiperSlide key={i}>
                                    <Image
                                        src={slide.img}
                                        className='w-[60%] rounded-4xl'
                                    />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Slider