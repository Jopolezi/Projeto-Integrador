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
import { motion, AnimatePresence } from 'framer-motion';
// Importing Formatation Numeric from react-number-format lib --
import { PatternFormat } from 'react-number-format';
// Importing slideVariants from transictions archive --
import slideVariants from './transictions'

const { // This component is used for the deconstruction of styled-components objects
  Flex,
  ContainerRegister, ContentRegister,
  Logo, LogoImage,
  FormRegister, FormContainer, FormTitle,
  InputContainer, InputLabel, Input,
  Button, ButtonContainer, ButtonPrevious,
  LoginLink,
  ContainerInformations, InformationLabel, Informations,
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
      // o fetch vai aqui
    };


  return (

    <ContainerRegister className="revealFade">
      <Logo className="revealFade">
        <LogoImage src="/borabico_logo.png" alt="Logo" />
      </Logo>

      <ContentRegister>

        <FormRegister onSubmit={handleSubmit}>

        <AnimatePresence mode="wait">
            {etapa === 1 && (
              <motion.div
                key="etapa1"
                initial={slideVariants.initial}
                animate={slideVariants.animate}
                exit={slideVariants.exit}
                transition={slideVariants.transition}
              >
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
              </motion.div>
            )}

            {etapa === 2 && (
              <motion.div
                key="etapa2"
                initial={slideVariants.initial}
                animate={slideVariants.animate}
                exit={slideVariants.exit}
                transition={slideVariants.transition}
              >
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
                    <ButtonPrevious type="button" onClick={etapaAnterior}>Voltar</ButtonPrevious>
                    <Button type="button" onClick={proximaEtapa}>Próxima</Button>
                  </ButtonContainer>
                </FormContainer>
              </motion.div>
            )}

            {etapa === 3 && (
              <motion.div
                key="etapa3"
                initial={slideVariants.initial}
                animate={slideVariants.animate}
                exit={slideVariants.exit}
                transition={slideVariants.transition}
              >
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
                    <ButtonPrevious type="button" onClick={etapaAnterior}>Voltar</ButtonPrevious>
                    <Button type="submit">Finalizar</Button>
                  </ButtonContainer>
                </FormContainer>
              </motion.div>
            )}
          </AnimatePresence>

          <LoginLink>
            Já tem uma conta? <Link to="/login">Entre aqui</Link>
          </LoginLink>
        </FormRegister>

        <ContainerInformations className="reveal-fade">
                    <Flex>
                      <img src="/borabico_logo.png" width="50px" height="50px" />
                      <InformationLabel>© Copyright 2025</InformationLabel>
                    </Flex>
                    <Informations> <Link to="/register">Política de Privacidade</Link> </Informations>
                    <Informations> <Link to="/register">Termos e Condições</Link> </Informations>
                    <Informations> <Link to="/register">Política de Cookies</Link> </Informations>
        
                  </ContainerInformations>

      </ContentRegister>

      <ScrollRevealComponent />
    </ContainerRegister>

  );
}

export default Register;