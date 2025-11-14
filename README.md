# NestJS para Next.js API

Esta é uma API backend construída com [NestJS](https://nestjs.com/), projetada para servir como a base para uma aplicação frontend, como [Next.js](https://nextjs.org/). A API inclui funcionalidades completas para gerenciamento de usuários, autenticação, um sistema de blog e upload de arquivos.

## Arquitetura

O projeto segue a arquitetura modular padrão do NestJS, com uma clara separação de responsabilidades:

- **`AppModule`**: O módulo raiz que importa e configura todos os outros módulos. Também configura provedores globais, como o filtro de exceção e o limitador de taxa.
- **`UserModule`**: Gerencia as operações de CRUD (Criar, Ler, Atualizar, Deletar) para usuários.
- **`AuthModule`**: Lida com a autenticação de usuários, fornecendo um endpoint de login que retorna um token JWT.
- **`PostModule`**: Gerencia as postagens do blog, permitindo que usuários autenticados criem e gerenciem suas próprias postagens.
- **`UploadModule`**: Gerencia o upload de arquivos, com um endpoint para upload de imagens.
- **`CommonModule`**: Fornece serviços comuns, como o `HashingService` para hashing de senhas.

## Tecnologias Utilizadas

- **Framework**: [NestJS](https://nestjs.com/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Banco de Dados**: [TypeORM](https://typeorm.io/) com [SQLite](https://www.sqlite.org/index.html)
- **Autenticação**: [JWT](https://jwt.io/) com [Passport](http://www.passportjs.org/)
- **Validação**: [class-validator](https://github.com/typestack/class-validator) e [class-transformer](https://github.com/typestack/class-transformer)
- **Segurança**: [Helmet](https://helmetjs.github.io/) para proteção de cabeçalhos HTTP e `@nestjs/throttler` para limitação de taxa.
- **Upload de Arquivos**: [Multer](https://github.com/expressjs/multer) para manipulação de `multipart/form-data`.
- **Linting e Formatação**: [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/) para qualidade e consistência de código.

## Funcionalidades

### Gerenciamento de Usuários

- **`POST /user`**: Cria um novo usuário.
- **`GET /user/me`**: Obtém o perfil do usuário autenticado.
- **`PATCH /user/me`**: Atualiza o perfil do usuário autenticado (nome, e-mail).
- **`PATCH /user/me/password`**: Atualiza a senha do usuário autenticado.
- **`DELETE /user/me`**: Deleta a conta do usuário autenticado.

### Autenticação

- **`POST /auth/login`**: Realiza o login com e-mail e senha para obter um token JWT.
- Rotas protegidas com autenticação JWT.
- Funcionalidade de `forceLogout` que força o usuário a fazer login novamente após alterar seu e-mail ou senha.

### Gerenciamento de Postagens (Blog)

- **`POST /post/me`**: Cria uma nova postagem (associada ao usuário autenticado).
- **`GET /post/me`**: Obtém todas as postagens do usuário autenticado.
- **`GET /post/me/:id`**: Obtém uma única postagem do usuário autenticado.
- **`PATCH /post/me/:id`**: Atualiza uma postagem do usuário autenticado.
- **`DELETE /post/me/:id`**: Deleta uma postagem do usuário autenticado.
- **`GET /post`**: Obtém todas as postagens publicadas (público).
- **`GET /post/:slug`**: Obtém uma única postagem publicada pelo seu slug (público).

### Upload de Arquivos

- **`POST /upload`**: Realiza o upload de um arquivo de imagem.
- O arquivo enviado é salvo no diretório `uploads`, organizado por data.
- A API retorna a URL do arquivo enviado.

## Como Iniciar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nestjs-for-nextjs.git
   cd nestjs-for-nextjs
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```
   PORT=3001
   JWT_SECRET=seu-segredo-jwt
   JWT_EXPIRATION=1d
   DB_DATABASE=./db.sqlite
   DB_SYNCHRONIZE=1
   DB_AUTO_LOAD_ENTITIES=1
   CORS_WHITELIST=http://localhost:3000
   ```

4. **Inicie a aplicação:**
   - **Modo de desenvolvimento:**
     ```bash
     npm run start:dev
     ```
   - **Modo de produção:**
     ```bash
     npm run build
     npm run start:prod
     ```
