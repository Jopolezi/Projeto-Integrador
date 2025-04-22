import React from "react";
import { Controller } from "react-hook-form";
import { PatternFormat } from 'react-number-format';
import styledComponentsRegister from "../styledRegister";

const {
    FormContainer, FormTitle, 
    InputLabel, Input, InputContainer,
    ButtonContainer, Button, ButtonPrevious,
    ErrorMessage,
} = styledComponentsRegister;

const Step3 = ({ control, errors, previousStep, verifyStepValid}) => {
    return (
        <>
        <FormContainer>
                      <FormTitle>CPF e Telefone</FormTitle>

                      <InputContainer>
                        <InputLabel>CPF</InputLabel>
                        <Controller
                          name="cpf"
                          control={control}
                          rules={{
                            required: "CPF é obrigatório",
                            minLength: {
                              value: 11,
                              message: "CPF deve ter 11 dígitos"
                            }
                          }}
                          render={({ field: { onChange, value } }) => (
                            <>
                              <PatternFormat
                                format="###.###.###-##"
                                mask="_"
                                value={value}
                                onValueChange={(values) => onChange(values.value)}
                                customInput={Input}
                                allowEmptyFormatting={true}
                              />
                              {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
                            </>
                          )}
                        />
                      </InputContainer>

                      <InputContainer>
                        <InputLabel>Telefone</InputLabel>
                        <Controller
                          name="telefone"
                          control={control}
                          rules={{
                            required: "Telefone é obrigatório",
                            minLength: {
                              value: 11,
                              message: "Telefone deve ter 11 dígitos"
                            }
                          }}
                          render={({ field: { onChange, value } }) => (
                            <>
                              <PatternFormat
                                format="(##) #####-####"
                                mask="_"
                                value={value}
                                onValueChange={(values) => onChange(values.value)}
                                customInput={Input}
                                allowEmptyFormatting={true}
                              />
                              {errors.telefone && <ErrorMessage>{errors.telefone.message}</ErrorMessage>}
                            </>
                          )}
                        />
                      </InputContainer>

                      <ButtonContainer>
                        <ButtonPrevious type="button" onClick={previousStep}>Voltar</ButtonPrevious>
                        <Button
                          type="submit"
                          disabled={!verifyStepValid()}
                        >
                          Finalizar
                        </Button>
                      </ButtonContainer>
                    </FormContainer>
        </>
    );
}

export default Step3;