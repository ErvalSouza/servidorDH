const express = require('express');

const app = express();

app.use(express.json())

let usuarios= []

app.get('/usuarios', (req,res)=>{
return res.json(usuarios);
});



app.post('/usuarios', (req,res)=>{
const {nome, sobrenome}= req.body;
console.log("nome:", nome, "sobrenome:", sobrenome)

const usuario= {
    nome,
    sobrenome,
};
usuarios.push(usuario)

return res.json(usuarios)
})

app.listen(3000, ()=>{
    console.log('servidor aberto na porta 3000')
});