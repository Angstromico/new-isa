import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import { useState } from 'react';
import { IMAGES_URL } from '@/constants';

const ImageCarousel = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full px-[16px] mx-auto overflow-hidden md:px-[160px] ">
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Thumbs]}
        className="mySwiper2 mt-0"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={IMAGES_URL + image.url}
              alt={`Image ${index + 1}`}
              className="h-[280px] w-[361px] mb-4 md:w-[1600px] md:h-[390px] object-cover md:mb-12 rounded-tr-[40px] rounded-bl-[40px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="mySwiper flex justify-start gap-x-4 w-full mb-4 mt-6"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="!w-auto flex items-center">
            <div
              className={`relative flex justify-center items-center ${activeIndex === index ? 'w-[80px] h-[85px] rounded-bl-[16px] rounded-tr-[16px] bg-gradient-to-r from-azulGradiente to-verdeGradiente md:rounded-bl-[40px] md:rounded-tr-[40px] md:w-[210px] md:h-[210px]' : 'p-2'}`}
            >
              <div className="w-[75x] h-[75px] md:w-[195px] md:h-[195px] bg-black rounded-bl-[calc(16px-2px)] rounded-tr-[calc(16px-2px)] md:rounded-bl-[calc(40px-2px)] md:rounded-tr-[calc(40px-2px)] flex justify-center items-center">
                <img
                  src={IMAGES_URL + image.url}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-[60px] h-[60px] md:w-[180px] md:h-[180px] object-cover ${activeIndex === index ? 'm-1' : ''} rounded-bl-[16px] rounded-tr-[16px] md:rounded-bl-[40px] md:rounded-tr-[40px]`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;




