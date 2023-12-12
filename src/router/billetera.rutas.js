const express = require('express');
const rutas = express.Router()

const {mostrar, mandar, lista} = require('../controller/billetera.controller')
const { isLoggedIn } = require('../lib/auth')

rutas.get('/agregar/', isLoggedIn, mostrar)
rutas.post('/billetera/agregar/:id', isLoggedIn, mandar);
rutas.get('/lista/:id', isLoggedIn, lista);

module.exports = rutas