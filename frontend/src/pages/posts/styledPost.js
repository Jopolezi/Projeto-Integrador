import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import * as C from '../../styles/colors';
import * as S from '../../styles/styledComponents';
import '../../assets/fonts/fonts.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  background: ${C.colors?.offwhite || '#F9FAFB'};
  overflow: hidden; 
`;

export const Header = styled.header`
  width: 100%;
  max-width: 100%;
  padding: 0 4%;
  background: ${C.colors?.offwhite || '#F9FAFB'};
  flex-shrink: 0; 
  
  @media ${S.device.mobile} {
    padding: 4px 4%;
  }
`;

export const ContainerLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${C.colors?.dark || '#1F2937'};
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  
  @media ${S.device.mobile} {
    width: 56px;
    height: 56px;
  }
`;

export const LogoText = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  color: ${C.colors.dark};
  margin: 0;
  pointer-events: none;
  user-select: none;
  
  @media ${S.device.mobile} {
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  ${S.flexCenter};
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding: 0 4%;
  flex: 1; 
  min-height: 0;   
  justify-content: flex-start;
  overflow-y: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const Title = styled.h1`    
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.8rem;
  color: ${C.colors.darkGray};
  margin: 0 0 0.5rem 0;
  
  @media ${S.device.tablet} {
    font-size: 1.6rem;
  }
  
  @media ${S.device.mobile} {
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  background: ${C.colors.white};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  gap: 0.75rem; 

  @media ${S.device.tablet} {
    padding: 1.25rem;
    max-width: 90%;
  }
  
  @media ${S.device.mobile} {
    padding: 1rem;
    gap: 0.5rem;
  }
`;



export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  @media ${S.device.mobile} {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputTitle = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  color: ${C.colors.dark};
  margin-bottom: 0.25rem;
  
  @media ${S.device.mobile} {
    font-size: 1rem;
  }
`;

export const InputError = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  color: ${C.colors.red};
  margin: 0.1rem 0 0 0;
  
  @media ${S.device.mobile} {
    font-size: 0.7rem;
  }
`;

export const RememberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 0.5rem;
`;

export const RememberCheckbox = styled.input`
  ${S.flexCenter};
  width: 18px;
  height: 18px;
  accent-color: ${C.colors.red};

  @media ${S.device.mobile} {
    width: 20px;
    height: 20px;
  }
`;

export const RememberCheckboxText = styled.p`
  color: ${C.colors.gray};
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  margin: 0;
  
  @media ${S.device.mobile} {
    font-size: 0.8rem;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  min-height: 40px;
  max-width: 100%;
  padding: 8px 4%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${C.colors.offwhite};
  color: ${C.colors.gray};
  flex-shrink: 0; 
  
  @media ${S.device.tablet} {
    flex-direction: column;
    gap: 4px;
    text-align: center;
    padding: 6px 4%;
    min-height: 35px;
  }
  
  @media ${S.device.mobile} {
    padding: 4px 4%;
    min-height: 30px;
  }
`;

export const FooterText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.65rem; 
  pointer-events: none;
  user-select: none;
  margin: 0;
  
  @media ${S.device.mobile} {
    font-size: 0.6rem;
  }
`;

export const FooterLinks = styled.div`
  font-size: 0.65rem;
  display: flex;
  gap: 12px;

  @media ${S.device.mobile} {
    gap: 8px;
    font-size: 0.6rem;
  }

  a {
    color: ${C.colors.gray};
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    transition: color 0.55s ease;

    &:hover {
      color: ${C.colors.dark};
    }
  }
`;