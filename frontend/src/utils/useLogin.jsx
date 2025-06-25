import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

function useLogin() {
const { register, handleSubmit, formState: { errors } } = useForm(
    { mode: 'onChange' }
)

const navigate = useNavigate()
const [loading, setLoading] = useState(false)

const onSubmit = async (data) => {
    try {
        setLoading(true)
        const response = await axios.post('http://localhost:3000/api/auth/login', data)

        const { token } = response.data

        toast.success('Bem-vindo de volta!', {
            position: "top-right",
            autoClose: 2000
        });

        localStorage.setItem('token', token)

        setTimeout(() => {
            navigate('/')
        }, 2500)

    } catch (error) {
        if (error.response) {
            let errorMessage = 'Não foi possível realizar o login.';

            if (error.response.status === 401) {
                errorMessage = 'Email ou senha incorretos.';
            } else if (error.response.status === 429) {
                errorMessage = 'Muitas tentativas. Aguarde alguns minutos.';
            } else if (error.response.status === 500) {
                errorMessage = 'Erro interno do servidor. Tente novamente.';
            }

            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 4000
            });

            console.error('Erro do servidor:', error.response.data.message)
        } else {
            toast.error('Erro de conexão. Tente novamente.', {
                position: "top-right",
                autoClose: 4000
            });

            console.error('Erro de rede:', error.message)
        } 
    } finally {
        setLoading(false)
    }
}

return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading
}
}

export default useLogin