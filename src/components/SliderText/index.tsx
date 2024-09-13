import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectCoverflow,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { IMAGES_URL } from '@/constants'
import arrow from 'imgs/arrow.png'
import { useMediaQuery } from 'react-responsive'

interface Slider {
  title: string
  text: string
  btnText: string
  carousel_images: {
    data: {
      attributes: {
        url: string
      }
    }[]
  }
}

interface CarouselProps {
  sliders: Slider[]
  mainTitle: string
  backGroundImage: { data: { attributes: { url: string } }[] }
}

const Carousel: React.FC<CarouselProps> = ({
  sliders,
  mainTitle,
  backGroundImage,
}) => {
  const [filteredSliders, setFilteredSliders] = useState<Slider[]>([])
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' })

  const backgroundImageUrl = isDesktopOrLaptop
    ? IMAGES_URL + backGroundImage.data[0].attributes.url
    : IMAGES_URL + backGroundImage.data[1].attributes.url

  function formatString(input: string) {
    return input.toLowerCase().replace(/\s+/g, '')
  }

  useEffect(() => {
    const filterSliders = async () => {
      const validSliders = await Promise.all(
        sliders.map(async (slider, index) => {
          const response = await fetch(`/service/${formatString(slider.title)}`)
          if (response.ok) {
            return slider
          } else {
            return null
          }
        })
      )
      setFilteredSliders(
        validSliders.filter((slider) => slider !== null) as Slider[]
      )
    }

    filterSliders()
  }, [sliders])

  const handleRedirect = async (title: string) => {
    const response = await fetch(`/service/${title}`)
    if (response.ok) {
      window.location.href = `/service/${title}`
    } else {
      console.error('Route does not exist')
    }
  }

  const calculateHeight = (title: string) => {
    const lineHeight = 1.2
    const baseFontSize = isDesktopOrLaptop ? 50 / 16 : 28 / 16 // Ajuste de tamaño de fuente basado en la plataforma
    const lines = Math.ceil(title.length / 20)
    return lineHeight * baseFontSize * lines + 'em'
  }

  return (
    <div className='overflow-hidden'>
      <div className='relative flex pl-[16px] items-center md:pl-[160px]'>
        <div
          className='w-[10px] bg-gradient-to-b from-azulGradiente to-verdeGradiente'
          style={{ height: calculateHeight(mainTitle) }}
        ></div>
        <h2 className='text-[28px] pl-4 font-bold uppercase md:text-[50px] text-white'>
          {mainTitle}
        </h2>
      </div>

      <div
        className='relative w-full min-h-screen mx-auto overflow-hidden'
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: isMobile ? 'contain' : 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Swiper
          effect='coverflow'
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          coverflowEffect={{
            rotate: 0,
            stretch: -550,
            depth: 800,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            nextEl: isDesktopOrLaptop ? '.swiper-button-next' : undefined,
            prevEl: isDesktopOrLaptop ? '.swiper-button-prev' : undefined,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
            bulletClass: 'swiper-pagination-custom-bullet',
            bulletActiveClass: 'swiper-pagination-custom-bullet-active',
          }}
          mousewheel={true}
          keyboard={false}
          modules={[
            Navigation,
            Pagination,
            Mousewheel,
            Keyboard,
            EffectCoverflow,
          ]}
          className='mySwiper'
          loop={false}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 200,
            },
          }}
          style={{ overflow: 'hidden' }}
        >
          {filteredSliders.map((slider, index) => (
            <SwiperSlide
              key={index}
              className={`bg-transparent w-[100%] ${
                index === 0 ? 'swiper-slide-first' : ''
              } ${
                index === filteredSliders.length - 1 ? 'swiper-slide-last' : ''
              }`}
            >
              <div className='flex flex-col items-center justify-center text-center space-y-4 md:mt-[163px] md:flex-row md:items-center md:space-y-0 md:space-x-8'>
                <div className='relative mt-[50px] flex-shrink-0 md:w-[379px] md:h-[379px]'>
                  <img
                    src={
                      IMAGES_URL + slider.carousel_images.data[0].attributes.url
                    }
                    alt={`Icon ${index + 1}`}
                    className='w-full h-full'
                  />
                  {slider.carousel_images.data[1] && (
                    <div className='absolute inset-0 flex justify-center items-center'>
                      <img
                        src={
                          IMAGES_URL +
                          slider.carousel_images.data[1].attributes.url
                        }
                        alt={`Overlay ${index + 1}`}
                        className='w-[90px] h-[91px] ml-[20px] md:w-[175px] md:h-[175px]'
                      />
                    </div>
                  )}
                </div>
                <div className='flex flex-col items-left text-left md:items-start md:text-left md:flex-1'>
                  <h2 className='text-[20px] mb-4 font-bold text-white md:text-[50px]'>
                    {slider.title}
                  </h2>
                  <p className='text-[16px] text-white md:text-[28px] md:max-w-[800px]'>
                    {slider.text}
                  </p>
                  <button
                    onClick={() => handleRedirect(formatString(slider.title))}
                    className='bg-white text-left mr-[60px] md:mr-[0px] text-[#0F7D87] w-[160px] md:w-[240px] mt-[32px] md:mt-[32px] font-bold text-[16px] md:text-[24px] px-4 py-2 rounded-full'
                  >
                    {slider.btnText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {isDesktopOrLaptop && (
          <>
            <div className='swiper-button-prev absolute bg-transparent left-[20px] md:left-[200px] md:ml-[200px]'>
              <img
                src={arrow.src}
                alt='Previous arrow'
                className='w-6 h-6 rotate-180 md:w-[48px] md:h-[48px]'
              />
            </div>
            <div className='swiper-button-next absolute right-[20px] md:right-[0px] md:mr-[200px]'>
              <img
                src={arrow.src}
                alt='Next arrow'
                className='w-6 h-6 md:w-[48px] md:h-[48px]'
              />
            </div>
          </>
        )}
        <div className='swiper-pagination-custom mt-4 flex justify-center mb-[120px] md:mb-[270px] absolute bottom-0 w-full'></div>
      </div>
    </div>
  )
}

export default Carousel
