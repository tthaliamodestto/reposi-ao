import produtoModel from "../models/produto.models.js"; 
import path from "path";

const produtoController = {
    criar: async (req, res) => {
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

    listar: async (req, res) => {
        try {
            const produtos = await produtoModel.selectAll();
            return res.status(200).json(produtos);
        } catch (error) {
         
            
            return res.status(500).json({ erro: "Erro ao listar produtos"});
        }
    },

    buscarPorId: async (req, res) => {
        try {
            const { id } = req.params;
            const produto = await produtoModel.selectById(id);

            if (!produto) {
                return res.status(404).json({ erro: "Produto não encontrado" });
            }

            return res.status(200).json(produto);
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao buscar produto", detalhes: error.message });
        }
    },

    alterar: async (req, res) => {
        try {
            const { id } = req.params;
            const { nomeProduto, valorProduto } = req.body;

            const produtoExistente = await produtoModel.selectById(id);
            if (!produtoExistente) {
                return res.status(404).json({ erro: "Produto não encontrado" });
            }

            const vinculoImagem = req.file ? req.file.filename : produtoExistente.vinculoImagem;

            await produtoModel.update(id, {
                nomeProduto: nomeProduto || produtoExistente.nomeProduto,
                valorProduto: valorProduto || produtoExistente.valorProduto,
                vinculoImagem
            });

            return res.status(200).json({ mensagem: "Produto atualizado com sucesso" });
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao alterar produto", detalhes: error.message });
        }
    },

    deletar: async (req, res) => {
        try {
            const { id } = req.params;

            const produtoExistente = await produtoModel.selectById(id);
            if (!produtoExistente) {
                return res.status(404).json({ erro: "Produto não encontrado" });
            }

            await produtoModel.delete(id);
            return res.status(200).json({ mensagem: "Produto deletado com sucesso" });
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao deletar produto", detalhes: error.message });
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
    }
};

export default produtoController;