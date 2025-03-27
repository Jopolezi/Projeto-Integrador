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
  width: 50%;
  z-index: 1;
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
  font-size: 3rem;
  font-weight: 700;
  font-family: ${fonts.family.poppins};
  line-height: 3rem;
  position: relative;
  color: black;
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
width: 70%;
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
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 90%;
  height: 600px;
  padding: 4rem 2rem;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
`;

export const ButtonViewRegister = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
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
  display: flex;
  position: absolute;
  top: 10px;
  left: 10px;
  align-items: center;
  justify-content: center;
  font-size 1rem;
  font-weight: 600;
  font-family: ${fonts.family.poppins};
  color: ${colors.dark};

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

export const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  width: 100%;
  margin-top: 1rem;
`;


export const InputContainer = styled.div`
  width: calc(50% - 8px);
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
  InputsWrapper,
  InputContainer,
  InputLabel,
  Input,
  InputDateType,
  Select,
  Option
};

export default styledComponentsRegister;