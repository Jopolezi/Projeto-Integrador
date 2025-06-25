const { AppDataSource } = require("../config/db");
const Avaliacao = require("../entity/Avaliacao");

class RatingController {

    async createRating(req, res) {
        const { nota, comentario, measuredId, vagaId } = req.body;
        const valuerId = req.user ? req.user.id : null;

        if (!valuerId) {
            return res.status(401).json({ success: false, message: "Usuário não autenticado" });
        }
        if (nota === undefined || !measuredId) {
            return res.status(400).json({
                success: false,
                message: "Campos obrigatórios (nota, measuredId) não fornecidos."
            });
        }
        
        const ratingRepository = AppDataSource.getRepository(Avaliacao);
        try {
            const newRatingData = {
                nota,
                comentario,
                avaliador: { id: valuerId },
                avaliado: { id: parseInt(measuredId) },
            };

            if (vagaId) {
                newRatingData.vaga = { id: parseInt(vagaId) };
            }

            const newRating = ratingRepository.create(newRatingData);
            await ratingRepository.save(newRating);
            
            return res.status(201).json({
                success: true,
                message: "Avaliação enviada com sucesso",
                data: newRating
            });
        } catch (error) {
            console.error('Erro ao salvar avaliação:', error);
            return res.status(500).json({
                success: false,
                message: "Erro ao criar a avaliação",
                error: error.message
            });
        }
    }

    async getAverageUserRating(req, res) {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ message: "ID do usuário é obrigatório." });
        }

        try {
            const ratingRepository = AppDataSource.getRepository(Avaliacao);

            const result = await ratingRepository.createQueryBuilder("avaliacao")
                .select("AVG(avaliacao.nota)", "averageRating")
                // CORREÇÃO: Alterado de 'avaliadoId' para 'avaliado_id' para corresponder ao nome da coluna no banco de dados.
                .where("avaliacao.avaliado_id = :id", { id: parseInt(userId) })
                .getRawOne();

            const averageRating = result && result.averageRating ? parseFloat(result.averageRating) : 0;

            if (!result || result.averageRating === null) {
                return res.status(200).json({
                    message: `Nenhuma avaliação encontrada para o usuário com ID ${userId}.`,
                    averageRating: 0
                });
            }

            res.status(200).json({
                message: `Média de notas para o usuário ID ${userId} calculada com sucesso.`,
                averageRating: averageRating
            });

        } catch (error) {
            console.error("Erro ao calcular a média de notas do usuário:", error);
            res.status(500).json({
                message: "Erro interno do servidor ao calcular a média de notas.",
                error: error.message
            });
        }
    }

}

module.exports = RatingController;
