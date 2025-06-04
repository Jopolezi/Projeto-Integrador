import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import axios from 'axios';
import * as S from './styledPost';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Button from '../../components/Buttons/button';
import TxtArea from '../../components/Textarea/Textarea';

function BicoPosting() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    clearErrors,
    setError
  } = useForm({
    defaultValues: {
      title: '',
      category: '',
      duration: '',
      urgency: '',
      description: '',
      requirements: '',
      contactPhone: '',
      contactEmail: '',
      acceptTerms: false,
      featuredAd: false
    }
  });

  const workModel = watch('workModel');
  const contactPhone = watch('contactPhone');
  const contactEmail = watch('contactEmail');

  useEffect(() => {
    document.title = "Publicar Bico - BORABICO";
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const response = await axios.post('/api/bicos', data);
      
      // Sucesso - você pode fazer o que quiser aqui
      console.log('Bico publicado com sucesso:', response.data);
      alert('Bico publicado com sucesso!');
      
      // Opcional: limpar o formulário ou redirecionar
      // reset();
      
    } catch (error) {
      console.error('Erro ao publicar bico:', error);
      
      // Tratar diferentes tipos de erro
      if (error.response?.status === 400) {
        // Erros de validação do servidor
        const validationErrors = error.response.data.errors;
        if (validationErrors) {
          Object.keys(validationErrors).forEach(field => {
            setError(field, {
              type: 'server',
              message: validationErrors[field]
            });
          });
        }
      } else if (error.response?.status === 422) {
        // Erro de dados inválidos
        alert('Dados inválidos. Verifique as informações e tente novamente.');
      } else if (error.response?.status >= 500) {
        // Erro do servidor
        alert('Erro interno do servidor. Tente novamente mais tarde.');
      } else {
        // Outros erros
        alert('Erro ao publicar bico. Tente novamente.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <S.Header>
          <S.ContainerLogo>
            <S.Logo src="/BORABICO.png" alt="Logo" />
            <S.LogoText>BORABICO</S.LogoText>
          </S.ContainerLogo>
        </S.Header>

        <S.Container>
          <S.Content>
            <S.Title>Publicar Novo Bico</S.Title>
            
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <S.FormGrid>
                <S.FormGroupFull>
                  <S.InputTitle>Título do Bico *</S.InputTitle>
                  <Input
                    type="text"
                    hasError={!!errors.title}
                    placeholder="Ex: Preciso de pintor para quarto"
                    {...register('title', {
                      required: 'Título é obrigatório',
                      minLength: {
                        value: 5,
                        message: 'Título deve ter pelo menos 5 caracteres'
                      }
                    })}
                  />
                  {errors.title && <S.InputError>{errors.title.message}</S.InputError>}
                </S.FormGroupFull>

                <S.FormGroup>
                  <S.InputTitle>Categoria *</S.InputTitle>
                  <Select
                    hasError={!!errors.category}
                    {...register('category', {
                      required: 'Selecione uma categoria'
                    })}
                  >
                    <option value="">Selecione...</option>
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
                </S.FormGroup>

                <S.FormGroup>
                  <S.InputTitle>Duração Prevista *</S.InputTitle>
                  <Select
                    hasError={!!errors.duration}
                    {...register('duration', {
                      required: 'Selecione a duração'
                    })}
                  >
                    <option value="">Selecione...</option>
                    <option value="algumas-horas">Algumas horas</option>
                    <option value="1-dia">1 dia</option>
                    <option value="2-3-dias">2-3 dias</option>
                    <option value="1-semana">1 semana</option>
                    <option value="mais-1-semana">Mais de 1 semana</option>
                  </Select>
                  {errors.duration && <S.InputError>{errors.duration.message}</S.InputError>}
                </S.FormGroup>

                <S.FormGroup>
                  <S.InputTitle>Urgência *</S.InputTitle>
                  <Select
                    hasError={!!errors.urgency}
                    {...register('urgency', {
                      required: 'Selecione a urgência'
                    })}
                  >
                    <option value="">Selecione...</option>
                    <option value="hoje">Para hoje</option>
                    <option value="esta-semana">Esta semana</option>
                    <option value="proximo-semana">Próxima semana</option>
                    <option value="nao-urgente">Não é urgente</option>
                  </Select>
                  {errors.urgency && <S.InputError>{errors.urgency.message}</S.InputError>}
                </S.FormGroup>

                <S.FormGroup>
                  <S.InputTitle>Local de Trabalho *</S.InputTitle>
                  <Select
                    hasError={!!errors.workModel}
                    {...register('workModel', {
                      required: 'Selecione o modelo de trabalho'
                    })}
                  >
                    <option value="">Selecione...</option>
                    <option value="presencial">Na minha casa/local</option>
                    <option value="remoto">Online/Remoto</option>
                    <option value="ambos">Ambos</option>
                  </Select>
                  {errors.workModel && <S.InputError>{errors.workModel.message}</S.InputError>}
                </S.FormGroup>

                {workModel !== 'remoto' && workModel && (
                  <S.FormGroup>
                    <S.InputTitle>Localização *</S.InputTitle>
                    <Input
                      type="text"
                      hasError={!!errors.location}
                      placeholder="Ex: Vila Madalena, São Paulo"
                      {...register('location', {
                        required: workModel !== 'remoto' ? 'Localização é obrigatória' : false
                      })}
                    />
                    {errors.location && <S.InputError>{errors.location.message}</S.InputError>}
                  </S.FormGroup>
                )}

                <S.FormGroup>
                  <S.InputTitle>Orçamento (R$) *</S.InputTitle>
                  <Input
                    type="number"
                    hasError={!!errors.budget}
                    placeholder="Ex: 150"
                    min="0"
                    step="0.01"
                    {...register('budget', {
                      required: 'Valor do orçamento é obrigatório',
                      min: {
                        value: 0.01,
                        message: 'Valor deve ser maior que zero'
                      }
                    })}
                  />
                  {errors.budget && <S.InputError>{errors.budget.message}</S.InputError>}
                </S.FormGroup>

                <S.FormGroup>
                  <S.InputTitle>Forma de Pagamento *</S.InputTitle>
                  <Select
                    hasError={!!errors.paymentType}
                    {...register('paymentType', {
                      required: 'Selecione a forma de pagamento'
                    })}
                  >
                    <option value="">Selecione...</option>
                    <option value="dinheiro">Dinheiro</option>
                    <option value="pix">PIX</option>
                    <option value="transferencia">Transferência</option>
                    <option value="combinar">A combinar</option>
                  </Select>
                  {errors.paymentType && <S.InputError>{errors.paymentType.message}</S.InputError>}
                </S.FormGroup>
              </S.FormGrid>

              <S.FormGroupFull>
                <S.InputTitle>Descrição do Trabalho *</S.InputTitle>
                <TxtArea
                  hasError={!!errors.description}
                  placeholder="Descreva detalhadamente o que precisa ser feito, materiais necessários, horários preferidos, etc."
                  {...register('description', {
                    required: 'Descrição é obrigatória',
                    minLength: {
                      value: 30,
                      message: 'Descrição deve ter pelo menos 30 caracteres'
                    }
                  })}
                />
                {errors.description && <S.InputError>{errors.description.message}</S.InputError>}
              </S.FormGroupFull>

              <S.FormGroupFull>
                <S.InputTitle>Requisitos Específicos</S.InputTitle>
                <TxtArea
                  placeholder="Ex: Experiência comprovada, ferramentas próprias, disponibilidade específica..."
                  {...register('requirements')}
                />
              </S.FormGroupFull>

              <S.FormGrid>
                <S.FormGroup>
                  <S.InputTitle>Telefone para Contato</S.InputTitle>
                  <Input
                    type="tel"
                    hasError={!!errors.contactPhone}
                    placeholder="(11) 99999-9999"
                    {...register('contactPhone', {
                      validate: (value) => {
                        if (!value && !contactEmail) {
                          return 'Informe pelo menos um contato (telefone ou email)';
                        }
                        return true;
                      }
                    })}
                    onChange={(e) => {
                      register('contactPhone').onChange(e);
                      if (errors.contactEmail) {
                        clearErrors('contactEmail');
                      }
                    }}
                  />
                  {errors.contactPhone && <S.InputError>{errors.contactPhone.message}</S.InputError>}
                </S.FormGroup>

                <S.FormGroup>
                  <S.InputTitle>Email para Contato</S.InputTitle>
                  <Input
                    type="email"
                    hasError={!!errors.contactEmail}
                    placeholder="seu@email.com"
                    {...register('contactEmail', {
                      validate: (value) => {
                        if (!value && !contactPhone) {
                          return 'Informe pelo menos um contato (telefone ou email)';
                        }
                        if (value && !/^[A-Za-z0-9._-]+@[A-Za-z]+(\.[A-Za-z]+)+$/.test(value)) {
                          return 'Email inválido';
                        }
                        return true;
                      }
                    })}
                    onChange={(e) => {
                      register('contactEmail').onChange(e);
                      if (errors.contactPhone) {
                        clearErrors('contactPhone');
                      }
                    }}
                  />
                  {errors.contactEmail && <S.InputError>{errors.contactEmail.message}</S.InputError>}
                </S.FormGroup>
              </S.FormGrid>

              <S.CheckboxContainer>
                <S.RememberCheckbox
                  type="checkbox"
                  {...register('acceptTerms', {
                    required: 'Você deve aceitar os termos de uso'
                  })}
                />
                <S.RememberCheckboxText>
                  Aceito os termos de uso e política de privacidade *
                </S.RememberCheckboxText>
              </S.CheckboxContainer>
              {errors.acceptTerms && <S.InputError>{errors.acceptTerms.message}</S.InputError>}

              <S.CheckboxContainer>
                <S.RememberCheckbox
                  type="checkbox"
                  {...register('featuredAd')}
                />
                <S.RememberCheckboxText>
                  Destacar anúncio (+ R$ 5,00)
                </S.RememberCheckboxText>
              </S.CheckboxContainer>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Publicando...' : 'Publicar Bico'}
              </Button>
            </S.Form>
          </S.Content>
        </S.Container>

        <S.Footer>
          <S.FooterText>
            &#169; 2025 BORABICO. Todos os direitos reservados.
          </S.FooterText>
          <S.FooterLinks>
            <a href="/">Política de Privacidade</a>
            <a href="/">Termos de Serviço</a>
          </S.FooterLinks>
        </S.Footer>
      </motion.div>
    </>
  );
}

export default BicoPosting;