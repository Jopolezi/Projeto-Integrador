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
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.4);
    opacity: 1;
    margin: 0 4px;
  }
  
  .swiper-pagination-bullet-active {
    background: #ffffff;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: #ffffff;
  }
  
  @media (max-width: 768px) {
    height: calc(100vh - 70px);
    
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
    
    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
    }
  }
`;

export const CarrouselContent = styled.div`
  display: flex;
  align-items: center;
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
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const ContentWrapper = styled.div`
  z-index: 5;
  max-width: 600px;
  padding: 0 4rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const CarrouselContentTitle = styled.h1`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
`;

export const CarrouselContentText = styled.p`
  font-size: clamp(1.1rem, 1.4vw, 1.3rem);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

export const CarrouselContentImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
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
  transition: all 0.3s ease;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(255, 51, 51, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #e62e2e 0%, #cc2828 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 51, 51, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
    font-size: 1rem;
  }
`;