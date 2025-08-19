import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styledComponentsLogin from './styledLogin';
import './login.css'
import '../../styles/cssGlobal.css'
import ScrollRevealComponent from '../../styles/scrollReveal';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const {
  ContainerLogin, ContentLogin, Logo, LogoImage,
  FormLogin, FormTitle,
  InputContainer, InputLabel,
  Input, InputCheck, InputCheckLabel,
  SubmitAdditional, SubmitCheck, SubmitButton,
  ForgotPassword,
  RegisterLink,
  ContainerInformations, Informations, InformationLabel,
  Flex,
  SuccessAlert, ErrorAlert
} = styledComponentsLogin;


function Login() {
  useEffect(() => {
    document.title = "Login | BoraBico";
  }, []);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [LoginSucesso, setLoginSucesso] = React.useState(false);
  const [LoginErro, setLoginErro] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    const userData = {
      email: email,
      password: password,
      rememberMe: rememberMe
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        throw new Error(responseData.message || 'Erro ao fazer o login');
      } else {
        // Sucesso no login
        setLoginSucesso(true);
        
        setTimeout(() => {
          navigate('/')
        }, 3000);
      }
    } catch (error) {
      setError(error.message);
      setLoginErro(true);
  
      setTimeout(() => {
        setLoginErro(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {LoginSucesso && (
        <SuccessAlert>
        Login realizado com sucesso, redirecionando para a página inicial.
        </SuccessAlert>
      )}

      {LoginErro && (
        <ErrorAlert>
        Erro ao efetuar o login, tente novamente.
        </ErrorAlert>
      )}


      <ScrollRevealComponent />

      <ContainerLogin>
        <Logo className="revealFade">
          <LogoImage src="/borabico_logo.png" alt="Logo" />
        </Logo>

        <ContentLogin className="revealFade">
          <FormLogin onSubmit={handleSubmit}>
            <FormTitle>Acesse sua conta</FormTitle>
                      
            <InputContainer>
              <InputLabel>E-mail, CPF ou CNPJ</InputLabel>
              <Input 
                type="text" 
                placeholder="Digite seu e-mail, CPF ou CNPJ" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputContainer>
            
            <InputContainer>
              <InputLabel>Senha</InputLabel>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="openEye"
                onClick={togglePasswordVisibility}
              />
            </InputContainer>

            <SubmitAdditional>
              <SubmitCheck>
                <InputCheck 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <InputCheckLabel>Lembrar-me</InputCheckLabel>
              </SubmitCheck>
              <ForgotPassword href="#">Esqueceu a senha?</ForgotPassword>
            </SubmitAdditional>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Processando...' : 'Entrar'}
            </SubmitButton>

            <RegisterLink>
              Não tem uma conta? <Link to="/register">Cadastre-se</Link>
            </RegisterLink>
          </FormLogin>

          <ContainerInformations className="reveal-fade">
            <Flex>
              <img src="/borabico_logo.png" width="50px" height="50px" alt="Logo" />
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