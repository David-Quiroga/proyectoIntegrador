const express = require('express');

const rutas = express.Router();

const {mostrarRegistro, mostrarLogin} = require ('../controller/registro.controller')

rutas.get("/registro", mostrarRegistro)
rutas.get("/login", mostrarLogin)

module.exports = rutas