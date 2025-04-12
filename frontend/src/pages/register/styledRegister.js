import styled from 'styled-components';

const fonts = {
  family: {
    poppins: "'Poppins', sans-serif",
    boldonse: "'Boldonse', sans-serif",
  }

};

const colors = {
  red: '#FF3030',
  darkred: '#CC0000',
  white: '#FFFFFF',
  offwhite: '#F7F7F7',
  dark: '#333333',
  gray: '#666666',
  black: '#010100',
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
`;

export const LogoImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  transform: scale(2);
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
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.label`
  color: ${colors.dark};
  font-family: ${fonts.family.poppins};
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.25rem;
`;

export const InputLabel = styled.label`
  color: ${colors.dark};
  font-family: ${fonts.family.poppins};
  font-size: 0.875rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-family: ${fonts.family.poppins};
  font-size: 1rem;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${colors.red};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
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
  font-weigth: 600;
  font-family: ${fonts.family.poppins};
  background: ${colors.red};
  color: ${colors.white};
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
  background: ${colors.darkred}
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
  font-weigth: 600;
  font-family: ${fonts.family.poppins};
  background: ${colors.dark};
  color: ${colors.white};
  cursor: pointer;

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
`;

const styledComponentsRegister = {
  Flex,
  ContainerRegister, ContentRegister,
  Logo, LogoImage,
  FormRegister, FormContainer, FormTitle,
  InputContainer, InputLabel, Input,
  Button, ButtonContainer, ButtonPrevious,
  LoginLink
};

export default styledComponentsRegister;