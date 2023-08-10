Criação do Backend
- entrar na pasta nome do projeto
Instalar as dependências

```shell
npm i express
```

<p style='font-size:13px; margin-left: 6px'><b>npm i express</b> ele facilita a criação de um servidor, O "express" é um framework web popular para Node.js que simplifica o desenvolvimento de aplicativos web e APIs.</p>

```shell
npm i cors
```

<p style='font-size:13px; margin-left: 6px'><b>npm i cors</b> informam aos navegadores para permitir que uma aplicação Web seja executada em uma origem e acesse recursos de outra origem diferente.</p>

```shell
npm i mysql
```

<p style='font-size:13px; margin-left: 6px'>O comando npm i mysql ou npm install mysql é usado para instalar o pacote "mysql" no seu projeto Node.js. O pacote "mysql" é uma biblioteca que permite interagir com bancos de dados MySQL a partir de aplicativos Node.js.
</p>
<p style='font-size:13px; margin-left: 6px;'>Ao instalar o pacote "mysql", você pode usar as funções e métodos fornecidos pela biblioteca para estabelecer conexões com bancos de dados MySQL, executar consultas SQL, inserir, atualizar e excluir dados, entre outras operações relacionadas ao banco de dados..</p>

Em seguida fazemos a criacão do <b>server.js</b>

```javascript
const express = require('express')
const cors = require('cors')

const router = require('./src/routes/rota.js')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/',router)

app.listen(3000,() => {
    console.log("Servidor rodando na porta 3000")
})
```

O arquivo <b>server.js</b> deve estar dentro do backend

Logo em seguida devemos fazer a estrutura de pasta começando
