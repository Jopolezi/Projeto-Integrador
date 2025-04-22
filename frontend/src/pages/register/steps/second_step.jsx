import React from "react";
import { Controller } from "react-hook-form";
import styledComponentsRegister from "../styledRegister";

const {
    FormContainer, FormTitle, 
    InputLabel, Input, InputContainer,
    ButtonContainer, Button, ButtonPrevious,
    ErrorMessage,
} = styledComponentsRegister;

const Step2 = ({ control, errors, nextStep, previousStep, verifyStepValid }) => {
    return (
        <>
            <FormContainer>
                <FormTitle>Nome e Sobrenome</FormTitle>

                <InputContainer>
                    <InputLabel>Nome</InputLabel>
                    <Controller
                        name="nome"
                        control={control}
                        rules={{
                            required: "Nome é obrigatório",
                            minLength: {
                                value: 2,
                                message: "O nome deve ter pelo menos 2 caracteres"
                            },
                            pattern: {
                                value: /^[A-Za-zà-öø-ÿ][A-Za-zà-öø-ÿ\s'-]*$/,
                                message: "Nome não deve conter números ou símbolos especiais"
                            }
                        }}
                        render={({ field }) => (
                            <>
                                <Input
                                    type="text"
                                    placeholder="Nome"
                                    {...field}
                                    onInput={(e) => {
                                        e.target.value = e.target.value
                                            .replace(/\d/g, '')
                                            .replace(/[@$%&*(){}[\]|\\/<>?!:;,+=#^~`]/g, '')
                                            .replace(/\s{2,}/g, ' ');
                                    }}
                                />
                                {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
                            </>
                        )}
                    />
                </InputContainer>

                <InputContainer>
                    <InputLabel>Sobrenome</InputLabel>
                    <Controller
                        name="sobrenome"
                        control={control}
                        rules={{
                            required: "Sobrenome é obrigatório",
                            minLength: {
                                value: 2,
                                message: "O sobrenome deve ter pelo menos 2 caracteres"
                            },
                            pattern: {
                                value: /^[A-Za-zà-öø-ÿ][A-Za-zà-öø-ÿ\s'-]*$/,
                                message: "O sobrenome não deve conter números ou símbolos especiais"
                            }
                        }}
                        render={({ field }) => (
                            <>
                                <Input
                                    type="text"
                                    placeholder="Sobrenome"
                                    {...field}
                                    onInput={(e) => {
                                        e.target.value = e.target.value
                                            .replace(/\d/g, '')
                                            .replace(/[@$%&*(){}[\]|\\/<>?!:;,+=#^~`]/g, '')
                                            .replace(/\s{2,}/g, ' ');
                                    }}
                                />
                                {errors.sobrenome && <ErrorMessage>{errors.sobrenome.message}</ErrorMessage>}
                            </>
                        )}
                    />
                </InputContainer>

                <ButtonContainer>
                    <ButtonPrevious type="button" onClick={previousStep}>Voltar</ButtonPrevious>
                    <Button
                        type="button"
                        onClick={nextStep}
                        disabled={!verifyStepValid()}
                    >
                        Próxima
                    </Button>
                </ButtonContainer>
            </FormContainer>
        </>
    )

}

export default Step2;