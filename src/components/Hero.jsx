import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Slide from './Slide';

const Hero = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sliderContent = [
    {
      title: "Kickstart your day with our morning favorites",
      subTitle: "Fresh flavors to fuel every sunrise",
      description: "Fuel your day with quick, healthy, and delicious breakfast recipes made for every kind of morning.",
      bgImage: "./image/r-banner-1.jpg",
      category: "Brackfast"
    },
    {
      title: "Power up your afternoon with tasty bites",
      subTitle: "Fresh flavors to fuel every sunrise",
      description: "Fuel your day with quick, healthy, and delicious breakfast recipes made for every kind of morning.",
      bgImage: "./image/r-banner-2.jpg",
      category: "Lunch"
    },
    {
      title: "End your day with flavor-packed dinners",
      subTitle: "Fresh flavors to fuel every sunrise",
      description: "Fuel your day with quick, healthy, and delicious breakfast recipes made for every kind of morning.",
      bgImage: "./image/r-banner-3.jpg",
      category: "Dinner"
    }
  ]


  return (
    <div className='relative'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          sliderContent.map(content => (
            <SwiperSlide>
              <Slide content={content} ></Slide>
            </SwiperSlide>
          ))
        }

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        autoplay={true}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-[400px] mx-auto !absolute bottom-0 translate-[-50%] left-[50%]"
      >
        {
          sliderContent.map(content => (
            <SwiperSlide className='flex justify-content-center'>
              <div className='themb-box px-4 py-5 bg-white rounded-lg flex flex-col items-center w-40 '>
                <img className='w-20 h-20 rounded-full outline outline-main-dark outline-offset-4 object-cover' src={content.bgImage} alt="" />
                <div className='themb-category px-5 py-1 bg-main-light text-white text-[14px] rounded-[50px] mt-4'>{content.category}</div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default Hero;