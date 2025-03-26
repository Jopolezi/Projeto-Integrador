import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import styledComponentsRegister from './styledRegister'; 
import './register.css';
import '../../styles/cssGlobal.css';
import ScrollRevealComponent from '../../styles/scrollReveal';

const { 
    ContainerLogin,
    ContainerLeft,
    ContentLeft,
    ContentLeftTitle,
    ContentLeftSpanTitle,
    ContentLeftSubtitle,
    ContainerRight,
    ContentRight,
    FormLogin,
    SubmitEmpresaButton,
    FormTitle,
    InputContainer,
    InputLabel,
    Input,
    SubmitAdditional,
    InputCheck,
    SubmitCheck,
    InputCheckLabel,
    SubmitButton,
    MoreInformations,
    ImgMoreInformations,
    PrivacityPolitice,
    TermsAndConditions,
} = styledComponentsRegister;

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validações básicas
    if (!email || !password || !confirmPassword) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    // Lógica de envio do formulário
    console.log('Formulário enviado', { email, rememberMe });
  };

  return (
    <>
      <ScrollRevealComponent />
      
      <ContainerLogin>
        <ContainerLeft>
          <ContentLeft>
            <ContentLeftTitle className="reveal-left">
              SOBRE O BORA
              <ContentLeftSpanTitle>BICO</ContentLeftSpanTitle>
            </ContentLeftTitle>
            <ContentLeftSubtitle className="reveal-left">
              O Bora Bico é uma plataforma online que conecta trabalhadores a empregadores de forma prática e eficiente. Nossa missão é facilitar a busca por serviços e oportunidades, oferecendo um espaço onde quem procura trabalho e quem precisa contratar possam se encontrar de maneira rápida e segura.
              Através do Bora Bico, os trabalhadores podem cadastrar suas habilidades, disponibilidade e localização, enquanto os empregadores podem criar anúncios detalhados sobre os serviços que precisam. A plataforma realiza o "match" entre as partes, promovendo uma conexão direta e ágil.
              Com um sistema intuitivo e acessível, o Bora Bico torna o processo de contratação mais simples, ajudando tanto quem busca uma renda extra quanto quem precisa de mão de obra confiável. Venha fazer parte dessa comunidade e facilite sua jornada profissional!
            </ContentLeftSubtitle>
          </ContentLeft>
        </ContainerLeft>

        <ContainerRight>
          <ContentRight>
            <FormLogin className="reveal-fade" onSubmit={handleSubmit}>
            <SubmitEmpresaButton type="submit">Empresa</SubmitEmpresaButton>
              <FormTitle>FAÇA O SEU REGISTRO</FormTitle>
              
              <InputContainer>
                <InputLabel>E-mail, CPF ou CNPJ</InputLabel>
                <Input 
                  type="email" 
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
              
              <InputContainer>
                <InputLabel>Confirmar Senha</InputLabel>
                <Input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <InputCheckLabel>Aceitar Termos</InputCheckLabel>
                </SubmitCheck>
              </SubmitAdditional>

              <SubmitButton type="submit">Cadastrar</SubmitButton>
            </FormLogin>
          </ContentRight>
        </ContainerRight>

        <MoreInformations className="reveal-fade">
          <ImgMoreInformations src="./borabico_logo.png" alt="BoraBico Logo" />
          <PrivacityPolitice href="#">Política de Privacidade</PrivacityPolitice>
          <TermsAndConditions href="#">Termos e Condições</TermsAndConditions>
        </MoreInformations>
      </ContainerLogin>
    </>
  );
}

export default Register;