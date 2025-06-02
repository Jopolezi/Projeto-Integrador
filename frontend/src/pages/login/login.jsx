import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoginToaster from '../../components/Toasters/Login/LoginToaster';
import * as S from './styledLogin';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/button';
import { motion } from 'framer-motion';

function Login() {
  useEffect(() => {
    document.title = "Entrar";
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm(
    { mode: 'onChange' }
  );

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', data)

      const { token } = response.data

      toast.success('Bem-vindo de volta!', {
        position: "top-right",
        autoClose: 2000
      });
      
      localStorage.setItem('token', token)

      setTimeout(() => {
        navigate('/')
      }, 2500)

    } catch (error) {
      if (error.response) {
        let errorMessage = 'Não foi possível realizar o login.';
        
        if (error.response.status === 401) {
          errorMessage = 'Email ou senha incorretos.';
        } else if (error.response.status === 429) {
          errorMessage = 'Muitas tentativas. Aguarde alguns minutos.';
        } else if (error.response.status === 500) {
          errorMessage = 'Erro interno do servidor. Tente novamente.';
        }
        
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 4000
        });
        
        console.error('Erro do servidor:', error.response.data.message)
      } else {
        toast.error('Erro de conexão. Verifique sua internet.', {
          position: "top-right",
          autoClose: 4000
        });
        
        console.error('Erro de rede:', error.message)
      }
    }
  };

  return (
    <>
    <LoginToaster />

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
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <S.Title>Entrar</S.Title>
              <S.InputTitle>Email</S.InputTitle>
              <Input
                {...register("email", {
                  required: "Este campo é obrigatório.",
                  pattern: {
                    value: /^[A-Za-z0-9._-]+@[A-Za-z]+(\.[A-Za-z]+)+$/,
                    message: "Email inválido."
                  },
                  maxLength: {
                    value: 100,
                    message: "Email não pode ter mais de 100 caracteres."
                  }
                })}
                type="email"
                placeholder="Email"
                name="email"
              />
              {errors.email && <S.InputError>{errors.email.message}</S.InputError>}

              <S.InputTitle>Senha</S.InputTitle>
              <Input
                {...register("password", {
                  required: "Este campo é obrigatório",
                  minLength: {
                    value: 6,
                    message: "Senha deve ter pelo menos 6 caracteres."
                  }
                })}
                type="password"
                placeholder="Senha"
                name="password"
              />
              {errors.password && <S.InputError>{errors.password.message}</S.InputError>}

              <Button type="submit">
                Entrar
              </Button>

              <S.MoreOptionsContainer>
                <S.RememberContainer>
                  <S.RememberCheckbox type="checkbox" />
                  <S.RememberCheckboxText>Lembrar senha</S.RememberCheckboxText>
                </S.RememberContainer>

                <S.ForgotPassword to="/">Esqueceu a senha?</S.ForgotPassword>
              </S.MoreOptionsContainer>

              <S.AndContainer>
                <S.Line />
                <S.AndText>ou</S.AndText>
                <S.Line />
              </S.AndContainer>

              <S.RegisterContainer>
                <S.RegisterTitle>
                  Não possui uma conta? &nbsp;
                  <S.Register to="/register">Cadastre-se agora</S.Register>
                </S.RegisterTitle>
              </S.RegisterContainer>
            </S.Form>
          </S.Content>
        </S.Container>

        <S.Footer>
          <S.FooterText>
            &#169; 2025 BORABICO. Todos os direitos reservados.
          </S.FooterText>
          <S.FooterLinks>
            <Link to="/">Política de Privacidade</Link>
            <Link to="/">Termos de Serviço</Link>
          </S.FooterLinks>
        </S.Footer>
      </motion.div>
    </>
  );
}

export default Login;