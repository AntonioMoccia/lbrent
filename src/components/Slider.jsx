'use client'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Image from 'next/image'
import { SLIDER } from '../constants'



import 'swiper/css';


function SlideNextButton() {
    const swiper = useSwiper();

    return (
        <button className='absolute right-3 top-[50%] z-50 lg:inline-block hidden bg-white rounded-full p-[2px]' onClick={() => swiper.slideNext()}>
            <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.1833 18.1837C23.335 18.0252 23.454 17.8382 23.5333 17.6337C23.7 17.2279 23.7 16.7728 23.5333 16.367C23.454 16.1624 23.335 15.9755 23.1833 15.817L18.1833 10.817C17.8695 10.5032 17.4438 10.3268 17 10.3268C16.5561 10.3268 16.1305 10.5031 15.8166 10.817C15.5028 11.1308 15.3265 11.5565 15.3265 12.0003C15.3265 12.4442 15.5028 12.8698 15.8166 13.1837L17.9833 15.3337L12 15.3337C11.5579 15.3337 11.134 15.5093 10.8214 15.8218C10.5089 16.1344 10.3333 16.5583 10.3333 17.0003C10.3333 17.4424 10.5089 17.8663 10.8214 18.1788C11.134 18.4914 11.5579 18.667 12 18.667L17.9833 18.667L15.8166 20.817C15.6604 20.9719 15.5364 21.1563 15.4518 21.3594C15.3672 21.5625 15.3236 21.7803 15.3236 22.0003C15.3236 22.2203 15.3672 22.4382 15.4518 22.6413C15.5364 22.8444 15.6604 23.0287 15.8166 23.1837C15.9716 23.3399 16.1559 23.4639 16.359 23.5485C16.5621 23.6331 16.7799 23.6767 17 23.6767C17.22 23.6767 17.4378 23.6331 17.6409 23.5485C17.844 23.4639 18.0284 23.3399 18.1833 23.1837L23.1833 18.1837ZM33.6666 17.0003C33.6666 13.704 32.6891 10.4816 30.8578 7.74082C29.0264 5 26.4235 2.86379 23.378 1.60233C20.3326 0.340868 16.9815 0.0108126 13.7485 0.653899C10.5154 1.29699 7.54572 2.88433 5.21485 5.21521C2.88397 7.54608 1.29662 10.5158 0.653537 13.7488C0.0104493 16.9818 0.340505 20.3329 1.60196 23.3784C2.86343 26.4238 4.99964 29.0268 7.74045 30.8581C10.4813 32.6895 13.7036 33.667 17 33.667C19.1887 33.667 21.3559 33.2359 23.378 32.3983C25.4001 31.5607 27.2374 30.3331 28.7851 28.7854C31.9107 25.6598 33.6666 21.4206 33.6666 17.0003V17.0003ZM3.66663 17.0003C3.66663 14.3632 4.44861 11.7854 5.9137 9.59272C7.37879 7.40006 9.46117 5.6911 11.8975 4.68193C14.3339 3.67276 17.0148 3.40871 19.6012 3.92318C22.1876 4.43765 24.5634 5.70753 26.4281 7.57223C28.2928 9.43693 29.5626 11.8127 30.0771 14.3991C30.5916 16.9855 30.3275 19.6664 29.3184 22.1028C28.3092 24.5391 26.6002 26.6215 24.4076 28.0866C22.2149 29.5517 19.637 30.3337 17 30.3337C13.4637 30.3337 10.0724 28.9289 7.57187 26.4284C5.07138 23.9279 3.66663 20.5365 3.66663 17.0003Z" fill="black" />
            </svg>
        </button>
    );
}
function SlidePrevButton() {
    const swiper = useSwiper();

    return (
        <button className='absolute left-3 top-[50%] z-50  lg:inline-block hidden bg-white rounded-full p-[2px]' onClick={() => swiper.slidePrev()()}>
            <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8167 15.8163C10.665 15.9748 10.546 16.1618 10.4667 16.3663C10.3 16.7721 10.3 17.2272 10.4667 17.633C10.546 17.8376 10.665 18.0245 10.8167 18.183L15.8167 23.183C16.1305 23.4968 16.5562 23.6732 17 23.6732C17.4439 23.6732 17.8695 23.4968 18.1834 23.183C18.4972 22.8692 18.6735 22.4435 18.6735 21.9997C18.6735 21.5558 18.4972 21.1302 18.1834 20.8163L16.0167 18.6663H22C22.4421 18.6663 22.866 18.4907 23.1786 18.1782C23.4911 17.8656 23.6667 17.4417 23.6667 16.9997C23.6667 16.5576 23.4911 16.1337 23.1786 15.8212C22.866 15.5086 22.4421 15.333 22 15.333H16.0167L18.1834 13.183C18.3396 13.0281 18.4636 12.8437 18.5482 12.6406C18.6328 12.4375 18.6764 12.2197 18.6764 11.9997C18.6764 11.7797 18.6328 11.5618 18.5482 11.3587C18.4636 11.1556 18.3396 10.9713 18.1834 10.8163C18.0284 10.6601 17.8441 10.5361 17.641 10.4515C17.4379 10.3669 17.2201 10.3233 17 10.3233C16.78 10.3233 16.5622 10.3669 16.3591 10.4515C16.156 10.5361 15.9716 10.6601 15.8167 10.8163L10.8167 15.8163ZM0.333374 16.9997C0.333374 20.296 1.31086 23.5184 3.14221 26.2592C4.97357 29 7.57655 31.1362 10.622 32.3977C13.6674 33.6591 17.0185 33.9892 20.2515 33.3461C23.4846 32.703 26.4543 31.1157 28.7852 28.7848C31.116 26.4539 32.7034 23.4842 33.3465 20.2512C33.9896 17.0182 33.6595 13.6671 32.398 10.6216C31.1366 7.57618 29.0004 4.9732 26.2595 3.14185C23.5187 1.31049 20.2964 0.333008 17 0.333008C14.8113 0.333008 12.6441 0.764104 10.622 1.60168C8.59989 2.43926 6.76257 3.66692 5.21493 5.21456C2.08932 8.34017 0.333374 12.5794 0.333374 16.9997V16.9997ZM30.3334 16.9997C30.3334 19.6368 29.5514 22.2146 28.0863 24.4073C26.6212 26.5999 24.5388 28.3089 22.1025 29.3181C19.6661 30.3272 16.9853 30.5913 14.3988 30.0768C11.8124 29.5623 9.43665 28.2925 7.57195 26.4278C5.70725 24.5631 4.43737 22.1873 3.9229 19.6009C3.40843 17.0145 3.67248 14.3336 4.68165 11.8972C5.69082 9.46088 7.39978 7.3785 9.59244 5.91341C11.7851 4.44833 14.363 3.66634 17 3.66634C20.5363 3.66634 23.9276 5.0711 26.4281 7.57158C28.9286 10.0721 30.3334 13.4635 30.3334 16.9997Z" fill="black" />
            </svg>
        </button>
    );
}

function Slider() {
    return (
        <div className='w-full min-h-60'>
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
                <SlidePrevButton />
                <SlideNextButton />
            </Swiper>
        </div>
    )
}

export default Slider