import styled, { css } from "styled-components";
import * as C from '../../styles/colors'
import * as S from '../../styles/styledComponents'
import '../../assets/fonts/fonts.css'
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/button";

export const RegisterButton = styled(Button)`
background: ${props => props.disabled ? C.colors.gray : C.colors.red} !important;

&:hover {
 background: ${props => props.disabled ? C.colors.gray : C.colors.darkRed} !important;
}
`;

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
  max-width: 800px;
  background: ${C.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const FieldsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 45%; 
  min-width: 300px; 
`;

export const InputTitle = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: ${C.colors.dark};
  margin-bottom: 0.15rem;

  span {
  color: ${C.colors.red};
  }
`;