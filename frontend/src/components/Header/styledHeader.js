import styled from 'styled-components';
<<<<<<< Updated upstream
import * as C from '../../styles/colors';
import * as S from '../../styles/styledComponents';
=======
>>>>>>> Stashed changes
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 3rem;
  background: linear-gradient(135deg, #FF3333 0%, #e62e2e 100%);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  cursor: pointer;
  letter-spacing: -0.5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const BaseButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 85px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.4rem;
    font-size: 0.9rem;
    min-width: 75px;
  }
`;

export const LoginLink = styled(BaseButton)`
  background: transparent;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.95);
    color: #FF3333;
    border-color: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  }
`;

export const RegisterLink = styled(BaseButton)`
  background: rgba(255, 255, 255, 0.95);
  color: #FF3333;
  border: 2px solid rgba(255, 255, 255, 0.8);
  font-weight: 700;
  
  &:hover {
    background: transparent;
    color: #ffffff;
    border-color: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;