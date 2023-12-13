const express = require('express');
const rutas = express.Router()

const {mostrar, mandar, lista} = require('../controller/billetera.controller')
const { show } = require('../controller/formulario.controller')
const { isLoggedIn } = require('../lib/auth')

rutas.get('/agregar/:id', isLoggedIn, mostrar)
rutas.post('/agregar/:id', isLoggedIn, mandar)
rutas.get('/lista/:id', isLoggedIn, lista);

rutas.get('/add', isLoggedIn, show)

module.exports = rutas