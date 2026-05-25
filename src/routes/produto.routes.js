import { Router } from "express";
import uploadImage from "../middlewares/uploadImage.middleware.js";
import produtoController from "../controllers/produto.controller.js";

const produtoRoutes = Router();


produtoRoutes.get('/', produtoController.listar); 

produtoRoutes.get('/:id', produtoController.buscarPorId); 

produtoRoutes.post('/', uploadImage, produtoController.criar);

produtoRoutes.post('/images', uploadImage, produtoController.upload);

produtoRoutes.put('/:id', uploadImage, produtoController.alterar);

produtoRoutes.delete('/:id', produtoController.deletar); 


export default produtoRoutes;