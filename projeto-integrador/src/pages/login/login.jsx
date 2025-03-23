import React, { useState } from 'react';
import styledComponentsLogin from './styledLogin'; 
import './login.css'
import ScrollRevealComponent from '../../styles/scrollReveal';

const { // Importando estilizações do arquivo StyledLogin.js
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
  SubmitAdditional,
  InputCheck,
  SubmitCheck,
  InputCheckLabel,
  SubmitButton,
  ForgotPassword,
  RegisterLink,
  MoreInformations,
  ImgMoreInformations,
  PrivacityPolitice,
  TermsAndConditions,
} = styledComponentsLogin;

function Login() {
  return (
    <>
      <ScrollRevealComponent />
  
      <ContainerLogin>

        <ContainerLeft>
          <ContentLeft>
            <ContentLeftTitle className="reveal-left">BEM-VINDO AO BORA<ContentLeftSpanTitle>BICO</ContentLeftSpanTitle></ContentLeftTitle>
            <ContentLeftSubtitle className="reveal-left">Conectamos você às melhores oportunidades de trabalhos e bicos na sua região.</ContentLeftSubtitle>
          </ContentLeft>
        </ContainerLeft>

        <ContainerRight>
          <ContentRight>
            <FormLogin className="reveal-fade">
              <FormTitle>Acesse sua conta</FormTitle>
              <InputContainer>
                <InputLabel>E-mail, CPF ou CNPJ</InputLabel>
                <Input type="email" placeholder="Digite seu e-mail, CPF ou CNPJ" />
              </InputContainer>
              <InputContainer>
                <InputLabel>Senha</InputLabel>
                <Input type="password" placeholder="Digite sua senha" />
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
                Não tem uma conta? <a href="#">Cadastre-se</a>
              </RegisterLink>
            </FormLogin>
          </ContentRight>
        </ContainerRight>


        <MoreInformations className="reveal-fade">
          <ImgMoreInformations src="./borabico_logo.png" />

          <PrivacityPolitice href="#">Política de Privacidade</PrivacityPolitice>

          <TermsAndConditions href="#">Termos e Condições</TermsAndConditions>
        </MoreInformations>


      </ContainerLogin>
    </>
  );
}

export default Login;