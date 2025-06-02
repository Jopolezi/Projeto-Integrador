import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import styledComponentsRegister from './styledRegister';
import './register.css';
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

function Register() {
  useEffect(() => {
    document.title = "Cadastro";
  }, []);

  const navigate = useNavigate();

  const [step, setStep] = React.useState(1);
  const [RegisterSucess, setRegisterSucess] = React.useState(false);
  const [RegisterError, setRegisterError] = React.useState(false);
  const [userName, setUserName] = React.useState('');

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      name: '',
      surname: '',
      cpf: '',
      tel: '',
    }
  });

  const { control, handleSubmit, formState: { errors, isValid } } = methods;

  const verifyStepValid = () => {
    switch (step) {
      case 1:
        return !errors.email && !errors.password && methods.getValues('email') && methods.getValues('password');
      case 2:
        return !errors.name && !errors.surname && methods.getValues('name') && methods.getValues('surname');
      case 3:
        return !errors.cpf && !errors.tel && methods.getValues('cpf') && methods.getValues('tel');
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (verifyStepValid()) {
      setStep(step +  1);
    }
  };

  const previousStep = () => setStep(step - 1);

  const onSubmit = async (data) => {

    try {

      const userData = {
        name: data.name,
        sobrenome: data.surname,
        email: data.email,
        cpf: data.cpf.replace(/\D/g, ''),
        telefone: data.tel,
        password: data.password
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

      setRegisterSucess(true);
      setUserName(data.nome);

      setTimeout(() => {
        navigate('/login')
      }, 3000);

    } catch (error) {
      setUserName(data.nome);
      setRegisterError(true);

      setTimeout(() => {
        setRegisterError(false);
      }, 3000);
    }
  };

  return (
    <>
      {RegisterSucess && (
        <SuccessAlert>
          Parabéns, {userName}, seu cadastro foi realizado com sucesso.
        </SuccessAlert>
      )}

      {RegisterError && (
        <ErrorAlert>
          Erro ao cadastrar o seu usuário, tente novamente.
        </ErrorAlert>
      )}


      <FormProvider {...methods}>
        <ContainerRegister className="revealFade">
          <Logo className="revealFade">
            <LogoImage src="/borabico_logo.png" alt="Logo" />
          </Logo>

          <ContentRegister>
            <FormRegister onSubmit={handleSubmit(onSubmit)}>
                
                  {step === 1 && 
                  <Step1 
                  control={control} 
                  errors={errors} 
                  nextStep={nextStep}
                  verifyStepValid={verifyStepValid}
                  />}

                  {step === 2 && 
                  <Step2
                  control={control} 
                  errors={errors} 
                  nextStep={nextStep} 
                  previousStep={previousStep} 
                  verifyStepValid={verifyStepValid}
                  />}
                  {step === 3 && 
                  <Step3 
                  control={control} 
                  errors={errors} 
                  onSubmit={onSubmit} 
                  previousStep={previousStep} 
                  verifyStepValid={verifyStepValid}
                  />}

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
        </ContainerRegister>
      </FormProvider>

    </>
  );
}

export default Register;