import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import styledComponentsRegister from './styledRegister'; 
import './register.css';
import '../../styles/cssGlobal.css';
import ScrollRevealComponent from '../../styles/scrollReveal';

const { // This component is used for the deconstruction of styled-components objects
  Flex,
  ContainerRegister,
  ImgContainerRegister,
  TitleContainerRegister,
} = styledComponentsRegister;

function Register() {
  
  useEffect(() => {
    document.title = "Cadastre-se | BoraBico";
  }, []);

  return (
    <>
     <ScrollRevealComponent />  {/* This component is used to add scroll reveal animations to the page */}

      <ContainerRegister>
        <Flex>
        <ImgContainerRegister src="/borabico_logo.png" alt="Logo" />
        </Flex> 

        <TitleContainerRegister>PEQUENOS TRABALHOS, GRANDES CONQUISTAS</TitleContainerRegister>
      </ContainerRegister>
    
    </>
  )
}

export default Register;