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

function Register() {
  useEffect(() => {
    document.title = "Cadastro | BoraBico";
  }, []);

  const navigate = useNavigate();

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
      setStep(step +  1);
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

          <ScrollRevealComponent />
        </ContainerRegister>
      </FormProvider>

    </>
  );
}

export default Register;