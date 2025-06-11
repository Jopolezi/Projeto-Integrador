import React, { useState } from 'react';
import * as S from './styledCarrouselHome';
import dataCarrouselHome from '../../data/CarrouselHome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function CarrouselHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleVerMaisClick = () => {
    navigate('/register');
  };

  return (
    <S.CarrouselContainer>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          clickable: true
        }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        style={{ width: "100%", height: "100%" }}
      >
        {dataCarrouselHome.map((item, index) => (
          <SwiperSlide key={item.id}>
            <S.CarrouselContent>
              <S.CarrouselContentImage
                src={item.image}
                alt={item.title}
              />
              
              <S.ContentWrapper>
                <S.CarrouselContentTitle>
                  {item.title}
                </S.CarrouselContentTitle>
                
                <S.CarrouselContentText>
                  {item.description}
                </S.CarrouselContentText>
                
                <S.ActionButton onClick={handleVerMaisClick}>
                 Cadastre-se
                </S.ActionButton>
              </S.ContentWrapper>
            </S.CarrouselContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.CarrouselContainer>
  );
}

export default CarrouselHome;