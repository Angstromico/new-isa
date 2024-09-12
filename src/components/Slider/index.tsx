import { Swiper, SwiperSlide } from 'swiper/react';
import { IMAGES_URL } from '@/constants';

import 'swiper/css';
import 'swiper/css/pagination';


interface Image {
    attributes: {
        url: string;
    };
}

interface CarouselProps {
    images: Image[];
    imagesMobile: Image[];
}

import { Pagination } from 'swiper/modules';

export default function Slider({ images, imagesMobile } : CarouselProps) {    
  return (
    <>
        <div className='hidden md:block lg:mt-16'>
        <Swiper 
            pagination={{
                clickable: true,
                el: '.swiper-pagination-desktop',
                bulletClass: 'swiper-pagination-custom-bullet',
                bulletActiveClass: 'swiper-pagination-custom-bullet-active',
            }}
            modules={[Pagination]} >
            {images.map((image, index) => (
            <SwiperSlide key={index}>
                <img src={IMAGES_URL + image.attributes.url} alt={`Image ${index + 1}`} />
            </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-pagination-desktop swiper-pagination-custom flex justify-center"></div>

        </div>
        <div className=' mt-20 md:hidden'>
            <Swiper 
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-mobile',
                    bulletClass: 'swiper-pagination-custom-bullet',
                    bulletActiveClass: 'swiper-pagination-custom-bullet-active',
                }}            
            modules={[Pagination]} >
                {imagesMobile.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={IMAGES_URL + image.attributes.url} alt={`Image ${index + 1}`} />
                </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination-mobile swiper-pagination-custom flex justify-center"></div>
        </div>
    </>  
  );
}
