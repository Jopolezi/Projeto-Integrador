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
`;

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  padding: 0 4%;

  background-color: ${colors.offwhite};
`;

export const ImgContainerRegister = styled.img`
  display: flex;
  width: 300px;
  height: 150px;
  object-fit: cover;
`;

export const TitleContainerRegister = styled.h1`
  
  font-size: 1.85rem;
  color: ${colors.black};
  
`;

const styledComponentsRegister = {
  Flex,
  ContainerRegister,
  ImgContainerRegister,
  TitleContainerRegister,
};

export default styledComponentsRegister;