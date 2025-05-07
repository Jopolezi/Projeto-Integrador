import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './styledLogin';
import './login.css'
import '../../styles/cssGlobal.css'
import ScrollRevealComponent from '../../styles/scrollReveal';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login() {
  useEffect(() => {
    document.title = "Login | BoraBico";
  }, []);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [LoginSucesso, setLoginSucesso] = useState(false);
  const [LoginErro, setLoginErro] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); 
  
    const userData = {
      
      identificator: email, // esse campo pode ser um e-mail ou um CPF
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
        // Ativa o popup de sucesso primeiro
        setLoginSucesso(true);
        
        // Espera 3 segundos antes de redirecionar
        setTimeout(() => {
          navigate('/');
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
      {S.LoginSucesso && (
        <S.SuccessAlert>
          Login realizado com sucesso, redirecionando para a página inicial.
        </S.SuccessAlert>
      )}

      {S.LoginErro && (
        <S.ErrorAlert>
          Erro ao efetuar o login, tente novamente.
        </ErrorAlert>
      )}

      <ScrollRevealComponent />

      <S.ContainerLogin>
        <S.Logo className="revealFade">
          <S.LogoImage src="/borabico_logo.png" alt="Logo" />
        </S.Logo>

        <S.ContentLogin className="revealFade">
          <S.FormLogin onSubmit={handleSubmit}>
            <S.FormTitle>Acesse sua conta</S.FormTitle>
                      
            <S.InputContainer>
              <S.InputLabel>E-mail, CPF ou CNPJ</S.InputLabel>
              <S.Input 
                type="text" 
                placeholder="Digite seu e-mail, CPF ou CNPJ" 
                value={email}
                onChange={(e) => setEmail(e.target.value) || setCpf(e.target.value)}
                required
              />
            </S.InputContainer>
            
            <S.InputContainer>
              <S.InputLabel>Senha</S.InputLabel>
              <S.Input
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
            </S.InputContainer>

            <S.SubmitAdditional>
              <S.SubmitCheck>
                <S.InputCheck 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <S.InputCheckLabel>Lembrar-me</S.InputCheckLabel>
              </S.SubmitCheck>
              <S.ForgotPassword href="#">Esqueceu a senha?</S.ForgotPassword>
            </S.SubmitAdditional>

            <S.SubmitButton type="submit" disabled={loading}>
              {loading ? 'Processando...' : 'Entrar'}
            </S.SubmitButton>

            <S.RegisterLink>
              Não tem uma conta? <Link to="/register">Cadastre-se</Link>
            </S.RegisterLink>
          </S.FormLogin>

          <S.ContainerInformations className="reveal-fade">
            <S.Flex>
              <img src="/borabico_logo.png" width="50px" height="50px" alt="Logo" />
              <S.InformationLabel>© Copyright 2025</S.InformationLabel>
            </S.Flex>
            <S.Informations> <Link to="/register">Política de Privacidade</Link> </S.Informations>
            <S.Informations> <Link to="/register">Termos e Condições</Link> </S.Informations>
            <S.Informations> <Link to="/register">Política de Cookies</Link> </S.Informations>
          </S.ContainerInformations>
        </S.ContentLogin>
      </S.ContainerLogin>
    </>
  );
}

export default Login;