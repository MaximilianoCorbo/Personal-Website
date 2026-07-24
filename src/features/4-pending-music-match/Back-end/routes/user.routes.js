const express = require("express");
const {
  traerCanciones,
  traerFiltros,
  traerArtistas,
  crearContextual,
  crearCupido,
  traerPlaylists,
  logOut,
  traerPlaylistsConCanciones,
} = require("../controller/user.controller");
const userRoutes = express.Router();

//Traer canciones
userRoutes.get("/canciones", traerCanciones);

//Traer artistas
userRoutes.get("/artistas", traerArtistas);

//Traer filtros
userRoutes.get("/filtros", traerFiltros);

//crear playlist de cupido
userRoutes.post("/contextual", crearContextual);

//crear playlist de contextual
userRoutes.post("/cupido", crearCupido);

//mostrar playlist por usuario
userRoutes.get("/perfil", traerPlaylists);

// //mostrar canciones de playlist
// userRoutes.get("/porcanciones", traerPlaylistsConCanciones);

//borrar token


module.exports = userRoutes;
