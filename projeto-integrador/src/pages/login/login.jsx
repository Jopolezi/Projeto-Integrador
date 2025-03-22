import React, { useState } from 'react';
import {
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
  Divider,
  MoreInformations,
  PrivacityPolitice,
  TermsAndConditions
} from './styledLogin';
import './login.css'
import ScrollRevealComponent from '../../styles/scrollReveal';

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
                <InputLabel>E-mail</InputLabel>
                <Input type="email" placeholder="Digite seu e-mail" />
              </InputContainer>
              <InputContainer>
                <InputLabel>Senha</InputLabel>
                <Input type="password" placeholder="Digite sua senha" />
              </InputContainer>
              <ForgotPassword href="#">Esqueceu a senha?</ForgotPassword>
              <SubmitButton type="submit">Entrar</SubmitButton>
              <RegisterLink>
                Não tem uma conta? <a href="#">Cadastre-se</a>
              </RegisterLink>
            </FormLogin>
          </ContentRight>
        </ContainerRight>

        
          <MoreInformations className="reveal-fade">
           <PrivacityPolitice href="#">Política de Privacidade</PrivacityPolitice>
              <Divider />
           <TermsAndConditions href="#">Termos e Condições</TermsAndConditions>
          </MoreInformations>
        

      </ContainerLogin>
    </>
  );
}

export default Login;