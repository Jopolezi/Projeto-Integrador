// Importing React and necessary hooks for managing state and side effects --
import React, { useState, useEffect } from 'react';
// Importing Link from react-router-dom for navigation --
import { Link } from 'react-router-dom';
// Importing styles for styling the login page --
import styledComponentsLogin from './styledLogin';
import './login.css'
import '../../styles/cssGlobal.css'
// Importing ScrollRevealComponent for scroll animations --
import ScrollRevealComponent from '../../styles/scrollReveal';
// Import FontAwesome icons --
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { // This component is used for the deconstruction of styled-components objects --
  ContainerLogin, ContentLogin, Logo, LogoImage,
  FormLogin, FormTitle,
  InputContainer, InputLabel,
  Input, InputCheck, InputCheckLabel,
  SubmitAdditional, SubmitCheck, SubmitButton,
  ForgotPassword,
  RegisterLink,
  ContainerInformations, Informations, InformationLabel,
  Flex
} = styledComponentsLogin;

function Login() {

  useEffect(() => { // This effect is used to update the title of the page when the component is mounted
    document.title = "Login | BoraBico";
  }, []);

  const [showPassword, setShowPassword] = useState(false); // This state is used to control the visibility of the password input field

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <ScrollRevealComponent /> {/* This component is used to add scroll reveal animations to the page */}

      <ContainerLogin>

        <Logo className="revealFade">
          <LogoImage src="/borabico_logo.png" alt="Logo" />
        </Logo>

        <ContentLogin className="revealFade">

          <FormLogin>

            <FormTitle>Acesse sua conta</FormTitle>
            <InputContainer>
              <InputLabel>E-mail, CPF ou CNPJ</InputLabel>
              <Input type="email" placeholder="Digite seu e-mail, CPF ou CNPJ" />
            </InputContainer>
            <InputContainer>
              <InputLabel>Senha</InputLabel>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="openEye"
                onClick={togglePasswordVisibility}
              />
            </InputContainer>

            <SubmitAdditional>
              <SubmitCheck>
                <InputCheck type="checkbox" />
                <InputCheckLabel>Lembrar-me</InputCheckLabel>
              </SubmitCheck>
              <ForgotPassword href="#">Esqueceu a senha?</ForgotPassword>
            </SubmitAdditional>

            <SubmitButton type="submit">Entrar</SubmitButton>

            <RegisterLink>
              Não tem uma conta? <Link to="/register">Cadastre-se</Link>
            </RegisterLink>
          </FormLogin>

          <ContainerInformations className="reveal-fade">
            <Flex>
              <img src="/borabico_logo.png" width="50px" height="50px" />
              <InformationLabel>© Copyright 2025</InformationLabel>
            </Flex>
            <Informations> <Link to="/register">Política de Privacidade</Link> </Informations>
            <Informations> <Link to="/register">Termos e Condições</Link> </Informations>
            <Informations> <Link to="/register">Política de Cookies</Link> </Informations>

          </ContainerInformations>

        </ContentLogin>
      </ContainerLogin>
    </>
  );
}

export default Login;