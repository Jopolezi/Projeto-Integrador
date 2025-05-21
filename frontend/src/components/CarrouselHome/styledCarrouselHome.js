import styled, { css } from 'styled-components';
import '../../assets/fonts/fonts.css';
import * as C from '../../styles/colors';
import * as S from '../../styles/styledComponents';


export const CarrouselContainer = styled.div`
  ${S.flexCenter};
  width: 100%;
  height: 100dvh;
  background-color: ${C.colors.offwhite};
  font-family: 'Poppins', sans-serif;
  position: relative;

  .swiper-pagination {
    margin: 0 10px;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: ${C.colors.white}; 
    opacity: 0.25;
    transition: all 0.3s ease;
    border-radius: 50%;
  }

  .swiper-pagination-bullet-active {
    background: ${C.colors.red}; 
    opacity: 1;
    transform: scale(1.35);
  }
`;

export const CarrouselContent = styled.div`
  ${S.flexCenter};
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 4%;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.9) 35%, rgba(0, 0, 0, 0.6) 85%, rgba(0, 0, 0, 0.3) 100%);
  }
`;

export const CarrouselContentTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: ${C.colors.white};
  text-align: center;
  z-index: 1;
`;

export const CarrouselContentText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: justify;
  text-align-last: center;
  color: ${C.colors.white};
  line-height: 1.6;
  max-width: 800px;
  z-index: 1;

`;

export const CarrouselContentImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
