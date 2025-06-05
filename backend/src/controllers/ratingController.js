
const {AppDataSource} = require("../config/db")
const Avaliacao = require("../entity/Avaliacao")
const rating = require("../entity/Avaliacao")

class RatingController {
    async createRating(req, res){
        const {nota, comentario, origem, measuredId, vagaId} = req.body
        const valuerId = req.user ? req.user.id : null

        if (!valuerId) {
            return res.status(401).json({success: false, message: "Usuario não autenticado"})
        }
        if (nota === undefined || !origem || !measuredId) {
            return res.status(400).json({
                success: false,
                message: "Campos obrigatorios(nota, origem, measuredId) não fornecidos."
            });
        }

         const allowedOrigens = ["usuario_para_empresa", "empresa_para_usuario", "usuario_para_usuario"];
         if (!allowedOrigens.includes(origem)) {
         return res.status(400).json({
            success: false,
            message: `Valor inválido para 'origem'. Permitidos: ${allowedOrigens.join(', ')}`
        });
    }
        const ratingRepository = AppDataSource.getRepository(Avaliacao)
        try {
            const newRatingData = { 
                nota,
                comentario,
                origem,
                avaliador: { id: valuerId },
                avaliado: { id: parseInt(measuredId) },
            };

            if (vagaId) {
                newRatingData.vaga = {id: parseInt(vagaId)}
            }

            const newRating = ratingRepository.create(newRatingData)
             await ratingRepository.save(newRating)
            
             return res.status(201).json({
                success: true,
                message: "Avaliação enviada com sucesso",
                 data: newRating
      });
        } catch (error) {
            console.error('erro ao salvar avaliação', error)
            return res.status(500).json({
                success: false,
                 message: "Erro ao criar a avaliação",
                 error: error.message
      });
        }
    }

async getAverageCompanyRatings(req, res) {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ message: "ID da empresa obrigatório" });
    }
    try {
        const ratingRepository = AppDataSource.getRepository(Avaliacao);

        const result = await ratingRepository.createQueryBuilder("avaliacao")
            .select("AVG(avaliacao.nota)", "averageRatings") 
            .where("avaliacao.avaliadoId = :id", { id: parseInt(userId) }) // userId é o avaliadoId da empresa
            .andWhere("avaliacao.origem = :origemTipo", { origemTipo: "usuario_para_empresa" })
            .getRawOne();

       
        const averageRating = result && result.averageRatings ? parseFloat(result.averageRatings) : 0; 
                                        
        
        
        if (!result || result.averageRatings === null) { 
                        
            return res.status(200).json({
                message: `Nenhuma avaliação como 'empresa' encontrada para o usuário com ID ${userId}, ou o usuário não foi avaliado nesse contexto.`,
                averageRating: 0
            });
        }

        res.status(200).json({
            message: `Média de notas da empresa (usuário ID ${userId}) calculada com sucesso.`,
            averageRating: averageRating
        });
    } catch (error) {
        
        console.error("Erro ao calcular a média de notas da empresa:", error); 
        res.status(500).json({
            message: "Erro interno do servidor ao calcular a média de notas da empresa.", 
            error: error.message
        });
    }
}

    async getAverageEmployeeRatings(req, res) {
        const {userId} = req.params

        if (!userId) {
            return res.status(400).json({ message: "ID do usuario (empregado) é obrigatorio."});
        }
        try {
            const ratingRepository = AppDataSource.getRepository(Avaliacao)

            const result = await ratingRepository.createQueryBuilder("avaliacao")

            .select("AVG(avaliacao.nota)", "averageRating")
            .where("avaliacao.avaliadoId = :id", {id: parseInt(userId)})
            .andWhere("avaliacao.origem = :origemTipo", {origemTipo: "empresa_para_usuario"})
            .getRawOne()

        const averageRating = result && result.averageRating ? parseFloat(result.averageRating) : 0;

        if (!result || result.averageRating === null) {
            return res.status(200).json({
                message: `nenhuma avaliacao como empregado (feita por empresa) emcontrada para o usuario com ID ${userId}`,
                averageRating: 0
            })
        }
            res.status(200).json({
                message: `Média de notas do empregado (usuário ID ${userId}) calculada com sucesso.`,
                averageRating: averageRating
            });
        } catch (error) {
            console.error("Erro ao calcular a média de notas do empregado:", error);
            res.status(500).json({
                message: "Erro interno do servidor ao calcular a média de notas do empregado.",
                error: error.message
            });
        }
    }

     async getAverageUserToUserRating(req, res) {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ message: "ID do usuário é obrigatório." });
        }

        try {
            const ratingRepository = AppDataSource.getRepository(Avaliacao);

            const result = await ratingRepository.createQueryBuilder("avaliacao")
                .select("AVG(avaliacao.nota)", "averageRating") 
                .where("avaliacao.avaliadoId = :id", { id: parseInt(userId) })
                .andWhere("avaliacao.origem = :origemTipo", { origemTipo: "usuario_para_usuario" })
                .getRawOne();

            const averageRating = result && result.averageRating ? parseFloat(result.averageRating) : 0;

            if (!result || result.averageRating === null) {
                return res.status(200).json({
                    message: `Nenhuma avaliação de 'usuário para usuário' encontrada para o usuário com ID ${userId}.`,
                    averageRating: 0
                });
            }

            res.status(200).json({
                message: `Média de notas de 'usuário para usuário' para o usuário ID ${userId} calculada com sucesso.`,
                averageRating: averageRating
            });

        } catch (error) {
            console.error("Erro ao calcular a média de notas 'usuário para usuário':", error);
            res.status(500).json({
                message: "Erro interno do servidor ao calcular a média de notas 'usuário para usuário'.",
                error: error.message
            });
        }
    }
}



module.exports = RatingController