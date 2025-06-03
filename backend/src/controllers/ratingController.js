const { Await } = require("react-router-dom")
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

         const allowedOrigens = ["usuario_para_empresa", "empresa_para_usuario"];
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

async getAverageFirmRatings(req, res) {
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
}

module.exports = RatingController