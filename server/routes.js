// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();
const push = require("./push");


const mensajes = [

  {
    _id: 'XXX',
    user: 'spiderman',
    mensaje: 'Hola Mundo'
  }

];


// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json( mensajes );
});


// Post mensaje
router.post('/', function (req, res) {
  
  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user
  };

  mensajes.push( mensaje );

  console.log(mensajes);


  res.json({
    ok: true,
    mensaje
  });
});

//Almacenar la suscripcion
router.post("/subscribe",(req,res) => {
  const sus = req.body;
  push.addSubscription(sus);
  res.json("suscribe");
});

//Key Publico
router.get("/key",(req,res) => {
  const key = push.getKey();
  res.send(key);
});

//Enviar notificacion
router.post("/push",(req,res) => {
  const not = {
    titulo:req.body.titulo,
    cuerpo:req.body.cuerpo,
    usuario:req.body.usuario,
  }
  push.sendPush(not);
  res.json(not);
}); 


module.exports = router;