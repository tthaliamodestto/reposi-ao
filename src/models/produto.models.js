import pool from "../config/db.js";

const produtoModel = {
    insert: async (pProduto) => {
        const sql = `
            INSERT INTO produtos 
            (nomeProduto, valorProduto, vinculoImagem)
            VALUES (?, ?, ?);
        `;
        const values = [
            pProduto.nomeProduto,
            pProduto.valorProduto,
            pProduto.vinculoImagem
        ];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },

    selectAll: async () => {
        const sql = `
            SELECT id , nomeProduto, valorProduto, vinculoImagem
            FROM produtos;
        `;
        const [rows] = await pool.execute(sql);
        return rows;
    },

    selectById: async (id) => {
        const sql = `
            SELECT id, nomeProduto, valorProduto, vinculoImagem
            FROM produtos 
            WHERE id = ?;
        `;
        const [rows] = await pool.execute(sql, [id]);
        return rows[0];
    },

    update: async (id, pProduto) => {
        const sql = `
            UPDATE produtos 
            SET nomeProduto = ?, valorProduto = ?, vinculoImagem = ?
            WHERE id = ?;
        `;
        const values = [
            pProduto.nomeProduto,
            pProduto.valorProduto,
            pProduto.vinculoImagem,
            id
        ];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },

    delete: async (id) => {
        const sql = `
            DELETE FROM produtos 
            WHERE id = ?;
        `;
        const [rows] = await pool.execute(sql, [id]);
        return rows;
    }
};

export default produtoModel;