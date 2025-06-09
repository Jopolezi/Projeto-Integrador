import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoginToaster from '../../components/Toasters/Login/LoginToaster';
import * as S from './styledLogin';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/button'; // Note que você importou como 'button' minúsculo
import { motion } from 'framer-motion';


function Login() {

  useEffect(() => {
    document.title = "Entrar";
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm(
    { mode: 'onChange' }
  );

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // O objeto 'data' do react-hook-form agora virá como { identificator: "...", password: "..." }
      // então podemos passá-lo diretamente para o axios.
      const response = await axios.post('http://localhost:3000/api/auth/login', data);

      const { token } = response.data;

      toast.success('Bem-vindo de volta!', {
        position: "top-right",
        autoClose: 2000
      });

      localStorage.setItem('token', token);

      setTimeout(() => {
        navigate('/');
      }, 2500);

    } catch (error) {
      if (error.response) {
        let errorMessage = 'Não foi possível realizar o login.';

        // A mensagem de erro para 401 pode ser mais genérica
        if (error.response.status === 401) {
          errorMessage = 'Email/CPF ou senha incorretos.';
        } else if (error.response.status === 400) {
            // Tratando o erro 400 que você estava recebendo
            errorMessage = error.response.data.message || 'Dados inválidos.';
        } else if (error.response.status === 429) {
          errorMessage = 'Muitas tentativas. Aguarde alguns minutos.';
        } else if (error.response.status === 500) {
          errorMessage = 'Erro interno do servidor. Tente novamente.';
        }

        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 4000
        });

        console.error('Erro do servidor:', error.response.data.message);
      } else {
        toast.error('Erro de conexão. Verifique sua internet.', {
          position: "top-right",
          autoClose: 4000
        });

        console.error('Erro de rede:', error.message);
      }
    } finally {
      setIsLoading(false);
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
              {/* --- INÍCIO DAS MUDANÇAS --- */}
              <S.InputTitle>Email ou CPF</S.InputTitle>
              <Input
                {...register("identificator", { // 1. Nome do campo alterado
                  required: "Este campo é obrigatório.",
                  validate: (value) => { // 2. Validação customizada para email OU CPF
                    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
                    const isCpf = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(value);

                    if (isEmail || isCpf) {
                      return true; // Validação OK
                    }
                    return "Email ou CPF inválido."; // Mensagem de erro
                  }
                })}
                type="text" // 3. Tipo alterado para texto
                placeholder="Digite seu email ou CPF"
                name="identificator" // 4. Name do input alterado
              />
              {/* 5. Erro agora verifica 'identificator' */}
              {errors.identificator && <S.InputError>{errors.identificator.message}</S.InputError>}
              {/* --- FIM DAS MUDANÇAS --- */}

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

              {/* Assumi que seu componente de botão se chama 'Button' e não 'S.LoginButton' */}
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Entrar"}
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