/*
Lista de EndPoint da aplicação

CRUD: CREATE, READ, UPDATE and DELETE

-[GET] /mensagens -> Retorna a lista de mensagens
-[GET] /mensagens{id} -> Retorna uma unica mensagem pelo id
-[POST] /mensagens -> Cria uma nova mensagem
-[PUT] /mensagens{id} -> Atualiza uma mensagem
-[DELETE] /mensagens{id} -> Vai remover uma mensagem pelo id

*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

const mensagens = [
  "Essa é a primeira mensagem",
  "Essa é a segunda mensagem"
];

//-[GET] /mensagens -> Retorna a lista de mensagens
app.get('/mensagens', (req,res) => {
  res.send(mensagens)
});
//-[GET] /mensagens{id} -> Retorna uma unica mensagem pelo id
app.get('/mensagens/:id', (req, res) => {
  const id = req.params.id;
  const mensagem = mensagens[id];

  res.send(mensagem)
})

app.listen(port, () => {
  console.log(`Está rodando na porta http://localhost:${port}`)
})
