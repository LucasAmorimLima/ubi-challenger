<p align="center">
    <h2 align="center">Lucas Amorim Lima</h2>
</p> 
<p align="center">Personal Expense Management</p>

## :rocket: Quick start

### Step 1: Clone o repositório 

Fork o repositório. em seguida, clone-o localmente fazendo:

```bash
https://github.com/LucasAmorimLima/Tindin-Challenger-Fase2
```

### Step 2: Instalando as dependências 

Entre no diretório

```bash
cd ubi-challenger
```

Instalando todas as dependências 
```bash
npm install
```

### Step 3: Iniciando o server de desenvolvimento

Para iniciar o server de desenvolvimento exculte:
```
npm run dev
```

Após rodar o servidor de desenvolvimento a API deve estar disponível em: https://localhost:3333

### Step 4: Criando Usuários

Antes de começar deve-se alterar as configurações do banco de dados para a sua preferência no arquivo ormconfig.json, estou usando 
```
   "type": "mysql",
   "host": "localhost",
   "port": 3306,
   "username": "root",
   "password": "123456789",
   "database": "ubi_challenger",
```

Acesse https://localhost:3333/users/add
para adicionar um novo usuário

Exemplp em json:
```
{
    email:"ubistart@gmail.com"
    password:"password"
    role: "users" ou "adm"
}
```
o parâmetro role define se é um usuário com permições normais ou um administrador

## :open_file_folder: O que têm dentro?

Um rápido overview da estrutura do projeto
    .
    ├── api
    │   ├───controller
    │   ├───entity
    │   └───services
    ├── configs
    ├── routes
    |── tests

## Bibliotecas e Frameworks ultilizados

1. Express
2. Mysql
3. JWT
4. Lodash
5. Swagger
6. Jest
7. typescript
8. Joi
9. Axios
10. TypeORM



## Explicações

1. Express
  
  Usei o express, mesmo não sendo o framework mais produtivo para mostrar meus conhecimento na base do Node,
  framework como NestJS tem um desenvolvimento de APIs mais opinado, entretando também desenvolvo em NestJS.
  
  
2. JWT

  Json web token é uma forma de verificação de acesso em uma API, bastante usada em projetos e também uma requisição do desafio.
  
3. lodash

  É uma biblioteca para manipulação de arrays, gosto de usá-la porque as operações de array se tornam mais concisas e evitam código adicional.
  
4. Swagger

  Ultilizo para fazer a documentação dos projetos sendo que também é possível testa-la, está funcionalidade considero muito importante pois o FrontEnd irá saber extamente como é o retormo recebido dos endpoints.
  
5. Typescript

  Umas das pricipais vantagens do Typescript é a detecção de erros durante o desenvolvimento é possivel também ultilizar o IntelliSense da IDE facilitando ainda mais o desenvolvimento,  o  Typescript também conta com algumas funções que ainda não são nativas no node, além de ajudar na manutenabilidade do código, por ser uma estrutura mais tipada.
  
6. Joi

  Responsáveis pelas validações dos endpoints, faz o tratamento dos dados enviados para a API para garantir que são os dados esperados, além de evitar erros internos na aplicação.
    
7. TypeORM

  É um ORM(Object-Relational Mapping) bastante famoso e ultilizado em projetos, decidir ultilizar ele pela facilidade de interação e configuração em node.
    
8. Moment

  Biblioteca resposável por manipulação e criação de data, operações com datas sempre são complicadas, pelo menos eu me enrolo um pouco, moment me ajuda facilitando a manipulação delas.

## Swagger

Depois que a aplicação é iniciada, voçê pode ver a documentação do projeto acessando :
```
localhost/3333/api-docs
```
## Insomnia 

Também é possível acessar a documentação pelo insomnia, clicando no botão abaixo é possível baixa-la

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Ubi-Challenger&uri=https%3A%2F%2Fgithub.com%2FLucasAmorimLima%2FLucasAmorimLima%2Fblob%2Fmain%2FInsomnia_2022-01-28.json)

