const validate = require('class-validator') //biblioteca que confere se os dados respeitam as regras dadas no seu DTO
const plainToInstance = require('class-transformer') //tranforma o req.body em uma intancia real de DTO
const { object } = require('framer-motion/client')

function validarDTO(DTOclass) { //recebe meu DTO e volta um middleware para usar nas rotas 
    return async (req, res, next) => {
        const dtoObject = plainToInstance(DTOclass, req.body)//plainToInstance transforma o req.body em uma instância da classe DTO que foi passado
//isso tudo é feito pois o class-tranformer nao recebe objeto sem ser da classe do tipo DTO
        const errors = await validate(dtoObject)

        if (errors.length > 0) {
            const errorMessage = errors.map(err => object.value(err.contraints)).flat()//flat é usado para 
            return res.status(400).json({ errors: errorMessage })
        }
        req.body = dtoObject
    }
}

module.exports = validarDTO