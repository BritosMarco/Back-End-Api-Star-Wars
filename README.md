# Back-End-Api-Star-Wars

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApxB94-qOTrp3hbQGk1UlgCUHCegSh4UDeAs4IRXEzMspu2BQrtEeCdahU19SL_X8mUc&usqp=CAU" alt="Star Wars Logo"; style= zomm: "33%;"/>

> API criada como `Projeto de Avaliação Final` do curso de Back End Noje.Js Módulo III https://blueedtech.com.br/, utilizando a linguagem de programação JavaScript e o banco de dados MongoDB. Nessa API eu crio um CRUD completo de personagens do filme Star Wars.

Para utilizar o projeto faça o dowload do arquivo zipado, ou faça o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador(a pasta que contém o arquivo package.json), para baixar as dependencias do projeto.

## Executando o projeto

_Essa API utiliza o mongodb como banco de dados e o mongoose como ODM, então antes de testar a API certifique se você possui o MongoDb instalado em seu computador(https://www.mongodb.com/try/download/community)._

Além disso, você precisa criar o arquivo .env com a url do seu banco, _utilize o arquivo .env.exemple para criar o seu_. Esse é um exemplo de string de conexão com o banco de dados: mongodb://localhost:27017/starwars_db.

Agora você pode executar o projeto:

- Para executar o projeto com o nodemon, digite no terminal:

```bash
npm run dev
```

- Para executar o projeto com o node, digite no terminal:

```bash
npm start
```

## Testando a API

Você pode utilizar as ferramentas:

- Postman
- Insomnia
- Thunder Client (plugin no vsCode)

Exemplos de URLs:

- Essa é a URL de teste padrão: http://localhost:3000/personagens
- Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:3000/personagens/613fdaa4c25e7d70de41dd5c
- Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:3000/personagens/filter?nome=Luke Skywalker

> Nesse site você consegue encontrar informações de personagens para testar os end-points: https://swapi.dev/api/people/

Essa é a estrutura JSON para fazer o POST e o PUT:

```json
{
  "_id": "613fdaa4c25e7d70de41dd5c",
  "nome": "Luke Skywalker",
  "nascimento": "4015",
  "genero": "Masculino"
}
```

Obrigado, volte sempre!
