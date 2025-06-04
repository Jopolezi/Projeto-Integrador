import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import * as D from '../../styles/styledComponents'
import * as C from '../../styles/colors'
import * as S from '../../styles/styledComponents'
import '../../assets/fonts/fonts.css'

export const OpenEye = css`
    width: 30px;
    height: 30px;
    color: ${C.colors.gray};
    position: absolute;
    right: 0;
    padding: 12px;
    cursor: pointer;
`

export const Container = styled.div`
  ${S.flexCenter};
  flex-direction: column;
  height: 100dvh;
  width: 100%;
  background: ${C.colors.offwhite};
`;

export const Header = styled.header`
  width: 100%;
  max-width: 100%;
  padding: 10px 4%;
  height: 20px;

`;

export const ContainerLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const LogoText = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: ${C.colors.dark};
  margin: 0;
  pointer-events: none;
  user-select: none;
`;

export const Content = styled.div`
  ${S.flexCenter};
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding: 0 4%;
  gap: 10px;
  flex-grow: 1;
`;

export const Title = styled.h1`    
  align-self: flex-start;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  color: ${C.colors.darkGray};

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background: ${C.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const InputTitle = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: ${C.colors.dark};
  margin-bottom: 0.5rem;
`;

export const InputError = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  color: ${C.colors.red};
  margin-top: 0.25rem;
`;

export const MoreOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  @media ${S.device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const RememberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const RememberCheckbox = styled.input`
  ${S.flexCenter};
  width: 20px;
  height: 20px;
  accent-color: ${C.colors.red};

  @media ${S.device.mobile} {
    width: 25px;
    height: 25px;
  }
`;

export const RememberCheckboxText = styled.p`
  color: ${C.colors.gray};
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
`;

export const ForgotPassword = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: ${C.colors.red};
  text-decoration: underline;
`;

export const AndContainer = styled.div`
  display: flex; 
  align-items: center; 
  text-align: center; 
  margin: 1rem 0; 
  color: ${C.colors.gray}; 
  font-size: 0.85rem; 
  gap: 10px;
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 1.5px;
  background: ${C.colors.lightgray};
`;

export const AndText = styled.span`
  white-space: nowrap; 
`;

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const RegisterTitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  color: ${C.colors.dark};
  margin-bottom: 1rem;
`;

export const Register = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: ${C.colors.red};
  text-decoration: underline;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 80px;
  max-width: 100%;
  padding: 20px 4%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${C.colors.offwhite};
  color: ${C.colors.gray};

  @media ${S.device.tablet} {
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 15px;
  }
`;

export const FooterText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.75rem; 
  pointer-events: none;
  user-select: none;

`;

export const FooterLinks = styled.div`
  font-size: 0.75rem;
  display: flex;
  gap: 20px;

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

export const SucessAlert = styled.div`
position: absolute;
  top: 0;
  right: 0;
  margin: 12px;
  padding: 12px;
  background-color: ${C.colors.white};
  color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  z-index: 100;
`;

export const ErrorAlert = styled.div`
position: absolute;
  top: 0;
  right: 0;
  margin: 12px;
  padding: 12px;
  background-color: ${C.colors.red};
  color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  z-index: 100;
`;