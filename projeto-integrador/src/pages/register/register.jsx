import React, { useState } from 'react';
import styledComponentsRegister from './styledRegister'; 
import './register.css';
import '../../styles/cssGlobal.css';
import ScrollRevealComponent from '../../styles/scrollReveal';

const {
  ContainerRegister,
  ContainerLeft,
  ContainerRight,
  ContentLeft,
  ContentRight,
  ContentLeftTitle,
  ContentLeftSpanTitle,
  ContentLeftSubtitle,
  FormRegister,
  ButtonViewRegister,
  TitleEnterpriseRegister,
  InputsWrapper,
  InputContainer,
  InputLabel,
  Input,
  InputDateType,
  Select,
  Option
} = styledComponentsRegister;

function Register() {
  const [showEnterprise, setShowEnterprise] = useState(false);
  
  const toggleEnterpriseVisibility = () => {
    setShowEnterprise(!showEnterprise); 
  };

  return (
    <>
    <ScrollRevealComponent />

    <ContainerRegister>
      <ContainerLeft>
        <ContentLeft>
          <ContentLeftTitle>
            <ContentLeftSpanTitle>Cadastro</ContentLeftSpanTitle>
          </ContentLeftTitle>
          <ContentLeftSubtitle>Escolha seu tipo de cadastro</ContentLeftSubtitle>
        </ContentLeft>
      </ContainerLeft>

      <ContainerRight>
        <ContentRight>
          <FormRegister>
            <ButtonViewRegister
              type="button"
              onClick={toggleEnterpriseVisibility}>
              {showEnterprise ? 'Pessoa Física' : 'Empresa'}
            </ButtonViewRegister>

            {showEnterprise ? (
             <>
            <TitleEnterpriseRegister>REGISTRE A SUA EMPRESA</TitleEnterpriseRegister>

            <InputsWrapper>
             <InputContainer>
             <InputLabel>CNPJ</InputLabel>
             <Input type="number" placeholder="CNPJ" />
             </InputContainer>

             <InputContainer>
             <InputLabel>Razão Social</InputLabel>
             <Input type="text" placeholder="Razão Social" maxLength={30}></Input>
             </InputContainer>

             <InputContainer>
             <InputLabel>Nome Fantasia</InputLabel>
             <Input type="text" placeholder="Nome Fantasia" />
             </InputContainer>

             <InputContainer>
             <InputLabel>Inscrição Estadual</InputLabel>
             <Input type="text" placeholder="Inscrição Estadual" maxLength={14} />
             </InputContainer>

            <InputContainer>
              <InputLabel>Email</InputLabel>
              <Input type="text" placeholder="E-mail profissional" />
             </InputContainer>

             <InputContainer>
             <InputLabel>Telefone</InputLabel>
             <Input type="text" placeholder="(99) 9999-9999" />
             </InputContainer>

             <InputContainer>
             <InputLabel>CEP</InputLabel>
             <Input type="text" placeholder="99999-999" />
             </InputContainer>
             </InputsWrapper>
             </>
            ) : (
              <>
              <InputContainer>
              
              </InputContainer>

              </>
            )}
          </FormRegister>
        </ContentRight>
      </ContainerRight>
    </ContainerRegister>
    </>
  )
}

export default Register;