const express = require('express');
const rutas = express.Router()

const { mostrar } = require('../controller/capacitacion.controller')

rutas.get('/capacitacion', mostrar)

module.exports = rutas