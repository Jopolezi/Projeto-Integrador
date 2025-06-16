import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { Step1, Step2, Step3 } from './steps';


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

    </>
  );
}

export default Register;