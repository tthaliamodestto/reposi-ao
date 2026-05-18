
import { Router } from "express";
import uploadImage from "../middlewares/uploadImage.middleware.js";
import produtoController from "../controllers/produto.controller.js";
import uploadFile from "../middlewares/uploadFile.middleware.js";

const produtoRoutes = Router();


produtoRoutes.get('/', produtoController.listar); 
produtoRoutes.post('/', uploadImage, produtoController.criar);
produtoRoutes.post('/images', uploadImage, produtoController.upload);
produtoRoutes.post('/docs', uploadFile, produtoController.upload);

export default produtoRoutes;