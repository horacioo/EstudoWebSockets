import express from "express";
import http from 'http';

const app = express();
const server = http.Server(app);

app.get('/',(req, res)=>{
    res.send('hello word');
});

server.listen('3333',()=>{
    console.log('servidor iniciado porta',3333)}
    );