import produtoModel from "../models/produto.models.js"; 
import path from "path";

const produtoController = {
    criar: async (req, res) => {
        console.log("=== DADOS RECEBIDOS NO SERVIDOR ===");
    console.log("Arquivo (req.file):", req.file);
    console.log("Campos de Texto (req.body):", req.body);
        try {
            const { nomeProduto, valorProduto } = req.body;
            
            if (!nomeProduto || !valorProduto) {
                return res.status(400).json({ erro: "Campos obrigatórios inválidos" });
            }

            const vinculoImagem = req.file ? req.file.filename : null;

            const resultado = await produtoModel.insert({
                nomeProduto,
                valorProduto,
                vinculoImagem
            });

        
            const novoProduto = {
                id: resultado.insertId,
                nomeProduto,
                valorProduto,
                vinculoImagem
            };

            return res.status(201).json({ mensagem: "Produto cadastrado com sucesso", produto: novoProduto });
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao cadastrar produto", detalhes: error.message });
        }
    },

    upload: async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ erro: "Nenhum arquivo enviado" });
            }
            return res.status(200).json({ 
                mensagem: "Arquivo enviado com sucesso", 
                arquivo: req.file.filename 
            });
        } catch (error) {
            return res.status(500).json({ erro: "Erro no upload", detalhes: error.message });
        }
    },

    listar: async (req, res) => {
        try {
       
            const produtos = await produtoModel.selectAll();
            return res.status(200).json(produtos);
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao listar produtos", detalhes: error.message });
        }
    }

};

export default produtoController;