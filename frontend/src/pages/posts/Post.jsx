import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Toaster from '../../components/Toasters/Toaster';
import * as S from './styledPost';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/button';
import TxtArea from '../../components/Textarea/Textarea';
import { motion } from 'framer-motion';
import usePost from '../../utils/usePost';

const Post = () => {
  useEffect(() => {
    document.title = "Publicar Bico";
  }, []);

  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading
  } = usePost();

  return (
    <>
      <Toaster />

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
              <S.Title>Publicar Novo Bico</S.Title>
              
              <S.InputContainer>
                <S.InputContent>
                  <S.InputTitle>Título do Bico</S.InputTitle>
                  <Input
                    {...register("titulo", {
                      required: "Este campo é obrigatório.",
                      minLength: {
                        value: 5,
                        message: "Título deve ter pelo menos 5 caracteres."
                      },
                      maxLength: {
                        value: 100,
                        message: "Título não pode ter mais de 100 caracteres."
                      }
                    })}
                    type="text"
                    placeholder="Ex: Preciso de pintor para quarto"
                    name="titulo"
                  />
                  {errors.titulo && <S.InputError>{errors.titulo.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Localização</S.InputTitle>
                  <Input
                    {...register("localizacao", {
                      required: "Este campo é obrigatório.",
                      maxLength: {
                        value: 100,
                        message: "Localização não pode ter mais de 100 caracteres."
                      }
                    })}
                    type="text"
                    placeholder="Ex: Vila Madalena, São Paulo"
                    name="localizacao"
                  />
                  {errors.localizacao && <S.InputError>{errors.localizacao.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Salário (R$)</S.InputTitle>
                  <Input
                    {...register("salario", {
                      required: "Este campo é obrigatório.",
                      min: {
                        value: 0.01,
                        message: "Valor deve ser maior que zero."
                      }
                    })}
                    type="number"
                    placeholder="Ex: 150"
                    min="0"
                    step="0.01"
                    name="salario"
                  />
                  {errors.salario && <S.InputError>{errors.salario.message}</S.InputError>}
                </S.InputContent>

              </S.InputContainer>

              <S.InputContent>
                <S.InputTitle>Descrição do Trabalho</S.InputTitle>
                <TxtArea
                  {...register("descricao", {
                    required: "Este campo é obrigatório.",
                    minLength: {
                      value: 30,
                      message: "Descrição deve ter pelo menos 30 caracteres."
                    }
                  })}
                  placeholder="Descreva detalhadamente o que precisa ser feito..."
                  name="descricao"
                />
                {errors.descricao && <S.InputError>{errors.descricao.message}</S.InputError>}
              </S.InputContent>

              <S.InputContent>
                <S.InputTitle>Requisitos Específicos</S.InputTitle>
                <TxtArea
                  {...register("requisitos")}
                  placeholder="Ex: Experiência comprovada, ferramentas próprias..."
                  name="requisitos"
                />
              </S.InputContent>

              <S.RememberContainer>
                <S.RememberCheckbox
                  {...register("acceptTerms", {
                    required: "Você deve aceitar os termos de uso."
                  })}
                  type="checkbox"
                />
                <S.RememberCheckboxText>
                  Aceito os termos de uso e política de privacidade
                </S.RememberCheckboxText>
              </S.RememberContainer>
              {errors.acceptTerms && <S.InputError>{errors.acceptTerms.message}</S.InputError>}

              <Button type="submit" loading={loading}>
                {loading ? "Publicando..." : "Publicar Bico"}
              </Button>
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
};

export default Post;