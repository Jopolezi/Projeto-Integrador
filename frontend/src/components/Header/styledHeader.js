import styled from 'styled-components';
import * as C from '../../styles/colors';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 4%;
  background-color: ${C.colors.red};
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  z-index: 999;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 2%;
  }
`;

export const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${C.colors.white};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: ${C.colors.white};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${C.colors.offwhite};
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginLink = styled(Link)`
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: ${C.colors.red};
  background-color: ${C.colors.white};
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    border: 2px solid ${C.colors.white};
    background-color: ${C.colors.red};
    color: ${C.colors.white};
  }
`;

export const RegisterLink = styled(Link)`
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: ${C.colors.white};
  background-color: transparent;
  border: 2px solid ${C.colors.white};
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  ${S.flexCenter};
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${C.colors.white};
    color: ${C.colors.red};
  }
`;
