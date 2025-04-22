import React from 'react';
import { Controller } from 'react-hook-form';
import styledComponentsRegister from '../styledRegister';

const {
    FormContainer, FormTitle, 
    InputLabel, Input, InputContainer,
    ButtonContainer, Button,
    ErrorMessage,
} = styledComponentsRegister;

const Step1 = ({ control, errors, nextStep, verifyStepValid }) => {
  return (
    <>
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
              <Input type="email" placeholder="Email" {...field} />
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
              <Input type="password" placeholder="Senha" {...field} />
              {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
            </>
          )}
        />
      </InputContainer>

      <ButtonContainer>
        <Button type="button" onClick={nextStep}>Próxima</Button>
      </ButtonContainer>

      </FormContainer>
    </>
  );
};

export default Step1;