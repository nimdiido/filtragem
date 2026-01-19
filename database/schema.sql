-- =============================================
-- Script de criação do banco de dados
-- Sistema de Filtragem de Parafusos
-- =============================================

-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS produtosdb;

USE produtosdb;

-- Criar tabela de parafusos
CREATE TABLE IF NOT EXISTS parafusos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    referencia VARCHAR(50) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    comprimento VARCHAR(20),
    bitola VARCHAR(20),
    acabamento VARCHAR(50),
    modelo VARCHAR(50),
    rosca VARCHAR(20),
    haste VARCHAR(20),
    material VARCHAR(50),
    classe VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Índices para otimização de consultas
CREATE INDEX idx_nome ON parafusos (nome);

CREATE INDEX idx_modelo ON parafusos (modelo);

CREATE INDEX idx_bitola ON parafusos (bitola);

CREATE INDEX idx_comprimento ON parafusos (comprimento);

-- =============================================
-- Dados de exemplo (opcional)
-- =============================================

INSERT INTO
    parafusos (
        referencia,
        nome,
        comprimento,
        bitola,
        acabamento,
        modelo,
        rosca,
        haste,
        material,
        classe
    )
VALUES (
        'PAR001',
        'Parafuso Sextavado Aço Carbono',
        '50mm',
        '8mm',
        'Zincado',
        'Sextavado',
        'Grossa',
        'RI',
        'Aço Carbono',
        '8.8'
    ),
    (
        'PAR002',
        'Parafuso Allen Inox',
        '30mm',
        '6mm',
        'Polido',
        'Allen',
        'Fina',
        'RP',
        'Inox 304',
        'A2-70'
    ),
    (
        'PAR003',
        'Parafuso Francês Galvanizado',
        '1"',
        '1/4"',
        'Galvanizado',
        'Francês',
        'UNC',
        'RI',
        'Aço Carbono',
        '5.8'
    );