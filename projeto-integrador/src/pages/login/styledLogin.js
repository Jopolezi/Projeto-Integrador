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
};

export const ContainerLogin = styled.div`
  display: flex;
  height: 100dvh;
  width: 100%;
`;

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100dvh;
  width: 60%;
  background: url('/trabalhadores.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 25%, rgba(0, 0, 0, 0.3) 85%, rgba(255, 255, 255, 0) 100%);
  }

`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 4%;
  z-index: 1;
  color: ${colors.white};
`;

export const ContentLeftTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  font-family: ${fonts.family.poppins};
  line-height: 3rem;
  `;

export const ContentLeftSpanTitle = styled.span`
  color: ${colors.red};
  
`;

export const ContentLeftSubtitle = styled.p`
  
  font-size: 1rem;
  font-weight: 400;
  font-family: ${fonts.family.poppins};
  text-align: justify;
  color: ${colors.offwhite};
  `;

export const ContainerRight = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 40%;
height: 100dvh;
background: ${colors.offwhite};
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${colors.white};
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
`;

export const FormTitle = styled.h2`
  color: ${colors.dark};
  font-family: ${fonts.family.poppins};
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  text-align: center;
  text-transform: uppercase;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.25rem;
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 0;
  top: -20px;
  color: ${colors.gray};
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

export const SubmitButton = styled.button`
  width: 100%;
  background: ${colors.red};
  color: white;
  font-family: ${fonts.family.poppins};
  font-weight: 600;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: ${colors.darkred};
  }
`;

export const ForgotPassword = styled.a`
  color: ${colors.red};
  font-family: ${fonts.family.poppins};
  font-size: 0.875rem;
  text-decoration: none;
  margin-top: 1rem;
  align-self: flex-end;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const RegisterLink = styled.div`
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

export const MoreInformations = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${colors.white};
  font-family: ${fonts.family.poppins};
  font-size: 1rem;
  position: absolute;
  padding: 12px;
  bottom: 0;   
  z-index: 1;
   
`
export const PrivacityPolitice = styled.a`
&:hover {
      text-decoration: underline;
    }
`

export const Divider = styled.hr`
display: flex;
justify-content: center;
align-items: center;
width: 5px;
height: 5px;
border-radius: 50%;
border: 2px solid ${colors.white};
`

export const TermsAndConditions = styled.a`
&:hover {
      text-decoration: underline;
    }
`

export default {
  ContainerLogin,
  ContainerLeft,
  ContentLeft,
  ContentLeftTitle,
  ContentLeftSpanTitle,
  ContentLeftSubtitle,
  ContainerRight,
  ContentRight,
  FormLogin,
  FormTitle,
  InputContainer,
  InputLabel,
  Input,
  SubmitButton,
  ForgotPassword,
  RegisterLink,
  MoreInformations,
  Divider,
  PrivacityPolitice,
  TermsAndConditions
};


