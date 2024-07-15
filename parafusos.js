const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ferrero441',
    database: 'produtosdb'
});

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL com sucesso!');
});

module.exports = (req, res) => {
    const { nome, comprimento, bitola, acabamento, modelo, rosca, haste, material, classe } = req.query;
    let query = 'SELECT * FROM parafusos WHERE 1';

    if (nome) {
        const terms = nome.split(' ');
        const likeClauses = terms.map(term => `nome LIKE '%${term}%'`).join(' AND ');
        query += ` AND (${likeClauses})`;
    }
    if (comprimento) {
        query += ` AND comprimento = '${comprimento}'`;
    }
    if (bitola) {
        query += ` AND bitola = '${bitola}'`;
    }
    if (acabamento) {
        query += ` AND acabamento = '${acabamento}'`;
    }
    if (modelo) {
        query += ` AND modelo = '${modelo}'`;
    }
    if (rosca) {
        query += ` AND rosca = '${rosca}'`;
    }
    if (haste) {
        query += ` AND haste = '${haste}'`;
    }
    if (material) {
        query += ` AND material = '${material}'`;
    }
    if (classe) {
        query += ` AND classe = '${classe}'`;
    }

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao executar consulta:', err);
            res.status(500).json({ error: 'Erro ao buscar parafusos' });
            return;
        }
        res.json(results);
    });
};
