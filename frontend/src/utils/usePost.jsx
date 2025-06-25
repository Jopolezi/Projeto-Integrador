import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

const usePost = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        defaultValues: {
            title: '',
            category: '',
            duration: '',
            urgency: '',
            workModel: '',
            location: '',
            budget: '',
            paymentType: '',
            contactPhone: '',
            contactEmail: '',
            description: '',
            requirements: '',
            acceptTerms: false,
            featuredAd: false
        }
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            
            const response = await axios.post('http://localhost:3000/api/posts/create', data);

            toast.success('Bico publicado com sucesso!', {
                position: "top-right",
                autoClose: 2000
            });

            reset();

            setTimeout(() => {
                navigate('/dashboard');
            }, 2500);

        } catch (error) {
            if (error.response) {
                let errorMessage = 'Não foi possível publicar o bico.';

                if (error.response.status === 400) {
                    errorMessage = 'Preencha todos os campos corretamente.';
                } else if (error.response.status === 401) {
                    errorMessage = 'Você precisa estar logado para publicar.';
                } else if (error.response.status === 422) {
                    errorMessage = 'Dados inválidos. Verifique as informações.';
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
        loading
    };
};

export default usePost;