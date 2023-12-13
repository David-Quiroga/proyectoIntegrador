const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
// const path = require("path");
// const CryptoJS = require("crypto-js");
const orm = require("../Database/dataBase.orm")
// const request = require('request');
// const fs = require('fs');
const sql = require("../Database/dataBase.sql");
const helpers = require("./helpers");

//INICIO DE SESION
passport.use(
	"local.signin",
	new LocalStrategy(
		{
			usernameField: "correo_electronico",
			passwordField: "contraseña",
			passReqToCallback: true,
		},
		async (req, correo_electronico, contraseña, done) => {
			const rows = await orm.usuario.findOne({ where: { correo_electronico: correo_electronico } });
			if (rows) {
				const user = rows;
				const validPassword = await helpers.matchPassword(
					contraseña,
					user.contraseña
				)
				if (validPassword) {
					done(
						null,
						user,
						req.flash(
							"message",
							"Bienvenido" + " " + user.nombre
						)
					);
				} else {
					done(null, false, req.flash("message", "Datos incorrectos"));
				}
			} else {
				return done(
					null,
					false,
					req.flash("message", "El nombre de usuario no existe.")
				);
			}
		}
	)
);
//REGISTRO
passport.use(
	"local.signup",
	new LocalStrategy(
		{
			usernameField: "correo_electronico",
			passwordField: "contraseña",
			passReqToCallback: true,
		},
		async (req, correo_electronico, contraseña, done) => {
			const usuarios = await orm.usuario.findOne({ where: { correo_electronico: correo_electronico } });
			if (usuarios === null) {
				const { nombre, correo_electronico } = req.body;
				let nuevoUsuario = {
					nombre,
					correo_electronico,
					contraseña
				};
				nuevoUsuario.contraseña = await helpers.encryptPassword(contraseña);
				const resultado = await orm.usuario.create(nuevoUsuario);
				nuevoUsuario.id = resultado.insertId;
				return done(null, nuevoUsuario)
				
			} else {
				if(usuarios) {
					const usuario = usuarios;
					if(nombre == usuario.nombre){
						done(null, false, req.flash("message", "El nombre de usuario ya existe."));
					} else {
						let nuevoUsuario = {
							correo_electronico,
							contraseña
						};
						nuevoUsuario.contraseña = await helpers.encryptPassword(contraseña);
						const resultado = await orm.usuario.create(nuevoUsuario);
						nuevoUsuario.id = resultado.insertId;
						return done(null, nuevoUsuario)
					}
				}
			}
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});
