import styled from 'styled-components'
import * as C from "../../styles/colors"
import * as S from "../../styles/styledComponents"

export const Title = styled.h1`
font-size: 42px;
font-weight: 600;
font-family: "Poppins", sans-serif;
color: ${C.colors.dark};
`;

export const Container = styled.div`
${S.flexCenter};
width: 100%;
`;

export const Content = styled.div`
${S.flexCenter};
flex-direction: column;
padding: 0 4%;
width: 100%;
height: 100%;
`;

export const Text = styled.p`
${S.flexCenter};
font-size: 18px;
font-family: "Poppins", sans-serif;
text-align: justify;
width: 85%;
color: #000;
`;

export const OrdenedList = styled.ul`
display: flex;
flex-direction: column;
width: 70%;
text-align: justify;
color: ${C.colors.dark};
font-size: 18px;
`;

export const ListItem = styled.li`

`;