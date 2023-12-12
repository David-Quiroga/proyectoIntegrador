const express = require('express');
const rutas = express.Router()

const {mostrar} = require('../controller/formulario.controller')

rutas.get('/formulario', mostrar)

module.exports = rutas