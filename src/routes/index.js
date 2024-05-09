import express from 'express';
import endereco from './enderecosRoutes.js'

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso se Node.js"));

    app.use(express.json(), endereco);
    
};
export default routes;
