// Importing React and necessary hooks for managing state and side effects --
import React, { useEffect } from 'react';
// Importing Link from react-router-dom for navigation --
import { Link, useNavigate } from 'react-router-dom';
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
  ContainerRegister, ContentRegister, ContentRegisterTitle,
  Logo, LogoImage,
  FormRegister, FormContainer, FormTitle,
  InputContainer, InputLabel, Input, ErrorMessage,
  Button, ButtonContainer, ButtonPrevious,
  LoginLink,
  ContainerInformations, InformationLabel, Informations,
  SuccessAlert, ErrorAlert,
} = styledComponentsRegister;

function Register() {
  useEffect(() => { // This effect is used to update the title of the page when the component is mounted
    document.title = "Cadastro | BoraBico";
  }, []);

  const navigate = useNavigate(); // Used this navigate for the login page

  const [step, setStep] = React.useState(1);
  const [CadastroSucesso, setCadastroSucesso] = React.useState(false);
  const [CadastroErro, setCadastroErro] = React.useState(false);
  const [userName, setUserName] = React.useState('');


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

  const verifyStepValid = () => {
    switch (step) {
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

  const nextStep = () => {
    if (verifyStepValid()) {
      setStep(step + 1);
    }
  };

  const previousStep = () => setStep(step - 1);

  const onSubmit = async (data) => {

    try {

      const userData = {
        name: data.nome,
        sobrenome: data.sobrenome,
        email: data.email,
        cpf: data.cpf.replace(/\D/g, ''),
        telefone: data.telefone,
        password: data.senha
      }

      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Erro ao cadastrar usuário');
      }

      setCadastroSucesso(true);
      setUserName(data.nome);

      setTimeout(() => {
        navigate('/login')
      }, 3000);

    } catch (error) {
      setUserName(data.nome);
      setCadastroErro(true);

      setTimeout(() => {
        setCadastroErro(false);
      }, 3000);
    }
  };

  return (
    // This line add styles for pop-up sucessful or unsucessful register
    <>
      {CadastroSucesso && (
        <SuccessAlert>
          Parabéns, {userName} seu cadastro foi realizado com sucesso!
        </SuccessAlert>
      )}

      {CadastroErro && (
        <ErrorAlert>
          Erro ao cadastrar o seu usuário, {userName}!
        </ErrorAlert>
      )}


      <FormProvider {...methods}>
        <ContainerRegister className="revealFade">
          <Logo className="revealFade">
            <LogoImage src="/borabico_logo.png" alt="Logo" />
          </Logo>

          <ContentRegister>

            <ContentRegisterTitle>CADASTRE O SEU USUÁRIO</ContentRegisterTitle>

            <FormRegister onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {step === 1 && (
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
                              value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/,
                              message: "A senha deve conter pelo menos 1 letra maiúscula, 1 número e 1 caractere especial"
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
                          onClick={nextStep}
                          disabled={!verifyStepValid()}
                        >
                          Próxima
                        </Button>
                      </ButtonContainer>
                    </FormContainer>
                  </motion.div>
                )}

                {step === 2 && (
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
                          rules={{
                            required: "Nome é obrigatório",
                            minLength: {
                              value: 2,
                              message: "O nome deve ter pelo menos 2 caracteres"
                            },
                            pattern: {
                              value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
                              message: "O nome não pode conter números ou caracteres especiais"
                            }
                          }}
                          render={({ field }) => (
                            <>
                              <Input
                                type="text"
                                placeholder="Nome"
                                {...field}
                                onInput={(e) => {
                                  e.target.value = e.target.value.replace(/\d/g, '');
                                }}
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
                          rules={{
                            required: "Sobrenome é obrigatório",
                            minLength: {
                              value: 2,
                              message: "O sobrenome deve ter pelo menos 2 caracteres"
                            },
                            pattern: {
                              value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/,
                              message: "O sobrenome não pode conter números ou caracteres especiais"
                            }
                          }}
                          render={({ field }) => (
                            <>
                              <Input
                                type="text"
                                placeholder="Sobrenome"
                                {...field}
                                onInput={(e) => {
                                  e.target.value = e.target.value.replace(/\d/g, '');
                                }}
                              />
                              {errors.sobrenome && <ErrorMessage>{errors.sobrenome.message}</ErrorMessage>}
                            </>
                          )}
                        />
                      </InputContainer>

                      <ButtonContainer>
                        <ButtonPrevious type="button" onClick={previousStep}>Voltar</ButtonPrevious>
                        <Button
                          type="button"
                          onClick={nextStep}
                          disabled={!verifyStepValid()}
                        >
                          Próxima
                        </Button>
                      </ButtonContainer>
                    </FormContainer>
                  </motion.div>
                )}

                {step === 3 && (
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
                        <ButtonPrevious type="button" onClick={previousStep}>Voltar</ButtonPrevious>
                        <Button
                          type="submit"
                          disabled={!verifyStepValid()}
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

    </>
  );
}

export default Register;