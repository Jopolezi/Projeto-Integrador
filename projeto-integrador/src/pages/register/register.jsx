import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  InputsGrid,
  InputContainer,
  InputLabel,
  Input,
  InputDateType,
  Select,
  Option,
  SubmitButton,
  LoginButton,
  Flex
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
          {showEnterprise ? (
            <>
            <ContentLeftTitle>
            SUA EMPRESA NO <ContentLeftSpanTitle>BORABICO</ContentLeftSpanTitle>
            </ContentLeftTitle>

            <ContentLeftSubtitle>Olá, que bom ter você por aqui no BORABICO. Somos a plataforma que conecta sua empresa com pessoas talentosas que estão em busca de oportunidades — desde pequenos trabalhos até vagas permanentes.
            </ContentLeftSubtitle>
            </>
          ): (
            <>
            <ContentLeftTitle className="reveal-left">CADASTRE SEU <ContentLeftSpanTitle>TALENTO</ContentLeftSpanTitle></ContentLeftTitle>

            <ContentLeftSubtitle className="reveal-left">Mostre seu potencial agora. Junte-se ao BoraBico e conecte-se com empresas que buscam exatamente o que você oferece. Enquanto você hesita, outros já estão garantindo oportunidades e renda extra.

            Não fique para trás. Seu próximo trabalho está a apenas um cadastro de distância.
            </ContentLeftSubtitle>
            </>
          )}
        </ContentLeft>
      </ContainerLeft>

      <ContainerRight>
        <ContentRight>
          
            {showEnterprise ? (
             <>
            <FormRegister className="reveal-fade">
            <Flex>
            <TitleEnterpriseRegister>Cadastre a sua empresa</TitleEnterpriseRegister>

            <ButtonViewRegister
              type="button"
              onClick={toggleEnterpriseVisibility}>
              {showEnterprise ? 'Pessoa Física' : 'Empresa'}
            </ButtonViewRegister>
            </Flex>

            <InputsGrid>
            <InputContainer>
            <InputLabel>Razão Social</InputLabel>
            <Input type="text" placeholder="Razão Social" maxLength={30}/>
            </InputContainer>

            <InputContainer>
            <InputLabel>Nome Fantasia</InputLabel>
            <Input type="text" placeholder="Nome Fantasia" maxLength={30}/>
            </InputContainer>

            <InputContainer>
            <InputLabel>CNPJ</InputLabel>
            <Input type="text" placeholder="00.000.000/0000-00" maxLength={18}/>
            </InputContainer>

            <InputContainer>
            <InputLabel>Inscrição Estadual</InputLabel>
            <Input type="text" placeholder="Inscrição Estadual" maxLength={14}/>
            </InputContainer>

            <InputContainer>
            <InputLabel>Porte da Empresa</InputLabel>
            <Select> 
              <Option disabled>Escolha o Porte da Empresa</Option>
              <Option>Grande Porte</Option>
              <Option>Médio Porte</Option>
              <Option>Pequeno Porte</Option>
              <Option>Micro Porte</Option>
            </Select>
            </InputContainer>

            <InputContainer>
            <InputLabel>Telefone Corporativo</InputLabel>
            <Input type="text" placeholder="Telefone Corporativo" />
            </InputContainer>

            <InputContainer>
            <InputLabel>E-Mail Corporativo</InputLabel>
            <Input type="text" placeholder="E-Mail Corporativo" />
            </InputContainer>

            <InputContainer>
            <InputLabel>CEP</InputLabel>
            <Input type="text" placeholder="00000-000" />
            </InputContainer>

            <InputContainer>
            <InputLabel>Cidade</InputLabel>
            <Input type="text" placeholder="Cidade" disabled/>
            </InputContainer>

            <InputContainer>
            <InputLabel>Bairro</InputLabel>
            <Input type="text" placeholder="Bairro" disabled/>
            </InputContainer>

            <InputContainer>
            <InputLabel>Rua</InputLabel>
            <Input type="text" placeholder="Rua" disabled/>
            </InputContainer>

            <InputContainer>
            <InputLabel>Número</InputLabel>
            <Input type="text" placeholder="Número" />
            </InputContainer>
            </InputsGrid>

            <Flex>
              <LoginButton>Já tem uma conta? <Link to="/login">Entre aqui</Link></LoginButton>
            <SubmitButton>Cadastrar</SubmitButton>
            </Flex>
            </FormRegister>
             </>
            ) : (
              <>
              <FormRegister className="reveal-fade">

              <Flex><TitleEnterpriseRegister>Cadastre seu talento!</TitleEnterpriseRegister>
            <ButtonViewRegister
              type="button"
              onClick={toggleEnterpriseVisibility}>
              {showEnterprise ? 'Pessoa Física' : 'Empresa'}
            </ButtonViewRegister>
            </Flex>

            <InputsGrid>
            <InputContainer>
            <InputLabel>Primeiro Nome</InputLabel>
            <Input type="text" placeholder="Primeiro Nome" />
            </InputContainer>

            <InputContainer>
            <InputLabel>Último Nome</InputLabel>
            <Input type="text" placeholder="Último nome" />
            </InputContainer>

            <InputContainer>
            <InputLabel>Telefone</InputLabel>
            <Input type="text" placeholder="(00) 0000-0000" />
            </InputContainer>

            <InputContainer>
            <InputLabel>E-mail</InputLabel>
            <Input type="text" placeholder="borabicoams@gmail.com" />
            </InputContainer>

            <InputContainer>
            <InputLabel>CPF</InputLabel>
            <Input type="text" placeholder="000.000.000-00" />
            </InputContainer>

            <InputContainer>
            <InputLabel>Data de Nascimento</InputLabel>
            <InputDateType type="date" />
            </InputContainer>

            <InputContainer>
            <InputLabel>Gênero</InputLabel>
            <Select>
              <Option disabled> Escolha o seu gênero</Option>
              <Option>Masculino</Option>
              <Option>Feminino</Option>
              <Option>Não-Binário</Option>
              <Option>Outro</Option>
            </Select>
            </InputContainer>

            <InputContainer>
            <InputLabel>CEP</InputLabel>
            <Input type="text" placeholder="00000-000" />
            </InputContainer>

            <InputContainer>
            <InputLabel>Cidade</InputLabel>
            <Input type="text" placeholder="Bairro" disabled/>
            </InputContainer>

            <InputContainer>
            <InputLabel>Bairro</InputLabel>
            <Input type="text" placeholder="Bairro" disabled/>
            </InputContainer>

            <InputContainer>
            <InputLabel>Rua</InputLabel>
            <Input type="text" placeholder="Rua" disabled/>
            </InputContainer>
            
            <InputContainer>
            <InputLabel>Número</InputLabel>
            <Input type="text" placeholder="Número" />
            </InputContainer>
            </InputsGrid>

            <Flex>
              <LoginButton>Já tem uma conta? <Link to="/login">Entre aqui</Link></LoginButton>
            <SubmitButton>Cadastrar</SubmitButton>
            </Flex>

            </FormRegister>

              </>
            )}
          
        </ContentRight>
      </ContainerRight>
    </ContainerRegister>
    </>
  )
}

export default Register;