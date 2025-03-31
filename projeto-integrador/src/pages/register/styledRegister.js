import styled from 'styled-components';
import { ContentRight } from '../login/styledLogin';

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

export const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerRegister = styled.div`
  display: flex;
  height: 100dvh;
  width: 100%;
  background: url('/trabalhadores.jpeg');
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

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100dvh;
  width: 40%;
  z-index: 1;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 4%;
  z-index: 1;
  color: ${colors.white};
`;

export const ContentLeftTitle = styled.h1`
  position: relative;
  font-size: 2rem;
  font-weight: 700;
  font-family: ${fonts.family.poppins};
  line-height: 3rem;
  position: relative;
  color: ${colors.white};

  &::before {
  content: "";
  position: absolute;
  width: 30%;
  height: 3.5px;
  bottom: 5px;
  left: 0;

  background: ${colors.red};
  }
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
width: 60%;
height: 100dvh;


&::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0.6) 25%, rgba(0, 0, 0, 0.3) 85%, rgba(255, 255, 255, 0) 100%);
  }
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  width: 100%;
  max-width: 70%;
  padding: 2rem;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
`;

export const ButtonViewRegister = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: ${colors.red};
  color: ${colors.white};
  font-family: ${fonts.family.poppins};
  font-size: 0.850rem;
  font-weight: 600;
  transition: all 0.5s;

  &:hover{
  background: none;
  border: 2px solid ${colors.red};
  color: ${colors.red}
  }
`;

export const TitleEnterpriseRegister = styled.h1`
  position: relative;
  display: flex;
  align-items: center;
  font-size 1rem;
  font-weight: 600;
  font-family: ${fonts.family.poppins};
  color: ${colors.dark};
  cursor: default;

  &::before {
  content: "";
  position: absolute;
  width: 50%;
  height: 3.5px;
  bottom: 5px;
  left: 0;

  background: ${colors.red};
  }
`;

export const InputsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: space-between; 
  width: 100%;
  margin-top: 1rem;
`;


export const InputContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  flex-direction: column;
`;

export const InputLabel = styled.label`
  display: flex;
  align-items: center;
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

export const InputDateType = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-family: ${fonts.family.poppins};
  font-size: 1rem;
  transition: border-color 0.2s;
  color: ${colors.gray};
  
  &:focus {
    outline: none;
    border-color: ${colors.red};
  }

  &::-webkit-datetime-edit-placeholder {
    color: #999;
    font-style: italic;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-family: ${fonts.family.poppins};
  font-size: 1rem;
  transition: border-color 0.2s;
  color: ${colors.gray};

  &:focus {
    outline: none;
    border-color ${colors.red};
  `;

  export const Option = styled.option`
  color: ${colors.gray};
  `;

  export const SubmitButton = styled.button`
  display: flex;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: ${colors.red};
  color: ${colors.white};
  font-size: 1rem;
  font-family: ${fonts.family.poppins};
  font-weight: 800px;
  transition: all 0.5s;

  &:hover{
  background: none;
  border: 2px solid ${colors.red};
  color: ${colors.red};
  }
  `;

  export const LoginButton = styled.div`
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
  ContainerRegister,
  ContainerLeft,
  ContainerRight,
  ContentLeft,
  ContentRight,
  ContentLeftTitle,
  ContentLeftSpanTitle,
  ContentLeftSubtitle,
  FormRegister,
  ButtonViewRegister,
  TitleEnterpriseRegister,
  InputsGrid,
  InputContainer,
  InputLabel,
  Input,
  InputDateType,
  Select,
  Option,
  SubmitButton,
  LoginButton,
  Flex
};

export default styledComponentsRegister;