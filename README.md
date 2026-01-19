# 🔩 Sistema de Filtragem de Parafusos

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Sistema web para busca e filtragem de catálogo de parafusos com múltiplos critérios**

[Funcionalidades](#-funcionalidades) •
[Instalação](#-instalação) •
[Configuração](#-configuração) •
[Uso](#-uso) •
[API](#-api)

</div>

---

## 📋 Sobre o Projeto

Este sistema foi desenvolvido para otimizar o processo de busca e consulta de parafusos em um catálogo industrial. A aplicação permite filtrar produtos por diversos critérios técnicos, facilitando a localização rápida de itens específicos.

### 🎯 Problema Resolvido

Em ambientes industriais, localizar o parafuso correto em um catálogo extenso pode ser demorado e propenso a erros. Este sistema automatiza essa busca, permitindo filtros simultâneos por múltiplas características técnicas.

---

## ✨ Funcionalidades

- 🔍 **Busca por nome** - Pesquisa textual com suporte a múltiplos termos
- 📏 **Filtro por comprimento** - Seleção de medidas específicas
- ⚙️ **Filtro por bitola** - Diâmetros em polegadas e milímetros
- 🎨 **Filtro por acabamento** - Zincado, galvanizado, polido, etc.
- 🔧 **Filtro por modelo** - Sextavado, Allen, Francês, etc.
- 🔄 **Filtro por rosca** - Tipos de rosca disponíveis
- 📐 **Filtro por haste** - Rosca inteira (RI) ou rosca parcial (RP)
- 🏗️ **Filtro por material** - Aço carbono, inox, latão, etc.
- 📊 **Filtro por classe** - Resistência mecânica do parafuso
- 📄 **Paginação** - Carregamento progressivo dos resultados

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **MySQL** - Banco de dados relacional
- **CORS** - Middleware para Cross-Origin Resource Sharing
- **dotenv** - Gerenciamento de variáveis de ambiente

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização responsiva
- **JavaScript** - Interatividade e consumo de API

---

## 📦 Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [MySQL](https://www.mysql.com/) (v5.7 ou superior)
- [Git](https://git-scm.com/)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/sistema-filtragem-parafusos.git
   cd sistema-filtragem-parafusos
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o banco de dados**
   ```bash
   mysql -u root -p < database/schema.sql
   ```

4. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   ```
   Edite o arquivo `.env` com suas credenciais do MySQL.

5. **Inicie o servidor**
   ```bash
   npm start
   ```

6. **Acesse a aplicação**
   ```
   http://localhost:3000
   ```

---

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Banco de Dados
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=produtosdb

# Servidor
PORT=3000
```

---

## 🚀 Uso

### Interface Web

1. Acesse `http://localhost:3000` no navegador
2. Utilize os filtros disponíveis para refinar a busca
3. Clique em **"Filtrar"** para executar a pesquisa
4. Use **"Mostrar mais"** para carregar mais resultados

### Acesso em Rede Local

O servidor é configurado para aceitar conexões de outros dispositivos na mesma rede. O IP local é exibido no console ao iniciar o servidor.

---

## 📡 API

### Endpoints Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/parafusos` | Lista parafusos com filtros |
| GET | `/api/comprimentos` | Lista comprimentos disponíveis |
| GET | `/api/bitolas` | Lista bitolas disponíveis |
| GET | `/api/acabamentos` | Lista acabamentos disponíveis |
| GET | `/api/modelos` | Lista modelos disponíveis |
| GET | `/api/roscas` | Lista tipos de rosca |
| GET | `/api/hastes` | Lista tipos de haste |
| GET | `/api/materiais` | Lista materiais disponíveis |
| GET | `/api/classes` | Lista classes disponíveis |

### Parâmetros de Busca

```
GET /api/parafusos?nome=sextavado&bitola=8mm&page=1&limit=5
```

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `nome` | string | Busca por nome (aceita múltiplos termos) |
| `comprimento` | string | Filtro por comprimento |
| `bitola` | string | Filtro por bitola |
| `acabamento` | string | Filtro por acabamento |
| `modelo` | string | Filtro por modelo |
| `rosca` | string | Filtro por tipo de rosca |
| `haste` | string | Filtro por tipo de haste |
| `material` | string | Filtro por material |
| `classe` | string | Filtro por classe |
| `page` | number | Número da página (padrão: 1) |
| `limit` | number | Itens por página (padrão: 5) |

---

## 📁 Estrutura do Projeto

```
sistema-filtragem-parafusos/
├── app.js              # Servidor Express e rotas da API
├── package.json        # Dependências e scripts
├── .env.example        # Exemplo de variáveis de ambiente
├── .gitignore          # Arquivos ignorados pelo Git
├── database/
│   └── schema.sql      # Script de criação do banco
└── public/
    ├── index.html      # Interface do usuário
    └── styles.css      # Estilos da aplicação
```

---

## 🔮 Melhorias Futuras

- [ ] Adicionar autenticação de usuários
- [ ] Implementar CRUD completo para parafusos
- [ ] Adicionar exportação para Excel/PDF
- [ ] Criar dashboard com estatísticas
- [ ] Implementar cache com Redis
- [ ] Adicionar testes automatizados
- [ ] Containerização com Docker

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abrir um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Desenvolvido com ❤️ para otimizar processos industriais

</div>
