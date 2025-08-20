import styled from 'styled-components';
import * as C from '../../styles/colors';
import * as S from '../../styles/styledComponents';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  width: 100%;
  height: 80px;
  background: none;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 600;
  
  @media ${S.device.mobile} {
    padding: 0;
  }
`;

export const Logo = styled.div`
  position: relative;
  ${S.flexCenter};
`;

export const Image = styled.img`
  object-fit: cover;
  width: 60px;
  height: auto;

  @media ${S.device.mobile} {
    width: 80px;
  }
`;

export const Slogan = styled.h1`
  font-size: 18px;
  font-weight: 400;

  @media ${S.device.tablet} {
    display: none;
  }
`;

export const Span = styled.span`
  color: ${C.colors.red};
`;

export const Buttons = styled.div`
  ${S.flexCenter};
  gap: 10px;

  @media ${S.device.mobile} {
    width: 100%;
  }
`;

export const Login = styled(Link)`
  ${S.flexCenter};
  padding: 10px;
  width: 100px;
  height: 50px;
  background: ${C.colors.red};
  color: ${C.colors.white};
  cursor: pointer;
  border-radius: 24px;
  transition: background 0.5s ease;
  text-decoration: none;


  &:hover {
    background: ${C.colors.darkred};
  }

  @media ${S.device.mobile} {
    padding: 0;
    max-width: 100px;
  }
`;

export const Register = styled(Link)`
  ${S.flexCenter};
  padding: 10px;
  height: 50px;
  color: ${C.colors.dark};
  cursor: pointer;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.5s ease;
  white-space: nowrap; 
  text-decoration: none;


  &:hover {
    background: ${C.colors.lightgray};
  }

  @media ${S.device.mobile} {
    width: 100%;
    max-width: 150px;
    justify-content: center;
    font-size: 14px;
    white-space: nowrap; 
  }
`;