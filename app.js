const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const os = require('os');

const app = express();
const port = 3000;

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

app.use(cors());

app.get('/api/parafusos', (req, res) => {
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
});

app.get('/api/comprimentos', (req, res) => {
  const query = 'SELECT DISTINCT comprimento FROM parafusos';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).json({ error: 'Erro ao buscar comprimentos disponíveis' });
      return;
    }
    const comprimentos = results.map(result => result.comprimento);
    res.json(comprimentos);
  });
});

app.get('/api/bitolas', (req, res) => {
  const query = 'SELECT DISTINCT bitola FROM parafusos';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).json({ error: 'Erro ao buscar bitolas disponíveis' });
      return;
    }
    const bitolas = results.map(result => result.bitola);
    res.json(bitolas);
  });
});

app.get('/api/acabamentos', (req, res) => {
  const query = 'SELECT DISTINCT acabamento FROM parafusos';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).json({ error: 'Erro ao buscar acabamentos disponíveis' });
      return;
    }
    const acabamentos = results.map(result => result.acabamento);
    res.json(acabamentos);
  });
});

app.get('/api/modelos', (req, res) => {
  const query = 'SELECT DISTINCT modelo FROM parafusos';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).json({ error: 'Erro ao buscar modelos disponíveis' });
      return;
    }
    const modelos = results.map(result => result.modelo);
    res.json(modelos);
  });
});

app.get('/api/roscas', (req, res) => {
  const query = 'SELECT DISTINCT rosca FROM parafusos';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).json({ error: 'Erro ao buscar roscas disponíveis' });
      return;
    }
    const roscas = results.map(result => result.rosca);
    res.json(roscas);
  });
});

app.get('/api/materiais', (req, res) => {
  const query = 'SELECT DISTINCT material FROM parafusos';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).json({ error: 'Erro ao buscar materiais disponíveis' });
      return;
    }
    const materiais = results.map(result => result.material);
    res.json(materiais);
  });
});

app.get('/api/hastes', (req, res) => {
  const query = 'SELECT DISTINCT haste FROM parafusos';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).json({ error: 'Erro ao buscar hastes disponíveis' });
      return;
    }
    const hastes = results.map(result => result.haste);
    res.json(hastes);
  });
});

app.get('/api/classes', (req, res) => {
  const query = 'SELECT DISTINCT classe FROM parafusos';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).json({ error: 'Erro ao buscar classes disponíveis' });
      return;
    }
    const classes = results.map(result => result.classe);
    res.json(classes);
  });
});

app.listen(port, '0.0.0.0', () => {
  const networkInterfaces = os.networkInterfaces();
  const ipv4Interfaces = Object.values(networkInterfaces).flat().filter(net => net.family === 'IPv4' && !net.internal);
  const ipAddress = ipv4Interfaces.length > 0 ? ipv4Interfaces[0].address : 'localhost';
  console.log(`Servidor rodando em http://${ipAddress}:${port}`);
});
