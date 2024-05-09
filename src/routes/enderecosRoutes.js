import express from 'express';
import EnderecoController from '../controllers/enderecoController.js';

const routes = express.Router();

routes.get('/enderecos/busca', EnderecoController.listarEnderecosPorEspecialidade);
routes.get('/enderecos', EnderecoController.listarEnderecos);

export default routes;