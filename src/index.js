import express from "express";
import http from 'http';
import socketio  from "socket.io";


const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use(express.static(__dirname + "/public"));


/***************************************/
io.on('connect',(socket)=>{
    Socket.on('teste',(res)=>{console.log(res);})
});
/***************************************/

/***a rota é definida aqui através do "/" onde posso lançar qualquer endereço **/
app.get('/',(req, res)=>{
    //res.send('hello word');
    res.json({status:true});
});

/***aqui por exemplo, eu digo que a rota é /teste*****/
app.get('/teste',(req, res)=>{
    res.send('hello word');
});


/***testando a rota é /pagina*****/
app.get('/pagina',(req, res)=>{
    res.render('index.html');
});





/***aqui ele "acompanha" tudo que acontece na porta 3333**/
server.listen('3333',()=>{ 
    console.log('servidor iniciado porta',3333)}
    );