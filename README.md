# PROJETO VALORIZA
Projeto de um back-end de uma plataforma para promover o reconhecimento entre companheiros de equipe.<br>
Este projeto foi desenvolvido na trilha de NodeJS durante a NLW#06 e como diferenciais, propus o uso do Prisma como ORM e valizações dos parâmetros enviados com o ZOD.

## Regras da aplicação
- Cadastro de usuário<br>
    - [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail
    - [x] Não é permitido cadastrar usuário sem e-mail
    - [x] Validações de email válido
    - [x] Validações de password do usuário
        - [x] Mínimo de 4 caracteres
        - [x] Máximo de 16 caracteres
        - [x] Senha criptografada

- Autenticação do usuário<br>
    - [x] Autenticação do usuário utilizando jwt

- Cadastro de TAG<br>
    - [x] Não é permitido cadastrar tag sem nome
    - [x] Não é permitido cadastrar mais de uma tag com o mesmo nome
    - [x] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios<br>
    - [x] Não é permitido um usuário cadastrar um elogio para si próprio
    - [x] Não é permitido cadastrar elogios para usuários inválidos
    - [x] O usuário precisa estar autenticado na aplicação
    - [x] Validações da mensagem enviada:
        - [x] Mínimo de 10 caracteres
        - [x] Máximo de 220 caracteres

- Listando Elogios
    - [x] Listar por elogios enviados
    - [x] Listar por elogios recebidos

## Rotas
- Criar novo usuário
```bash
POST /users
```

- Autenticação do usuário
```bash
POST /login
```

- Criar uma tag (apenas admin)
```bash
POST /tags
```

- Criar Elogio
```bash
POST /compliments
```

- Lista elogios recebidos
```bash
GET /users/compliments/receive
```

- Lista elogios enviados
```bash
GET /users/compliments/send
```


## Diagrama ERD
<div align="center">
    <img width="50%" alt="Diagrama ERD" src="./prisma/ERD.svg">
</div>


## Instalação
Faça o clone do repositório e acessar na pasta server

```bash
git clone https://github.com/RenanFachin/RS_NLW_ProjetoValoriza
```

Instalando as dependências
```bash
npm i
```

Rodando o banco de dados
```bash
npx prisma migrate dev
```

Adicionar as variáveis de ambiente da aplicação

Rodando o servidor
```bash
npm run dev
```