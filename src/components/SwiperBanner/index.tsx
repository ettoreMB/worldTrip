import {Box} from '@chakra-ui/react'
import React, { useRef, useState } from "react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import { SwiperContent } from './SwiperContent';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface SwipperBannerProps {
  title: string;
  subtitle: string;
}

export function SwiperBanner() {


  return (
    <Box  w='100%' justify='center'>
      <Swiper  spaceBetween={10}
        centeredSlides={false} 
        autoplay={{
        "delay": 50000,
        "disableOnInteraction": false
        }} pagination={{
          "clickable": true
        }} navigation={true} className="mySwiper"
        slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true}
>

    <SwiperSlide>
      <SwiperContent childrenTitle='EUROPA' href='/' bg='assets/images/Itali.jpg'>
        Cidade da Comida Boa
      </SwiperContent>
    </SwiperSlide>

    <SwiperSlide>
      <SwiperContent childrenTitle='America Do Norte' href='/' bg='assets/images/Itali.jpg'>
        USA
      </SwiperContent>
    </SwiperSlide>

    <SwiperSlide>
      <SwiperContent childrenTitle='Oceania' href='/' bg='assets/images/Oceania.jpg'  >
        Oceania
      </SwiperContent>
    </SwiperSlide>

    <SwiperSlide>
      <SwiperContent childrenTitle='Asia' href='/' bg='assets/images/Asia.jpg'  >
        Paises Da asia
      </SwiperContent>
    </SwiperSlide>

    <SwiperSlide>
      <SwiperContent childrenTitle='Africa' href='/' bg='assets/images/Japan.jpg'  >
        Paises Da Africa
      </SwiperContent>
    </SwiperSlide>

  
  </Swiper>
    </Box>
  )
}

