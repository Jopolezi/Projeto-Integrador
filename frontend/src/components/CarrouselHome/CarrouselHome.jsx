import React, { useState, useEffect } from 'react'
import * as S from './styledCarrouselHome';
import dataCarrouselHome from '../../data/CarrouselHome'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function CarrouselHome() {
  
  return(
    <>
    <S.CarrouselContainer>
      <Swiper modules={[Mousewheel, Pagination, Navigation]}     
        direction='vertical'
        parallax={true}
        pagination={{ clickable: true }} 
        mousewheel={true}
        style={{ width: "100%", height: "100%" }}
      >
        {dataCarrouselHome.map((item) => (
          <SwiperSlide key={item.id}>
            <S.CarrouselContent>
              <S.CarrouselContentImage src={item.image} alt={item.title} data-swiper-parallax="-100"/>
              <S.CarrouselContentTitle data-swiper-parallax="-200">{item.title}</S.CarrouselContentTitle>
              <S.CarrouselContentText data-swiper-parallax="-200">{item.description}</S.CarrouselContentText>
          </S.CarrouselContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.CarrouselContainer>
    </>
  )
}

export default CarrouselHome