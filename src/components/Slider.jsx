import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper';

export const Slider = () => {
  return (
    <>
      <Swiper
        autoHeight={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="sliderContainer">
            <div className="slider-contents">
              <div className="sliderGraphic">
                <img src="../png/slider.png" alt="" />
              </div>
              <h1 className="sliderText">LOREM IPSUM DOLOR SIT</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderContainer">
            <div className="slider-contents">
              <div className="sliderGraphic">
                <img src="../png/slider.png" alt="" />
              </div>
              <h1 className="sliderText">LOREM IPSUM DOLOR SIT</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderContainer">
            <div className="slider-contents">
              <div className="sliderGraphic">
                <img src="../png/slider.png" alt="" />
              </div>
              <h1 className="sliderText">LOREM IPSUM DOLOR SIT</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
