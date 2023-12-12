const express = require("express");
const rutas = express.Router()

const { mostrar} = require('../controller/principal.controller')

rutas.get('/principal', mostrar)

module.exports = rutas
