const express = require('express');

const rutas = express.Router();

const {mostrarRegistro, mostrarLogin, Registro, Login} = require ('../controller/registro.controller')

rutas.get("/registro", mostrarRegistro)
rutas.post("/registro", Registro)
rutas.get("/login", mostrarLogin)
rutas.post("/login", Login)


module.exports = rutas