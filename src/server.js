import express from "express";
import produtoRoutes from "./routes/produto.routes.js";
import "dotenv";

const app = express();

app.use(express.json()); 

app.use('/produtos', produtoRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


//app.listen(process.env.SERVER_PORT, () => {
  //  console.log(`Servidor rodando em http://localhost:${process.env.SERVER_PORT}`);
// });