import styled from 'styled-components';

export const CarrouselContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  position: relative;
  
  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-pagination {
    bottom: 40px;
    z-index: 10;
  }
  
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.4);
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    
    &:hover {
      transform: scale(1.2);
      background: rgba(255, 255, 255, 0.7);
    }
  }
  
  .swiper-pagination-bullet-active {
    background: #ffffff;
    transform: scale(1.2);
    border-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: #ffffff;
    width: 50px;
    height: 50px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      background: rgba(0, 0, 0, 0.6);
      transform: scale(1.1);
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    }
    
    &::after {
      font-size: 18px;
      font-weight: 600;
    }
  }
  
  @media (max-width: 768px) {
    height: calc(100vh - 70px);
    
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
    
    .swiper-pagination {
      bottom: 25px;
    }
    
    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
    }
  }
`;

export const CarrouselContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    z-index: 2;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 51, 51, 0.1) 0%,
      transparent 50%
    );
    z-index: 3;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 5;
  max-width: 650px;
  padding: 0 4rem;
  text-align: left;
  animation: slideInLeft 0.8s ease-out;
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @media (max-width: 768px) {
    padding: 0 2rem;
    max-width: 90%;
  }
`;

export const CarrouselContentTitle = styled.h1`
  font-size: clamp(2.5rem, 4.5vw, 3.8rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.8px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
  }
`;

export const CarrouselContentText = styled.p`
  font-size: clamp(1.1rem, 1.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.7;
  max-width: 520px;
  font-weight: 400;
  margin-bottom: 2.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const CarrouselContentImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: transform 8s ease-in-out;
  
  .swiper-slide-active & {
    transform: scale(1.05);
  }
`;

export const ActionButton = styled.button`
  background: linear-gradient(135deg, #FF3333 0%, #e62e2e 100%);
  color: #ffffff;
  border: none;
  padding: 1.2rem 3rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(255, 51, 51, 0.3);
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: linear-gradient(135deg, #e62e2e 0%, #cc2828 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 51, 51, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
    font-size: 1rem;
  }
`;