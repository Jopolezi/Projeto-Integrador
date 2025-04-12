// Importing React and necessary hooks for managing state and side effects --
import React, { useEffect } from 'react';
// Importing Link from react-router-dom for navigation --
import { Link } from 'react-router-dom';
// Importing useForm and FormProvider from react-hook-form --
import { useForm, FormProvider, Controller } from 'react-hook-form';
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
  InputContainer, InputLabel, Input, ErrorMessage,
  Button, ButtonContainer, ButtonPrevious,
  LoginLink,
  ContainerInformations, InformationLabel, Informations,
} = styledComponentsRegister;

function Register() {
  useEffect(() => { // This effect is used to update the title of the page when the component is mounted
    document.title = "Cadastro | BoraBico";
  }, []);

  const [etapa, setEtapa] = React.useState(1);
  
  // Configs React Hook Form
  const methods = useForm({
    mode: 'onChange', // Real time validation
    defaultValues: {
      email: '',
      senha: '',
      nome: '',
      sobrenome: '',
      cpf: '',
      telefone: '',
    }
  });

  const { control, handleSubmit, formState: { errors, isValid } } = methods;

  const verificarEtapaValida = () => {
    switch (etapa) {
      case 1:
        return !errors.email && !errors.senha && methods.getValues('email') && methods.getValues('senha');
      case 2:
        return !errors.nome && !errors.sobrenome && methods.getValues('nome') && methods.getValues('sobrenome');
      case 3:
        return !errors.cpf && !errors.telefone && methods.getValues('cpf') && methods.getValues('telefone');
      default:
        return false;
    }
  };

  const proximaEtapa = () => {
    if (verificarEtapaValida()) {
      setEtapa(etapa + 1);
    }
  };
  
  const etapaAnterior = () => setEtapa(etapa - 1);

  const onSubmit = (data) => {
    console.log('Dados enviados:', data);
    // the fetch is here
  };

  return (
    <FormProvider {...methods}>
      <ContainerRegister className="revealFade">
        <Logo className="revealFade">
          <LogoImage src="/borabico_logo.png" alt="Logo" />
        </Logo>

        <ContentRegister>
          <FormRegister onSubmit={handleSubmit(onSubmit)}>
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
                      <Controller
                        name="email"
                        control={control}
                        rules={{ 
                          required: "Email é obrigatório", 
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Formato de email inválido"
                          }
                        }}
                        render={({ field }) => (
                          <>
                            <Input
                              type="email"
                              placeholder="Email"
                              {...field}
                            />
                            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                          </>
                        )}
                      />
                    </InputContainer>

                    <InputContainer>
                      <InputLabel>Senha</InputLabel>
                      <Controller
                        name="senha"
                        control={control}
                        rules={{ 
                          required: "Senha é obrigatória",
                          pattern: {
                            value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/,
                            message: "A senha deve conter pelo menos 1 letra maiúscula e 1 caractere especial"
                          }
                        }}
                        render={({ field }) => (
                          <>
                            <Input
                              type="password"
                              placeholder="Senha"
                              {...field}
                            />
                            {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
                          </>
                        )}
                      />
                    </InputContainer>

                    <ButtonContainer>
                      <Button
                        type="button" 
                        onClick={proximaEtapa}
                        disabled={!verificarEtapaValida()}
                      >
                        Próxima
                      </Button>
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
                      <Controller
                        name="nome"
                        control={control}
                        rules={{ required: "Nome é obrigatório" }}
                        render={({ field }) => (
                          <>
                            <Input
                              type="text"
                              placeholder="Nome"
                              {...field}
                            />
                            {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
                          </>
                        )}
                      />
                    </InputContainer>

                    <InputContainer>
                      <InputLabel>Sobrenome</InputLabel>
                      <Controller
                        name="sobrenome"
                        control={control}
                        rules={{ required: "Sobrenome é obrigatório" }}
                        render={({ field }) => (
                          <>
                            <Input
                              type="text"
                              placeholder="Sobrenome"
                              {...field}
                            />
                            {errors.sobrenome && <ErrorMessage>{errors.sobrenome.message}</ErrorMessage>}
                          </>
                        )}
                      />
                    </InputContainer>

                    <ButtonContainer>
                      <ButtonPrevious type="button" onClick={etapaAnterior}>Voltar</ButtonPrevious>
                      <Button 
                        type="button" 
                        onClick={proximaEtapa}
                        disabled={!verificarEtapaValida()}
                      >
                        Próxima
                      </Button>
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
                      <Controller
                        name="cpf"
                        control={control}
                        rules={{ 
                          required: "CPF é obrigatório",
                          minLength: {
                            value: 11,
                            message: "CPF deve ter 11 dígitos"
                          }
                        }}
                        render={({ field: { onChange, value } }) => (
                          <>
                            <PatternFormat
                              format="###.###.###-##"
                              mask="_"
                              value={value}
                              onValueChange={(values) => onChange(values.value)}
                              customInput={Input}
                              allowEmptyFormatting={true}
                            />
                            {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
                          </>
                        )}
                      />
                    </InputContainer>

                    <InputContainer>
                      <InputLabel>Telefone</InputLabel>
                      <Controller
                        name="telefone"
                        control={control}
                        rules={{ 
                          required: "Telefone é obrigatório",
                          minLength: {
                            value: 11,
                            message: "Telefone deve ter 11 dígitos"
                          }
                        }}
                        render={({ field: { onChange, value } }) => (
                          <>
                            <PatternFormat
                              format="(##) #####-####"
                              mask="_"
                              value={value}
                              onValueChange={(values) => onChange(values.value)}
                              customInput={Input}
                              allowEmptyFormatting={true}
                            />
                            {errors.telefone && <ErrorMessage>{errors.telefone.message}</ErrorMessage>}
                          </>
                        )}
                      />
                    </InputContainer>

                    <ButtonContainer>
                      <ButtonPrevious type="button" onClick={etapaAnterior}>Voltar</ButtonPrevious>
                      <Button 
                        type="submit"
                        disabled={!verificarEtapaValida()}
                      >
                        Finalizar
                      </Button>
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
    </FormProvider>
  );
}

export default Register;