const express = require("express");
const authroutes = express.Router();
const check = require("../validators/user/user-validator");
const mensaje = require("../validators/mensaje");
const { login, register } = require("../controller/auth.controller");
const { logOut } = require("../controller/user.controller");

//Login
authroutes.post("/login", login);
//register
authroutes.post("/register", check, mensaje, register);
 
authroutes.get("/logout", logOut);

module.exports = authroutes;
