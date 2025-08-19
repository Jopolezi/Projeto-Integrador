<<<<<<< HEAD
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import * as S from './styledRegister'
import { motion } from 'framer-motion';
import Input from '../../components/Input/Input';
=======
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import styledComponentsRegister from './styledRegister';
import './register.css';
import '../../styles/cssGlobal.css';
import ScrollRevealComponent from '../../styles/scrollReveal';
import { Step1, Step2, Step3 } from './steps';

const {
  Flex,
  ContainerRegister, ContentRegister,
  Logo, LogoImage,
  FormRegister,
  LoginLink,
  ContainerInformations, InformationLabel, Informations,
  SuccessAlert, ErrorAlert,
} = styledComponentsRegister;
>>>>>>> 54550e0369353a1a8ec15a7724f1035535beb505

function Register() {
  useEffect(() => {
    document.title = "Cadastro | BoraBico";
  }, []);

  // const [isLoading, setIsLoading] = useState(false)

<<<<<<< HEAD

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ duration: 1 }}
      >

        <S.Header>
          <S.ContainerLogo to="/">
            <S.Logo src="/BORABICO.png" alt="Logo" />
            <S.LogoText>BORABICO</S.LogoText>
          </S.ContainerLogo>
        </S.Header>

        <S.Container>
          <S.Content>
            <S.Form>
              <S.Title>Cadastrar</S.Title>

              <S.FieldsGroup>
                <S.InputContainer>
                  <S.InputTitle>Nome <span>*</span></S.InputTitle>
                  <Input></Input>
                </S.InputContainer>

                <S.InputContainer>
                  <S.InputTitle>Sobrenome <span>*</span></S.InputTitle>
                  <Input></Input>
                </S.InputContainer>

                <S.InputContainer>
                  <S.InputTitle>Endereço de email (válido) <span>*</span></S.InputTitle>
                  <Input></Input>
                </S.InputContainer>

                <S.InputContainer>
                  <S.InputTitle>CPF <span>*</span></S.InputTitle>
                  <Input></Input>
                </S.InputContainer>

                <S.InputContainer>
                  <S.InputTitle>Senha <span>*</span></S.InputTitle>
                  <Input></Input>
                </S.InputContainer>

                <S.InputContainer>
                  <S.InputTitle>Confirmar Senha <span>*</span></S.InputTitle>
                  <Input></Input>
                </S.InputContainer>
              </S.FieldsGroup>

              <S.RegisterButton type="submit">
                Cadastrar
              </S.RegisterButton>
=======
  const [step, setStep] = React.useState(1);
  const [CadastroSucesso, setCadastroSucesso] = React.useState(false);
  const [CadastroErro, setCadastroErro] = React.useState(false);
  const [userName, setUserName] = React.useState('');

  const methods = useForm({
    mode: 'onChange',
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
    <>
      {CadastroSucesso && (
        <SuccessAlert>
          Parabéns, {userName}, seu cadastro foi realizado com sucesso.
        </SuccessAlert>
      )}

      {CadastroErro && (
        <ErrorAlert>
          Erro ao cadastrar o seu usuário, tente novamente.
        </ErrorAlert>
      )}
>>>>>>> 54550e0369353a1a8ec15a7724f1035535beb505




            </S.Form>
          </S.Content>
        </S.Container>


<<<<<<< HEAD

      </motion.div>
=======
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
>>>>>>> 54550e0369353a1a8ec15a7724f1035535beb505

    </>
  );
}

export default Register;