// Importing React and necessary hooks for managing state and side effects --
import React, { useEffect, useState } from 'react';
// Importing Link from react-router-dom for navigation --
import { Link } from 'react-router-dom';
// Importing styles for styling the register page --
import styledComponentsRegister from './styledRegister';
import './register.css';
import '../../styles/cssGlobal.css';
// Importing ScrollRevealComponent for scroll animations --
import ScrollRevealComponent from '../../styles/scrollReveal';
// Importing animated's effects from framer-motion lib --
// import { motion, AnimatePresence } from 'framer-motion';
// Importing Formatation Numeric from react-number-format lib --
import { PatternFormat } from 'react-number-format';



const { // This component is used for the deconstruction of styled-components objects
  Flex,
  ContainerRegister, ContentRegister,
  Logo, LogoImage,
  FormRegister, FormContainer, FormTitle,
  InputContainer, InputLabel, Input,
  Button, ButtonContainer, ButtonPrevious,
  LoginLink
} = styledComponentsRegister;

function Register() {
  useEffect(() => { // This effect is used to update the title of the page when the component is mounted
    document.title = "Cadastro | BoraBico";
  }, []);


  const [etapa, setEtapa] = useState(1);
  const [dados, setDados] = useState({
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    cpf: '',
    telefone: '',
  });

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const proximaEtapa = () => setEtapa(etapa + 1);
  const etapaAnterior = () => setEtapa(etapa - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', dados);
    // Aqui você pode enviar os dados para uma API
  };


  return (

    <ContainerRegister className="revealFade">
      <Logo className="revealFade">
        <LogoImage src="/borabico_logo.png" alt="Logo" />
      </Logo>

      <ContentRegister>

        <FormRegister onSubmit={handleSubmit}>

          {etapa === 1 && (
            <FormContainer>
              <FormTitle>E-mail e Senha</FormTitle>

              <InputContainer>
                <InputLabel>E-mail</InputLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={dados.email}
                  onChange={handleChange}
                  required
                />
              </InputContainer>

              <InputContainer>
                <InputLabel>Senha</InputLabel>
                <Input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  value={dados.senha}
                  onChange={handleChange}
                  required
                />
              </InputContainer>

              <ButtonContainer>
                <Button type="button" onClick={proximaEtapa}>Próxima</Button>
              </ButtonContainer>
            </FormContainer>
          )}

          {etapa === 2 && (
            <FormContainer>
              <FormTitle>Nome e Sobrenome</FormTitle>

              <InputContainer>
                <InputLabel>Nome</InputLabel>
                <Input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={dados.nome}
                  onChange={handleChange}
                  required
                />
              </InputContainer>

              <InputContainer>
                <InputLabel>Sobrenome</InputLabel>
                <Input
                  type="text"
                  name="sobrenome"
                  placeholder="Sobrenome"
                  value={dados.sobrenome}
                  onChange={handleChange}
                  required
                />
              </InputContainer>

              <ButtonContainer>
                <Button type="button" onClick={proximaEtapa}>Próxima</Button>
                <ButtonPrevious type="button" onClick={etapaAnterior}>Voltar</ButtonPrevious>
              </ButtonContainer>

            </FormContainer>
          )}

          {etapa === 3 && (
            <FormContainer>
              <FormTitle>CPF e Telefone</FormTitle>

              <InputContainer>
                <InputLabel>CPF</InputLabel>
                <PatternFormat
                  format="###.###.###-##"
                  mask="_"
                  name="cpf"
                  value={dados.cpf}
                  onValueChange={(values) =>
                    setDados((prev) => ({ ...prev, cpf: values.value }))
                  }
                  customInput={Input}
                  required
                  allowEmptyFormatting={true}
                />
              </InputContainer>

              <InputContainer>
                <InputLabel>Telefone</InputLabel>
                <PatternFormat
                  format="(##) #####-####"
                  mask="_"
                  name="telefone"
                  value={dados.telefone}
                  onValueChange={(values) =>
                    setDados((prev) => ({ ...prev, telefone: values.value }))
                  }
                  customInput={Input}
                  required
                  allowEmptyFormatting={true}
                />
              </InputContainer>

              <ButtonContainer>
                <Button type="submit">Finalizar</Button>
                <ButtonPrevious type="button" onClick={etapaAnterior}>Voltar</ButtonPrevious>
              </ButtonContainer>
            </FormContainer>
          )}

          <LoginLink>
            Já tem uma conta? <Link to="/login">Entre aqui</Link>
          </LoginLink>
        </FormRegister>

      </ContentRegister>

      <ScrollRevealComponent />
    </ContainerRegister>

  );
}

export default Register;