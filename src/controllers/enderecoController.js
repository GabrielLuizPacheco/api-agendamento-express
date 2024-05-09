import endereco from "../models/Endereco.js";

class EnderecoController{

    static async listarEnderecos(req, res){
        
        try{
            const listaEnderecos = await endereco.find({})
            res.status(200).json(listaEnderecos); 
        }catch(error){
            res.status(500).json({message:`${error.message} - falha na requisição`});
        }
    };
    static async listarEnderecosPorEspecialidade(req, res){
        const especialidade = req.query.especialidade;
        const rgx = (pattern) => new RegExp(`.*${pattern}.*`);
        const searchRgx = rgx(especialidade);

        try{
            const enderecosPorEspecialidade = await endereco.find({$or: [{endereco:searchRgx }, {especialidade: searchRgx}]  }).limit(10);

            res.status(200).json(enderecosPorEspecialidade);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na busca`});
        }
    }
}

export default EnderecoController;
