import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import * as S from './styledRegister'
import { motion } from 'framer-motion';
import Input from '../../components/Input/Input';

function Register() {
  useEffect(() => {
    document.title = "Cadastro";
  }, []);

  // const [isLoading, setIsLoading] = useState(false)


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




            </S.Form>
          </S.Content>
        </S.Container>



      </motion.div>

    </>
  );
}

export default Register;