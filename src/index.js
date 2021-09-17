import express from "express";
import http from 'http';

const app = express();
const server = http.Server(app);

/***a rota é definida aqui através do "/" onde posso lançar qualquer endereço **/
app.get('/',(req, res)=>{
    res.send('hello word');
});

server.listen('3333',()=>{ 
    console.log('servidor iniciado porta',3333)}
    );