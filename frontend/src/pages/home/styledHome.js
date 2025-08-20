import styled from 'styled-components';
import * as C from '../../styles/colors';
import * as S from '../../styles/styledComponents';
import { Link } from 'react-router-dom';

export const Main = styled.main`
${S.flexCenter};
width: 100%;
padding: 12px 4%;
background: ${C.colors.white};
color: ${C.colors.dark};

@media ${S.device.laptop} {
  padding: 12px 6%;
}

@media ${S.device.tablet} {
  flex-direction: column;
  padding: 20px 5%;
}

@media ${S.device.mobile} {
  padding: 16px 4%;
}
`

export const MainLeftContent = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 50%;
height: 100%;

@media ${S.device.laptop} {
  width: 55%;
}

@media ${S.device.tablet} {
  width: 100%;
  text-align: center;
}

@media ${S.device.mobile} {
  width: 100%;
}
`

export const Textbox = styled.div`
${S.flexCenter};
flex-direction: column;
margin-bottom: 1rem;

@media ${S.device.mobile} {
  margin-bottom: 1.5rem;
}
`

export const Title = styled.h1`
color: ${C.colors.dark};
font-size: 3rem;
font-family: "Poppins", sans-serif;
font-feature-settings: "kern" 1;
text-align: left;
line-height: 1.2;

@media ${S.device.laptop} {
  font-size: 2.8rem;
}

@media ${S.device.tablet} {
  font-size: 2.2rem;
  text-align: center;
}

@media ${S.device.mobile} {
  font-size: 1.8rem;
  text-align: center;
}
`

export const CTAButton = styled(Link)`
${S.flexCenter};
width: 250px;
height: 50px;
padding: 10px;
border: 2.5px solid ${C.colors.red};
color: ${C.colors.red};
font-family: "Poppins", sans-serif;
font-weight: 600;
text-decoration: none;
cursor: pointer;
border-radius: 24px;
transition: background 0.5s ease, color 0.5s ease;

&:hover {
  background: ${C.colors.red};
  color: ${C.colors.white};
}

@media ${S.device.tablet} {
  width: 220px;
  height: 48px;
  font-size: 0.95rem;
  margin: 0 auto;
}

@media ${S.device.mobile} {
  width: 200px;
  height: 45px;
  font-size: 0.9rem;
}
`

export const MainRightContent = styled.div`
${S.flexCenter};
width: 50%;
height: 100%;

@media ${S.device.laptop} {
  width: 45%;
}

@media ${S.device.tablet} {
  width: 100%;
  margin-bottom: 2rem;
}

@media ${S.device.mobile} {
  width: 100%;
  margin-bottom: 1.5rem;
}
`

export const ContainerMainImage = styled.div`
${S.flexCenter};
width: 100%; 
max-width: 600px;
height: auto;

@media ${S.device.laptop} {
  max-width: 500px;
}

@media ${S.device.tablet} {
  max-width: 400px;
}

@media ${S.device.mobile} {
  max-width: 320px;
}
`

export const MainImage = styled.img`
width: 100%;
height: auto;
max-height: 80vh;
object-fit: cover;
border-radius: 8px;

@media ${S.device.tablet} {
  max-height: 60vh;
  border-radius: 12px;
}

@media ${S.device.mobile} {
  max-height: 50vh;
  border-radius: 8px;
}
`

export const Section = styled.section`
${S.flexCenter};
width: 100%;
padding: 60px 4%;
background: ${C.colors.white};
color: ${C.colors.dark};

@media ${S.device.laptop} {
  padding: 60px 6%;
}

@media ${S.device.tablet} {
  flex-direction: column;
  padding: 40px 5%;
}

@media ${S.device.mobile} {
  padding: 30px 4%;
}
`

export const HomeOffice = styled(Section)`
background: ${C.colors.white};
`

export const SelfEmployed = styled(Section)`
background: #FF3030;
background: linear-gradient(90deg, rgba(255, 48, 48, 1) 0%, rgba(204, 0, 0, 1) 100%);
`

export const WorkQuality = styled(Section)`
background: ${C.colors.white};
padding-bottom: 0;
`

export const SectionLeftContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex: 1;
height: 100%;

@media ${S.device.tablet} {
  width: 100%;
  order: 2;
  text-align: center;
}

@media ${S.device.mobile} {
  width: 100%;
  order: 2;
}
`

export const SectionRightContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex: 1;
height: 100%;

@media ${S.device.tablet} {
  width: 100%;
  order: 1;
  margin-bottom: 2rem;
}

@media ${S.device.mobile} {
  width: 100%;
  order: 1;
  margin-bottom: 1.5rem;
}
`

export const SectionTitle = styled.h2`
color: ${C.colors.dark};
font-size: 2.5rem;
font-family: "Poppins", sans-serif;
font-weight: 600;
text-align: center;
margin-bottom: 1.5rem;
line-height: 1.2;

@media ${S.device.laptop} {
  font-size: 2.3rem;
}

@media ${S.device.tablet} {
  font-size: 2rem;
  text-align: center;
}

@media ${S.device.mobile} {
  font-size: 1.7rem;
  margin-bottom: 1rem;
}
`

export const TitleHO = styled(SectionTitle)`
color: ${C.colors.white};
`

export const TitleSE = styled(SectionTitle)`
color: ${C.colors.white};
`

export const TitleWQ = styled(SectionTitle)`
color: ${C.colors.red};
`

export const SectionDescription = styled.p`
color: ${C.colors.dark};
font-size: 1.2rem;
font-family: "Poppins", sans-serif;
font-weight: 400;
text-align: center;
line-height: 1.6;
max-width: 500px;
opacity: 0.8;

@media ${S.device.laptop} {
  font-size: 1.15rem;
  max-width: 450px;
}

@media ${S.device.tablet} {
  font-size: 1.1rem;
  max-width: 100%;
}

@media ${S.device.mobile} {
  font-size: 1rem;
  max-width: 100%;
  line-height: 1.5;
}
`

export const DescriptionHO = styled(SectionDescription)`
color: ${C.colors.white};
opacity: 0.9;
`

export const DescriptionSE = styled(SectionDescription)`
color: ${C.colors.white};
opacity: 0.9;
`

export const DescriptionWQ = styled(SectionDescription)`
color: ${C.colors.dark};
opacity: 0.9;
`

export const ContainerSectionImage = styled.div`
${S.flexCenter};
width: 100%; 
max-width: 500px;
height: auto;
position: relative;

@media ${S.device.laptop} {
  max-width: 450px;
}

@media ${S.device.tablet} {
  max-width: 400px;
}

@media ${S.device.mobile} {
  max-width: 300px;
}
`

export const Shape = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%; 
height: 100%;
clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
background: #FF3030;
background: linear-gradient(90deg,rgba(255, 48, 48, 1) 0%, rgba(204, 0, 0, 1) 100%);
z-index: 1;

@media ${S.device.mobile} {
  clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
}
`

export const SectionImage = styled.img`
width: 100%;
height: auto;
max-height: 500px;
object-fit: contain;
border-radius: 12px;
position: relative;
z-index: 2;

@media ${S.device.laptop} {
  max-height: 450px;
}

@media ${S.device.tablet} {
  max-height: 400px;
  border-radius: 10px;
}

@media ${S.device.mobile} {
  max-height: 300px;
  border-radius: 8px;
}
`