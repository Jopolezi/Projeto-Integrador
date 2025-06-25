import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Toaster from '../../components/Toasters/Toaster';
import * as S from './styledPost';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
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
                    {...register("title", {
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
                    name="title"
                  />
                  {errors.title && <S.InputError>{errors.title.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Categoria</S.InputTitle>
                  <Select
                    {...register("category", {
                      required: "Este campo é obrigatório."
                    })}
                    name="category"
                  >
                    <option value="">Selecione uma categoria</option>
                    <option value="limpeza">Limpeza e Organização</option>
                    <option value="reforma">Reformas e Reparos</option>
                    <option value="jardinagem">Jardinagem</option>
                    <option value="eletrica">Elétrica</option>
                    <option value="encanamento">Encanamento</option>
                    <option value="pintura">Pintura</option>
                    <option value="mudanca">Mudanças e Fretes</option>
                    <option value="montagem">Montagem de Móveis</option>
                    <option value="cuidados">Cuidados Pessoais</option>
                    <option value="tecnologia">Tecnologia</option>
                    <option value="ensino">Aulas e Ensino</option>
                    <option value="eventos">Eventos</option>
                    <option value="outros">Outros</option>
                  </Select>
                  {errors.category && <S.InputError>{errors.category.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Duração Prevista</S.InputTitle>
                  <Select
                    {...register("duration", {
                      required: "Este campo é obrigatório."
                    })}
                    name="duration"
                  >
                    <option value="">Selecione a duração</option>
                    <option value="algumas-horas">Algumas horas</option>
                    <option value="1-dia">1 dia</option>
                    <option value="2-3-dias">2-3 dias</option>
                    <option value="1-semana">1 semana</option>
                    <option value="mais-1-semana">Mais de 1 semana</option>
                  </Select>
                  {errors.duration && <S.InputError>{errors.duration.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Urgência</S.InputTitle>
                  <Select
                    {...register("urgency", {
                      required: "Este campo é obrigatório."
                    })}
                    name="urgency"
                  >
                    <option value="">Selecione a urgência</option>
                    <option value="hoje">Para hoje</option>
                    <option value="esta-semana">Esta semana</option>
                    <option value="proxima-semana">Próxima semana</option>
                    <option value="nao-urgente">Não é urgente</option>
                  </Select>
                  {errors.urgency && <S.InputError>{errors.urgency.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Local de Trabalho</S.InputTitle>
                  <Select
                    {...register("workModel", {
                      required: "Este campo é obrigatório."
                    })}
                    name="workModel"
                  >
                    <option value="">Selecione o local</option>
                    <option value="presencial">Na minha casa/local</option>
                    <option value="remoto">Online/Remoto</option>
                    <option value="ambos">Ambos</option>
                  </Select>
                  {errors.workModel && <S.InputError>{errors.workModel.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Localização</S.InputTitle>
                  <Input
                    {...register("location", {
                      required: "Este campo é obrigatório.",
                      maxLength: {
                        value: 100,
                        message: "Localização não pode ter mais de 100 caracteres."
                      }
                    })}
                    type="text"
                    placeholder="Ex: Vila Madalena, São Paulo"
                    name="location"
                  />
                  {errors.location && <S.InputError>{errors.location.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Orçamento (R$)</S.InputTitle>
                  <Input
                    {...register("budget", {
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
                    name="budget"
                  />
                  {errors.budget && <S.InputError>{errors.budget.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Forma de Pagamento</S.InputTitle>
                  <Select
                    {...register("paymentType", {
                      required: "Este campo é obrigatório."
                    })}
                    name="paymentType"
                  >
                    <option value="">Selecione o pagamento</option>
                    <option value="dinheiro">Dinheiro</option>
                    <option value="pix">PIX</option>
                    <option value="transferencia">Transferência</option>
                    <option value="combinar">A combinar</option>
                  </Select>
                  {errors.paymentType && <S.InputError>{errors.paymentType.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Telefone para Contato</S.InputTitle>
                  <Input
                    {...register("contactPhone", {
                      required: "Este campo é obrigatório.",
                      pattern: {
                        value: /^\(\d{2}\) \d{5}-\d{4}$/,
                        message: "Formato inválido. Use: (11) 99999-9999"
                      }
                    })}
                    type="tel"
                    placeholder="(11) 99999-9999"
                    name="contactPhone"
                  />
                  {errors.contactPhone && <S.InputError>{errors.contactPhone.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Email para Contato</S.InputTitle>
                  <Input
                    {...register("contactEmail", {
                      required: "Este campo é obrigatório.",
                      pattern: {
                        value: /^[A-Za-z0-9._-]+@[A-Za-z]+(\.[A-Za-z]+)+$/,
                        message: "Email inválido."
                      }
                    })}
                    type="email"
                    placeholder="seu@email.com"
                    name="contactEmail"
                  />
                  {errors.contactEmail && <S.InputError>{errors.contactEmail.message}</S.InputError>}
                </S.InputContent>
              </S.InputContainer>

              {/* TextAreas ficam fora do grid para ocupar largura total */}
              <S.InputContent>
                <S.InputTitle>Descrição do Trabalho</S.InputTitle>
                <TxtArea
                  {...register("description", {
                    required: "Este campo é obrigatório.",
                    minLength: {
                      value: 30,
                      message: "Descrição deve ter pelo menos 30 caracteres."
                    }
                  })}
                  placeholder="Descreva detalhadamente o que precisa ser feito..."
                  name="description"
                />
                {errors.description && <S.InputError>{errors.description.message}</S.InputError>}
              </S.InputContent>

              <S.InputContent>
                <S.InputTitle>Requisitos Específicos</S.InputTitle>
                <TxtArea
                  {...register("requirements")}
                  placeholder="Ex: Experiência comprovada, ferramentas próprias..."
                  name="requirements"
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

              <Button type="submit" onSubmit={handleSubmit(onSubmit)} loading={loading}>
                {loading ? "Publicando..." : "Publicar Bico"}
              </Button>

              <S.AndContainer>
                <S.Line />
                <S.AndText>ou</S.AndText>
                <S.Line />
              </S.AndContainer>

              <S.RegisterContainer>
                <S.RegisterTitle>
                  Quer trabalhar fazendo bicos? &nbsp;
                  <S.Register to="/trabalhar">Cadastre-se aqui</S.Register>
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
};

export default Post;