import mongoose from "mongoose";

const enderecoSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    endereco:{type:String},
    especialidade:{type:String},
    medico:{type:String}
},{versionKey:false});

const endereco = mongoose.model("enderecos", enderecoSchema);

export default endereco;
