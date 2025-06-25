import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

function useRegister() {
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange'
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            
            const response = await axios.post('http://localhost:3000/api/auth/register', data);

            toast.success('Cadastro realizado com sucesso!', {
                position: "top-right",
                autoClose: 2000
            });

            setTimeout(() => {
                navigate('/entrar');
            }, 2500);

        } catch (error) {
            if (error.response) {
                let errorMessage = 'Não foi possível realizar o cadastro.';

                if (error.response.status === 400) {
                    errorMessage = 'Preencha todos os campos corretamente.';
                } else if (error.response.status === 409) {
                    errorMessage = 'Email, CPF ou telefone já cadastrados.';
                } else if (error.response.status === 500) {
                    errorMessage = 'Erro interno do servidor. Tente novamente.';
                }

                toast.error(errorMessage, {
                    position: "top-right",
                    autoClose: 4000
                });

                console.error('Erro do servidor:', error.response.data.message);
            } else {
                toast.error('Erro de conexão. Tente novamente.', {
                    position: "top-right",
                    autoClose: 4000
                });

                console.error('Erro de rede:', error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        control,
        loading
    };
}

export default useRegister;