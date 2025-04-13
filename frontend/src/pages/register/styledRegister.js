import styled from 'styled-components';

// This object contains fonts imported for register.css --
const fonts = {
  family: {
    poppins: "'Poppins', sans-serif",
    boldonse: "'Boldonse', sans-serif",
  }
};

// Colors used in the application --
const colors = {
  red: '#FF3030',
  darkred: '#CC0000',
  green: '#28D728',
  white: '#FFFFFF',
  offwhite: '#F7F7F7',
  dark: '#333333',
  gray: '#666666',
  black: '#010100',
};

// Breakpoints for responsive design --
const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
  width: 100%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20dvh;
  width: 100%;
  overflow: hidden;
  
  @media (max-width: ${breakpoints.sm}) {
    height: 15dvh;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  transform: scale(2);
  
  @media (max-width: ${breakpoints.xl}) {
    transform: scale(1.75);
  }
  
  @media (max-width: ${breakpoints.lg}) {
    transform: scale(1.5);
    max-width: 400px;
  }
  
  @media (max-width: ${breakpoints.md}) {
    transform: scale(1.25);
    max-width: 350px;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    transform: scale(1);
    max-width: 280px;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    transform: scale(0.9);
    max-width: 240px;
  }
`;

export const ContentRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80dvh;
  color: ${colors.white};
  z-index: 1;
  padding: 0 1rem;
  
  @media (max-width: ${breakpoints.sm}) {
    height: 85dvh;
    padding: 0 0.5rem;
  }
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  border: none;
  border-radius: 12px;

  -webkit-box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.65);
  -moz-box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.65);
  box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.65);
  
  @media (max-width: ${breakpoints.lg}) {
    max-width: 450px;
    padding: 1.75rem;
  }
  
  @media (max-width: ${breakpoints.md}) {
    max-width: 400px;
    padding: 1.5rem;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    max-width: 100%;
    padding: 2rem;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    padding: 1rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const FormTitle = styled.label`
  color: ${colors.dark};
  font-family: ${fonts.family.poppins};
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  
  @media (max-width: ${breakpoints.lg}) {
    font-size: 2.25rem;
  }
  
  @media (max-width: ${breakpoints.md}) {
    font-size: 2rem;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.75rem;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    font-size: 1.5rem;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.25rem;
  
  @media (max-width: ${breakpoints.sm}) {
    margin-bottom: 1rem;
  }
`;

export const InputLabel = styled.label`
  display: block;
  color: ${colors.dark};
  font-family: ${fonts.family.poppins};
  font-size: 0.875rem;
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.8rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-family: ${fonts.family.poppins};
  font-size: 1rem;
  transition: border-color 0.2s;
  box-sizing: border-box;
  height: 2.5rem;
  
  &:focus {
    outline: none;
    border-color: ${colors.red};
  }
  
  @media (max-width: ${breakpoints.md}) {
    padding: 0.7rem;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 0.65rem;
    font-size: 0.9rem;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  left: 0;
  top: 100%; /* Posiciona logo abaixo do input */
  color: ${colors.red};
  font-size: 0.75rem;
  font-family: ${fonts.family.poppins};
  margin-top: 0.25rem;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
  margin-top: 1.85rem;
  
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  padding: 12px;
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  font-family: ${fonts.family.poppins};
  background: ${colors.red};
  color: ${colors.white};
  cursor: pointer;
  transition: all 0.5s;
  
  @media (max-width: ${breakpoints.lg}) {
    width: 140px;
    padding: 11px;
  }
  
  @media (max-width: ${breakpoints.md}) {
    width: 130px;
    padding: 10px;
    font-size: 0.95rem;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    padding: 10px;
    font-size: 0.9rem;
    border-radius: 12px;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    padding: 9px;
    border-radius: 10px;
  }
`;

export const ButtonPrevious = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  padding: 12px;
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  font-family: ${fonts.family.poppins};
  background: ${colors.dark};
  color: ${colors.white};
  cursor: pointer;
  
  @media (max-width: ${breakpoints.lg}) {
    width: 140px;
    padding: 11px;
  }
  
  @media (max-width: ${breakpoints.md}) {
    width: 130px;
    padding: 10px;
    font-size: 0.95rem;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    padding: 10px;
    font-size: 0.9rem;
    border-radius: 12px;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    padding: 9px;
    border-radius: 10px;
  }
`;

export const LoginLink = styled.div`
  color: ${colors.dark};
  font-family: ${fonts.family.poppins};
  font-size: 0.875rem;
  margin-top: 1.5rem;
  text-align: center;
  
  a {
    color: ${colors.red};
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.8rem;
    margin-top: 1.25rem;
  }
`;

export const ContainerInformations = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: ${colors.dark};
  font-family: ${fonts.family.poppins};
  font-size: 0.75rem;
  font-weight: 500;
  
  @media (max-width: ${breakpoints.md}) {
    gap: 10px;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    gap: 5px;
    font-size: 0.7rem;
  }
`;

export const InformationLabel = styled.p`
  cursor: default;
  font-weight: 600;
`;

export const Informations = styled.div`
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const SuccessAlert = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 12px;
  padding: 20px;
  background-color: ${colors.green};
  color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  font-weight: 600;
  font-family: ${fonts.family.poppins};
  z-index: 100;
  animation: fadeIn 0.3s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ErrorAlert = styled.div` 
  position: absolute;
  top: 0;
  right: 0;
  margin: 12px;
  padding: 20px;
  background-color: ${colors.red};
  color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  font-weight: 600;
  font-family: ${fonts.family.poppins};
  z-index: 100;
  animation: fadeIn 0.3s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const styledComponentsRegister = {
  Flex,
  ContainerRegister, ContentRegister,
  Logo, LogoImage,
  FormRegister, FormContainer, FormTitle,
  InputContainer, InputLabel, Input, ErrorMessage,
  Button, ButtonContainer, ButtonPrevious,
  LoginLink,
  ContainerInformations, InformationLabel, Informations, 
  SuccessAlert, ErrorAlert,
};

export default styledComponentsRegister;