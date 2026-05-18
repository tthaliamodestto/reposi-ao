import pool from "../config/db.js";

const produtoModel = {
    insert: async (pProduto) => {
        const sql = `
            INSERT INTO produtos 
            ( nomeProduto, valorProduto, vinculoImagem)
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
            SELECT 
                p.idProduto,
                p.nomeProduto,
                p.valorProduto,
                p.vinculoImagem
            FROM produtos 
        `;
        const [rows] = await pool.execute(sql);
        return rows;
    }
};

export default produtoModel;